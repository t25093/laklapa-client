import { useForm } from "react-hook-form";
import type { Category, ProductFormValues } from "../../types";
import FormField from "../form/FormField";
import TextAreaField from "../form/TextAreaField";
import Button from "../common/Button";
import SelectField from "../form/SelectField";
import { useState } from "react";
import { uploadImage } from "../../api/upload";

interface ProductFormProp {
    onSubmit: (values: ProductFormValues) => void,
    isPending?: boolean,
    categories: Category[],
    defaultValues?: ProductFormValues
}

const ProductForm = ({ isPending, categories, defaultValues, onSubmit }: ProductFormProp) => {
    const { register, watch, handleSubmit, setValue, formState: { errors } } = useForm<ProductFormValues>({ defaultValues })
    const categoryOptions = categories.map((category) => ({ value: String(category.id), label: category.name }));
    const options = [{ value: "", label: "בחרי קטגוריה" }, ...categoryOptions]

    const imageUrl = watch("imageUrl");
    const [uploading, setUploading] = useState(false);
    const [uploadError, setUploadError] = useState<string | null>(null);

    async function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];
        if (!file) return;
        setUploading(true);
        setUploadError(null);
        try {
            const url = await uploadImage(file);
            setValue("imageUrl", url, { shouldValidate: true });
        } catch {
            setUploadError("העלאת התמונה נכשלה. נסי שוב");
        } finally {
            setUploading(false);
        }
    }

    return <form className="flex flex-col gap-5" noValidate onSubmit={handleSubmit(onSubmit)}>
        <FormField error={errors.name?.message} registration={register("name", { required: "חובה למלא שם מוצר", maxLength: { value: 80, message: "עד 80 תווים" }, minLength: { value: 2, message: "לפחות 2 תווים" } })} id="nameId" label="שם" ></FormField>
        <TextAreaField error={errors.description?.message} registration={register("description", { required: "חובה למלא תיאור המוצר", maxLength: { value: 1000, message: "עד 1000 תווים" }, minLength: { value: 10, message: "לפחות 10 תווים" } })} id="descriptionId" label="תיאור" ></TextAreaField>
        <FormField error={errors.price?.message} registration={register("price", { required: "חובה למלא מחיר למוצר", valueAsNumber: true, min: { value: 0.01, message: "מחיר גדול מ-0" } })} type="number" id="priceId" label="מחיר" ></FormField>

        <div className="flex flex-col gap-2">
            <span className="font-brand font-medium text-sm text-brand-800">תמונת המוצר</span>
            {imageUrl && <img className="w-32 h-32 object-cover rounded-2xl border border-blush-100" src={imageUrl} alt="" />}
            <input type="file" accept="image/*" onChange={handleFileChange}
                className="text-sm file:me-3 file:px-4 file:py-2 file:rounded-full file:border-0 file:bg-brand-50 file:text-brand-700 hover:file:bg-brand-100" />
            <input type="hidden" {...register("imageUrl", { required: "חובה להעלות תמונה" })} />
            {uploading && <p className="text-sm text-gray-500">מעלה תמונה...</p>}
            {uploadError && <p className="text-sm text-red-600">{uploadError}</p>}
            {errors.imageUrl && <p className="text-sm text-red-600">{errors.imageUrl.message}</p>}
        </div>

        <SelectField options={options} registration={register("categoryId", { setValueAs: (value) => Number(value), validate: (value) => value > 0 || "חובה לבחור קטגוריה" })} id="categoryId" label="קטגוריה" error={errors.categoryId?.message} ></SelectField>
        <Button type="submit" disabled={isPending || uploading}>{isPending ? "שומרת..." : "שמירה"}</Button>
    </form>
}

export default ProductForm;