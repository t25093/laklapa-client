import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router";
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
            {order.customer && <p>👤 לקוחה: {order.customer.fullName}, {order.customer.phone}, {order.customer.email}</p>}
            <OrderInfo order={order}></OrderInfo>
            <OrderItemsTable items={order.items}></OrderItemsTable>
            {statusError && <ErrorMessage message={errorMessage(statusError)} />}
            {order.status !== "DELIVERED" && order.status !== "CANCELLED" &&
                <StatusForm currentStatus={order.status} isPending={statusPending} onSubmit={(values) => mutate(values)} />}
        </div>
    }
    return <>
        <PageTitle>הזמנה #{orderId}</PageTitle>
        {content()}
    </>
}


export default AdminOrderDetailsPage;



