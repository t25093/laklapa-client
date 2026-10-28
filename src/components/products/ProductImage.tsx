import { useState } from "react";

interface ProductImageProp {
    src: string,
    alt: string
}

const ProductImage = ({ alt, src }: ProductImageProp) => {
    const [error, setError] = useState(false);
    if(error)
        return <div className="bg-blush-50 rounded-lg w-full h-48 text-4xl justify-center items-center flex">🌸</div>
    return <img className="w-full h-48 object-cover rounded-lg" src={src} alt={alt} onError={()=>setError(true)}/>

}

export default ProductImage;