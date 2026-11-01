import bouquet from "../../assets/floral-bouquet.svg";
import { useState } from "react";

interface ProductImageProp {
    src: string,
    alt: string,
    size?:string
}

const ProductImage = ({size="w-full h-48", alt, src }: ProductImageProp) => {
    const [error, setError] = useState(false);
    if(error)
        return <div className={`bg-blush-50 rounded-2xl ${size} justify-center items-center flex`}><img className="w-2/3 max-h-[80%] opacity-80" src={bouquet} alt="" /></div>
    return <img className={`${size} object-cover rounded-2xl`} src={src} alt={alt} onError={()=>setError(true)}/>
}

export default ProductImage;