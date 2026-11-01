import type { OrderItem } from "../../types";
import { COLOR_OPTIONS, getOptionLabel } from "../../utils/constants";
import PriceTag from "../common/PriceTag";

interface OrderItemsTableProp {
    items: OrderItem[]
}

const OrderItemsTable = ({ items }: OrderItemsTableProp) => {
    return <div className="overflow-x-auto rounded-2xl bg-white border border-blush-100 shadow-card">
        <table className="w-full text-right border-collapse">
        <thead>
            <tr>
                <th className="p-2 border-b bg-blush-50 font-brand font-medium text-brand-800">מוצר</th>
                <th className="p-2 border-b bg-blush-50 font-brand font-medium text-brand-800">צבע</th>
                <th className="p-2 border-b bg-blush-50 font-brand font-medium text-brand-800">כמות</th>
                <th className="p-2 border-b bg-blush-50 font-brand font-medium text-brand-800">מחיר ליחידה</th>
                <th className="p-2 border-b bg-blush-50 font-brand font-medium text-brand-800">סה"כ</th>
            </tr>
        </thead>
        <tbody>
            {items.map((item) =>
                <tr key={item.id}>
                    <td className="p-2 border-b">
                        {item.product.name}
                        {item.notes && <p className="text-sm text-gray-500">{item.notes}</p>}
                    </td>
                    <td className="p-2 border-b">{getOptionLabel(COLOR_OPTIONS,item.preferredColor)}</td>
                    <td className="p-2 border-b">{item.quantity}</td>
                    <td className="p-2 border-b"><PriceTag price={item.unitPrice}></PriceTag></td>
                    <td className="p-2 border-b"><PriceTag price={item.lineTotal}></PriceTag></td>
                </tr>
            )}
        </tbody>
    </table>
    </div>
}

export default OrderItemsTable;