import type { OrderItem } from "../../types";
import { COLOR_OPTIONS } from "../../utils/constants";
import PriceTag from "../common/PriceTag";

interface OrderItemsTableProp {
    items: OrderItem[]
}

const OrderItemsTable = ({ items }: OrderItemsTableProp) => {
    return <table className="w-full text-right border-collapse">
        <thead>
            <tr>
                <th className="p-2 border-b bg-blush-50 font-semibold">מוצר</th>
                <th className="p-2 border-b bg-blush-50 font-semibold">צבע</th>
                <th className="p-2 border-b bg-blush-50 font-semibold">כמות</th>
                <th className="p-2 border-b bg-blush-50 font-semibold">מחיר ליחידה</th>
                <th className="p-2 border-b bg-blush-50 font-semibold">סה"כ</th>
            </tr>
        </thead>
        <tbody>
            {items.map((item) =>
                <tr key={item.id}>
                    <td className="p-2 border-b">
                        {item.product.name}
                        {item.notes && <p className="text-sm text-gray-500">{item.notes}</p>}
                    </td>
                    <td className="p-2 border-b">{COLOR_OPTIONS.find((color) => color.value === item.preferredColor)?.label}</td>
                    <td className="p-2 border-b">{item.quantity}</td>
                    <td className="p-2 border-b"><PriceTag price={item.unitPrice}></PriceTag></td>
                    <td className="p-2 border-b"><PriceTag price={item.lineTotal}></PriceTag></td>
                </tr>
            )}
        </tbody>
    </table>
}

export default OrderItemsTable;