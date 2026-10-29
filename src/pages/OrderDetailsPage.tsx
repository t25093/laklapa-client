import { useParams } from "react-router";
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
            <OrderItemsTable items={order.items}></OrderItemsTable>
            {order.status === "RECEIVED" && <CancelOrderButton orderId={order.id}></CancelOrderButton>}
        </div>
    }
    return <>
        <PageTitle>הזמנה #{orderId}</PageTitle>
        {content()}
    </>
}


export default OrderDetailsPage;



