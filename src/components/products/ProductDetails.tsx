import type { Product } from "../../types";
import PriceTag from "../common/PriceTag";
import ProductImage from "./ProductImage";

interface ProductDetailsProp {
    product: Product
}

const ProductDetails = ({ product }: ProductDetailsProp) => {
    return (
        <div className="grid gap-8 md:grid-cols-2">
            <div>
                <ProductImage alt={product.name} src={product.imageUrl}></ProductImage>
            </div>
            <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-500">{product.category.name}</p>
                <p>{product.description}</p>
                <PriceTag price={product.price}></PriceTag>
            </div>
        </div>
    )
}

export default ProductDetails;