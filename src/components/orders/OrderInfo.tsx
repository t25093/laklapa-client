import type { Order } from "../../types"
import { DELIVERY_OPTIONS } from "../../utils/constants"
import PriceTag from "../common/PriceTag"
import StatusBadge from "./StatusBadge"

interface OrderInfoProp {
    order: Order
}

const OrderInfo = ({ order }: OrderInfoProp) => {
    const deliveryLabel = DELIVERY_OPTIONS.find((option) => option.value === order.deliveryMethod)?.label

    return <div className="p-4 border rounded-xl flex flex-col gap-2">
        <p><span className="font-semibold">סטטוס: </span><StatusBadge status={order.status} /></p>
        <p><span className="font-semibold">אופן הקבלה: </span>{deliveryLabel}</p>
        {order.deliveryAddress && <p><span className="font-semibold">כתובת: </span>{order.deliveryAddress}</p>}
        <p><span className="font-semibold">מקבל/ת: </span>{order.recipientName}, {order.recipientPhone}</p>
        <p><span className="font-semibold">תאריך מסירה: </span>{order.requestedDate}</p>
        {order.greetingText && <p><span className="font-semibold">ברכה: </span>{order.greetingText}</p>}
        <p><span className="font-semibold">סה"כ: </span><PriceTag price={order.totalAmount} /></p>
    </div>
}

export default OrderInfo