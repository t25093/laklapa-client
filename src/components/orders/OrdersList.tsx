import type { OrderSummary } from "../../types";
import OrderSummaryRow from "./OrderSummaryRow";

interface OrderListProp {
    orders: OrderSummary[],
    basePath?: string
}

const OrdersList = ({basePath, orders }: OrderListProp) => {
    return <div>
        {orders.map((order)=><OrderSummaryRow basePath={basePath} order={order} key={order.id} />)}
    </div>
}

export default OrdersList;