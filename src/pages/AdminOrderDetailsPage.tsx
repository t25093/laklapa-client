import Icon from "../components/common/Icon";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link, useParams } from "react-router";
import { getOrder, updateOrderStatus } from "../api/orders";
import type { StatusFormValues } from "../components/admin/StatusForm";
import StatusForm from "../components/admin/StatusForm";
import ErrorMessage from "../components/common/ErrorMessage";
import Loader from "../components/common/Loader";
import PageTitle from "../components/common/PageTitle";
import OrderInfo from "../components/orders/OrderInfo";
import OrderItemsTable from "../components/orders/OrderItemsTable";
import { useAuth } from "../context/AuthContext";
import { errorMessage } from "../utils/errors";


const AdminOrderDetailsPage = () => {

    const { token } = useAuth()
    const { id } = useParams();
    const orderId = Number(id)
    const { data: order, isPending, error } = useQuery({
        queryKey: ["order", orderId],
        queryFn: () => { return getOrder(orderId, token ?? "") },
    });

    const queryClient = useQueryClient();

    const { mutate, isPending: statusPending, error: statusError } = useMutation({
        mutationFn: (values: StatusFormValues) => updateOrderStatus(orderId, values.status, token ?? ""),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["order", orderId] });
            queryClient.invalidateQueries({ queryKey: ["adminOrders"] });
            queryClient.invalidateQueries({ queryKey: ["myOrders"] });
        },
    });

    const content = () => {
        if (isPending) return <Loader />;
        if (error) return <ErrorMessage message={errorMessage(error)} />;
        else return <div className="flex flex-col gap-6">
            {order.customer && <div className="rounded-[2rem] bg-blush-50/60 border border-blush-100 p-5 flex flex-wrap items-center gap-x-6 gap-y-2">
                <p className="font-display text-lg text-brand-800"><Icon name="user" className="inline-block w-5 h-5 align-[-0.2em] me-1.5 text-brand-600" />{order.customer.fullName}</p>
                <p className="text-sm text-gray-600"><Icon name="phone" className="inline-block w-4 h-4 align-[-0.2em] me-1.5 text-brand-600" />{order.customer.phone}</p>
                <p className="text-sm text-gray-600"><Icon name="envelope" className="inline-block w-4 h-4 align-[-0.2em] me-1.5 text-brand-600" />{order.customer.email}</p>
            </div>}
            <OrderInfo order={order}></OrderInfo>
            <p className="font-display text-xl text-brand-800"><Icon name="flower" className="inline-block w-5 h-5 align-[-0.2em] me-1.5 text-brand-600" />מה בהזמנה</p>
            <OrderItemsTable items={order.items}></OrderItemsTable>
            {statusError && <ErrorMessage message={errorMessage(statusError)} />}
            {order.status !== "DELIVERED" && order.status !== "CANCELLED" &&
                <div className="rounded-[2rem] bg-white border border-blush-100 shadow-card p-6 flex flex-col gap-3">
                    <p className="font-display text-xl text-brand-800"><Icon name="refresh" className="inline-block w-5 h-5 align-[-0.2em] me-1.5 text-brand-600" />עדכון סטטוס</p>
                    <StatusForm currentStatus={order.status} isPending={statusPending} onSubmit={(values) => mutate(values)} />
                </div>}
        </div>
    }
    return <>
        <Link to="/admin/orders" className="block mb-4 text-sm text-brand-600 hover:underline">→ לכל ההזמנות</Link>
        <PageTitle>הזמנה #{orderId}</PageTitle>
        {content()}
    </>
}


export default AdminOrderDetailsPage;



