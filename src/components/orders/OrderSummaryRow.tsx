import Icon from "../common/Icon";
import { Link } from "react-router";
import type { OrderSummary } from "../../types";
import PriceTag from "../common/PriceTag";
import StatusBadge from "./StatusBadge";

interface OrderSummaryRowProp {
    order: OrderSummary,
     basePath?:string
}

const OrderSummaryRow = ({basePath="/orders", order }: OrderSummaryRowProp) => {
    return <Link to={`${basePath}/${order.id}`} className="rounded-[2rem] bg-white border border-blush-100 shadow-card p-5 flex flex-wrap items-center gap-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-soft">
        <span className="w-12 h-12 shrink-0 rounded-full bg-blush-50 flex items-center justify-center text-brand-600"><Icon name="flower" className="w-6 h-6" /></span>
        <div className="flex flex-col gap-1 flex-1 min-w-40">
            <p className="font-display text-xl text-brand-800">הזמנה #{order.id}</p>
            <p className="text-sm text-gray-500"><Icon name="calendar" className="inline-block w-3.5 h-3.5 align-[-0.2em] me-1.5 text-brand-600" />למסירה ב־{order.requestedDate} · <Icon name="user" className="inline-block w-3.5 h-3.5 align-[-0.2em] me-1.5 text-brand-600" />{order.recipientName}</p>
        </div>
        <div className="flex items-center gap-4">
            <StatusBadge status={order.status} />
            <span className="font-display text-lg"><PriceTag price={order.totalAmount} /></span>
            <span className="text-brand-600" aria-hidden="true">←</span>
        </div>
    </Link>
}

export default OrderSummaryRow;