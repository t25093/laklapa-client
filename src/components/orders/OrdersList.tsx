import type { OrderSummary } from "../../types";
import OrderSummaryRow from "./OrderSummaryRow";

interface OrderListProp {
    orders: OrderSummary[]
}

const OrdersList = ({ orders }: OrderListProp) => {
    return <div>
        {orders.map((order)=><OrderSummaryRow order={order} key={order.id} />)}
    </div>
}

export default OrdersList;