import { Link } from "react-router";
import type { Product } from "../../types";
import PriceTag from "../common/PriceTag";
import ProductImage from "../products/ProductImage";

interface ProductRowProp {
    product: Product
}

const ProductRow = ({ product }: ProductRowProp) => {
    return <tr>
        <td className="p-2 border-b"><ProductImage size="w-12 h-12" alt={product.name} src={product.imageUrl}></ProductImage></td>
        <td className="p-2 border-b">{product.name}</td>
        <td className="p-2 border-b">{product.category.name}</td>
        <td className="p-2 border-b"><PriceTag price={product.price}></PriceTag></td>
        <td className="p-2 border-b"><Link className="text-brand-600 hover:underline" to={`/admin/products/${product.id}/edit`}>עריכה</Link></td>
    </tr>
}

export default ProductRow;