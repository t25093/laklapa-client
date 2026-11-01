import { Link } from "react-router";
import type { Product } from "../../types";
import PriceTag from "../common/PriceTag";
import ProductImage from "../products/ProductImage";
import ToggleActiveButton from "./ToggleActiveButton";

interface ProductRowProp {
    product: Product
}

const ProductRow = ({ product }: ProductRowProp) => {
    return <tr className={product.isActive ? "" : "bg-gray-50 text-gray-400"}>
        <td className="p-2 border-b"><ProductImage size="w-12 h-12" alt={product.name} src={product.imageUrl}></ProductImage></td>
        <td className="p-2 border-b">{product.name}</td>
        <td className="p-2 border-b">{product.category.name}</td>
        <td className="p-2 border-b"><PriceTag price={product.price}></PriceTag></td>
        <td className="p-2 border-b">
            {product.isActive
                ? <span className="px-3 py-1 rounded-full text-xs bg-green-100 text-green-800">פעיל</span>
                : <span className="px-3 py-1 rounded-full text-xs bg-gray-200 text-gray-600">מוסתר</span>}
        </td>
        <td className="p-2 border-b">
            <div className="flex flex-wrap items-center gap-3">
                <Link className="text-brand-600 hover:underline" to={`/admin/products/${product.id}/edit`}>עריכה</Link>
                <ToggleActiveButton productId={product.id} isActive={product.isActive}></ToggleActiveButton>
            </div>
        </td>
    </tr>
}

export default ProductRow;
