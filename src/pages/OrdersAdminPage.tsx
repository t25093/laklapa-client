import { useQuery } from "@tanstack/react-query";
import { getAllOrders } from "../api/orders";
import EmptyState from "../components/common/EmptyState";
import ErrorMessage from "../components/common/ErrorMessage";
import Loader from "../components/common/Loader";
import PageTitle from "../components/common/PageTitle";
import OrdersList from "../components/orders/OrdersList";
import { useAuth } from "../context/AuthContext";
import { errorMessage } from "../utils/errors";

const OrdersAdminPage = () => {
    const { token } = useAuth()

    const { data: orders, isPending, error } = useQuery({
        queryKey: ["adminOrders"],
        queryFn: () => getAllOrders(token ?? "")
    });

    const content = () => {
        if (isPending) return <Loader />;
        if (error) return <ErrorMessage message={errorMessage(error)} />;
        if (orders.length === 0) return <EmptyState message="עוד אין הזמנות"></EmptyState>
        else return <OrdersList basePath="/admin/orders" orders={orders} />;
    }

    return <>
        <PageTitle>ניהול הזמנות</PageTitle>
        {content()}
    </>
}

export default OrdersAdminPage;