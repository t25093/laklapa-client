import { Link } from "react-router";
import { type Product } from "../../types";
import PriceTag from "../common/PriceTag";
import ProductImage from "./ProductImage";

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    return <Link to={`/products/${product.id}`}>
    <div className="border rounded-xl shadow-md bg-white p-4 flex flex-col gap-2 hover:shadow-lg transition">
        <ProductImage alt={product.name} src={product.imageUrl}></ProductImage>
        <div className="text-lg font-bold">{product.name}</div>
        <div className="text-sm text-gray-600">{product.description}</div>
        <PriceTag price={product.price}></PriceTag>
    </div>
    </Link>
}

export default ProductCard