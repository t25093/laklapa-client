import { useQuery } from "@tanstack/react-query";
import { getAllOrders } from "../api/orders";
import EmptyState from "../components/common/EmptyState";
import ErrorMessage from "../components/common/ErrorMessage";
import Loader from "../components/common/Loader";
import PageTitle from "../components/common/PageTitle";
import OrdersList from "../components/orders/OrdersList";
import { useAuth } from "../context/AuthContext";
import { errorMessage } from "../utils/errors";
import divider from "../assets/floral-divider.svg";

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
        <p className="-mt-3 mb-2 text-gray-500">כל ההזמנות של הסטודיו במקום אחד</p>
        <img className="mb-8 w-48" src={divider} alt="" />
        {content()}
    </>
}

export default OrdersAdminPage;