import type { Product } from "../../types";
import ProductRow from "./ProductRow";


interface ProductsTableProp {
    products: Product[]
}

const ProductsTable = ({ products }: ProductsTableProp) => {
    return <table className="w-full text-right border-collapse">
        <thead>
            <tr>
                <th className="p-2 border-b bg-blush-50 font-semibold">תמונה</th>
                <th className="p-2 border-b bg-blush-50 font-semibold">שם</th>
                <th className="p-2 border-b bg-blush-50 font-semibold">קטגוריה</th>
                <th className="p-2 border-b bg-blush-50 font-semibold">מחיר</th>
                <th className="p-2 border-b bg-blush-50 font-semibold">פעולות</th>
            </tr>
        </thead>
        <tbody>
            {products.map((product)=><ProductRow key={product.id} product={product}></ProductRow>)}
        </tbody>
    </table>
}

export default ProductsTable;