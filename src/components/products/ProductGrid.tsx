import type { Product } from "../../types";
import ProductCard from "./ProductCard";

interface ProductGrid {
    products: Product[]
}

const ProductGrid = ({ products }: ProductGrid) => {

    return <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => <ProductCard key={product.id} product={product} />)}
    </div>

}

export default ProductGrid;