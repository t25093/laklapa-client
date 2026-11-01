import { Link } from "react-router";
import { type Product } from "../../types";
import PriceTag from "../common/PriceTag";
import ProductImage from "./ProductImage";

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    return <Link to={`/products/${product.id}`}>
    <div className="rounded-3xl bg-white p-4 border border-blush-100 shadow-card flex flex-col gap-2 transition duration-300 hover:-translate-y-1 hover:shadow-soft">
        <ProductImage alt={product.name} src={product.imageUrl}></ProductImage>
        <div className="font-display text-xl font-medium text-brand-800">{product.name}</div>
        <div className="text-sm text-gray-600">{product.description}</div>
        <PriceTag price={product.price}></PriceTag>
    </div>
    </Link>
}

export default ProductCard