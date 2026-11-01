import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../context/AuthContext";
import { getMyOrders } from "../api/orders";
import EmptyState from "../components/common/EmptyState";
import Loader from "../components/common/Loader";
import { errorMessage } from "../utils/errors";
import PageTitle from "../components/common/PageTitle";
import OrdersList from "../components/orders/OrdersList";
import ErrorMessage from "../components/common/ErrorMessage";
import divider from "../assets/floral-divider.svg";

const MyOrdersPage = () => {
    const { token } = useAuth()

    const { data: orders, isPending, error } = useQuery({
        queryKey: ["myOrders" ],
        queryFn: () => getMyOrders(token ?? "") 
    });

    const content = () => {
        if (isPending) return <Loader />;
        if (error) return <ErrorMessage message={errorMessage(error)} />;
        if (orders.length === 0) return <EmptyState message="עוד אין הזמנות"></EmptyState>
        else return <OrdersList orders={orders}/>;
    }

    return <>
    <PageTitle>ההזמנות שלי</PageTitle>
    <p className="-mt-3 mb-2 text-gray-500">כאן אפשר לעקוב אחרי כל הזרים שהזמנת</p>
    <img className="mb-8 w-48" src={divider} alt="" />
    {content()}
    </>
}

export default MyOrdersPage;