import type { Product } from "../../types";
import PriceTag from "../common/PriceTag";
import ProductImage from "./ProductImage";
import divider from "../../assets/floral-divider.svg";

interface ProductDetailsProp {
    product: Product,
    children?: React.ReactNode
}

const ProductDetails = ({ product, children }: ProductDetailsProp) => {
    return (
        <div className="grid gap-10 md:grid-cols-2 items-start">
            <div className="relative rounded-[2rem] bg-white border border-blush-100 shadow-soft p-3">
                <ProductImage size="w-full h-80 md:h-[28rem]" alt={product.name} src={product.imageUrl}></ProductImage>
                <span className="absolute top-6 right-6 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur text-sm text-brand-700 shadow-card">🌸 נשזר ביד</span>
            </div>
            <div className="flex flex-col gap-5">
                <span className="self-start px-4 py-1 rounded-full bg-brand-50 text-brand-700 text-sm">{product.category.name}</span>
                <p className="text-lg leading-relaxed text-gray-600">{product.description}</p>
                <div className="font-display text-3xl"><PriceTag price={product.price}></PriceTag></div>
                <img className="w-40" src={divider} alt="" />
                <ul className="grid gap-2 text-sm text-gray-600">
                    <li>🌷 פרחים טריים שנבחרים ביום המסירה</li>
                    <li>🚚 משלוח עד הבית או איסוף עצמי</li>
                    <li>💌 כרטיס ברכה אישי, בלי תוספת תשלום</li>
                </ul>
                {children}
            </div>
        </div>
    )
}

export default ProductDetails;
