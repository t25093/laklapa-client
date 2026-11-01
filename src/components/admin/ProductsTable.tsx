import type { Product } from "../../types";
import ProductRow from "./ProductRow";


interface ProductsTableProp {
    products: Product[]
}

const ProductsTable = ({ products }: ProductsTableProp) => {
    return <div className="overflow-x-auto rounded-2xl bg-white border border-blush-100 shadow-card">
        <table className="w-full text-right border-collapse">
        <thead>
            <tr>
                <th className="p-2 border-b bg-blush-50 font-brand font-medium text-brand-800">תמונה</th>
                <th className="p-2 border-b bg-blush-50 font-brand font-medium text-brand-800">שם</th>
                <th className="p-2 border-b bg-blush-50 font-brand font-medium text-brand-800">קטגוריה</th>
                <th className="p-2 border-b bg-blush-50 font-brand font-medium text-brand-800">מחיר</th>
                <th className="p-2 border-b bg-blush-50 font-brand font-medium text-brand-800">סטטוס</th>
                <th className="p-2 border-b bg-blush-50 font-brand font-medium text-brand-800">פעולות</th>
            </tr>
        </thead>
        <tbody>
            {products.map((product)=><ProductRow key={product.id} product={product}></ProductRow>)}
        </tbody>
    </table>
    </div>
}

export default ProductsTable;