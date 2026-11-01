import { Link } from "react-router";
import type { OrderSummary } from "../../types";
import PriceTag from "../common/PriceTag";
import StatusBadge from "./StatusBadge";

interface OrderSummaryRowProp {
    order: OrderSummary,
     basePath?:string
}

const OrderSummaryRow = ({basePath="/orders", order }: OrderSummaryRowProp) => {
    return <Link to={`${basePath}/${order.id}`} className="flex justify-between items-center gap-4 rounded-2xl bg-white p-4 border border-blush-100 shadow-card transition hover:-translate-y-0.5 hover:bg-blush-50">
        <div className="flex flex-col gap-1">
            <p className="font-semibold">הזמנה # {order.id}</p>
            <p className="text-sm text-gray-500">למסירה ב- {order.requestedDate}</p>
            <p className="text-sm text-gray-500">אל: {order.recipientName}</p>
        </div>
        <div className="flex items-center gap-4">
            <StatusBadge status={order.status} />
            <PriceTag price={order.totalAmount} />
        </div>
    </Link>
}

export default OrderSummaryRow;