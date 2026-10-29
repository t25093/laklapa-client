import { useState } from "react";

interface ProductImageProp {
    src: string,
    alt: string,
    size?:string
}

const ProductImage = ({size="w-full h-48", alt, src }: ProductImageProp) => {
    const [error, setError] = useState(false);
    if(error)
        return <div className={`bg-blush-50 rounded-lg ${size} text-4xl justify-center items-center flex`}>🌸</div>
    return <img className={`${size} object-cover rounded-lg`} src={src} alt={alt} onError={()=>setError(true)}/>
}

export default ProductImage;