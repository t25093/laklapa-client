import Icon from "../common/Icon";
import type { Order } from "../../types"
import { DELIVERY_OPTIONS, getOptionLabel } from "../../utils/constants"
import PriceTag from "../common/PriceTag"
import StatusBadge from "./StatusBadge"

interface OrderInfoProp {
    order: Order
}

const OrderInfo = ({ order }: OrderInfoProp) => {
    const deliveryLabel = getOptionLabel(DELIVERY_OPTIONS,order.deliveryMethod)

    return <div className="rounded-[2rem] bg-white border border-blush-100 shadow-card p-6 flex flex-col gap-5">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-blush-100 pb-4">
            <StatusBadge status={order.status} />
            <span className="font-display text-2xl"><PriceTag price={order.totalAmount} /></span>
        </div>
        <dl className="grid gap-4 sm:grid-cols-2">
            <div><dt className="text-xs text-gray-500"><Icon name="truck" className="inline-block w-3.5 h-3.5 align-[-0.2em] me-1.5 text-brand-600" />אופן הקבלה</dt><dd>{deliveryLabel}</dd></div>
            <div><dt className="text-xs text-gray-500"><Icon name="calendar" className="inline-block w-3.5 h-3.5 align-[-0.2em] me-1.5 text-brand-600" />תאריך מסירה</dt><dd>{order.requestedDate}</dd></div>
            <div><dt className="text-xs text-gray-500"><Icon name="user" className="inline-block w-3.5 h-3.5 align-[-0.2em] me-1.5 text-brand-600" />מקבל/ת</dt><dd>{order.recipientName}</dd></div>
            <div><dt className="text-xs text-gray-500"><Icon name="phone" className="inline-block w-3.5 h-3.5 align-[-0.2em] me-1.5 text-brand-600" />טלפון</dt><dd>{order.recipientPhone}</dd></div>
            {order.deliveryAddress && <div className="sm:col-span-2"><dt className="text-xs text-gray-500"><Icon name="pin" className="inline-block w-3.5 h-3.5 align-[-0.2em] me-1.5 text-brand-600" />כתובת</dt><dd>{order.deliveryAddress}</dd></div>}
        </dl>
        {order.greetingText && <div className="rounded-2xl bg-blush-50/70 border border-blush-100 p-4">
            <p className="text-xs text-gray-500 mb-1"><Icon name="envelope" className="inline-block w-3.5 h-3.5 align-[-0.2em] me-1.5 text-brand-600" />הברכה לכרטיס</p>
            <p className="font-display text-lg text-brand-800">"{order.greetingText}"</p>
        </div>}
    </div>
}

export default OrderInfo