import Icon from "../components/common/Icon";
import { Link, useParams } from "react-router";
import { useAuth } from "../context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { getOrder } from "../api/orders";
import PageTitle from "../components/common/PageTitle";
import Loader from "../components/common/Loader";
import { errorMessage } from "../utils/errors";
import OrderInfo from "../components/orders/OrderInfo";
import ErrorMessage from "../components/common/ErrorMessage";
import OrderItemsTable from "../components/orders/OrderItemsTable";
import CancelOrderButton from "../components/orders/CancelOrderButton";


const OrderDetailsPage = () => {

    const { token } = useAuth()
    const { id } = useParams();
    const orderId = Number(id)
    const { data: order, isPending, error } = useQuery({
        queryKey: ["order", orderId],
        queryFn: () => { return getOrder(orderId, token ?? "") },
    });

    const content = () => {
        if (isPending) return <Loader />;
        if (error) return <ErrorMessage message={errorMessage(error)} />;
        else return <div className="flex flex-col gap-6">
            <OrderInfo order={order}></OrderInfo>
            <p className="font-display text-xl text-brand-800"><Icon name="flower" className="inline-block w-5 h-5 align-[-0.2em] me-1.5 text-brand-600" />מה בהזמנה</p>
            <OrderItemsTable items={order.items}></OrderItemsTable>
            {order.status === "RECEIVED" && <div className="rounded-[2rem] bg-blush-50/60 border border-blush-100 p-5 flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm text-gray-600">אפשר לבטל את ההזמנה עד שהיא נכנסת להכנה</p>
                <CancelOrderButton orderId={order.id}></CancelOrderButton>
            </div>}
        </div>
    }
    return <>
        <Link to="/orders" className="block mb-4 text-sm text-brand-600 hover:underline">→ לכל ההזמנות</Link>
        <PageTitle>הזמנה #{orderId}</PageTitle>
        {content()}
    </>
}


export default OrderDetailsPage;



