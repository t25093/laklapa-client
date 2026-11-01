import type { OrderSummary } from "../../types";
import OrderSummaryRow from "./OrderSummaryRow";

interface OrderListProp {
    orders: OrderSummary[],
    basePath?: string
}

const OrdersList = ({basePath, orders }: OrderListProp) => {
    return <div className="flex flex-col gap-3">
        {orders.map((order)=><OrderSummaryRow basePath={basePath} order={order} key={order.id} />)}
    </div>
}

export default OrdersList;