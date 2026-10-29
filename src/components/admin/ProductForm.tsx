import { useForm } from "react-hook-form";
import type { Category, ProductFormValues } from "../../types";
import FormField from "../form/FormField";
import TextAreaField from "../form/TextAreaField";
import Button from "../common/Button";
import SelectField from "../form/SelectField";

interface ProductFormProp {
    onSubmit: (values: ProductFormValues) => void,
    isPending?: boolean,
    categories: Category[],
    defaultValues?: ProductFormValues
}

const ProductForm = ({ isPending, categories, defaultValues, onSubmit }: ProductFormProp) => {
    const { register, handleSubmit, formState: { errors } } = useForm<ProductFormValues>({ defaultValues })
    const categoryOptions = categories.map((category) => ({ value: String(category.id), label: category.name }));
    const options = [{ value: "", label: "בחרי קטגוריה" }, ...categoryOptions]

    return <form className="flex flex-col gap-4 max-w-md" noValidate onSubmit={handleSubmit(onSubmit)}>
        <FormField error={errors.name?.message} registration={register("name", { required: "חובה למלא שם מוצר", maxLength: { value: 80, message: "עד 80 תווים" }, minLength: { value: 2, message: "לפחות 2 תווים" } })} id="nameId" label="שם" ></FormField>
        <TextAreaField error={errors.description?.message} registration={register("description", { required: "חובה למלא תיאור המוצר", maxLength: { value: 1000, message: "עד 1000 תווים" }, minLength: { value: 10, message: "לפחות 10 תווים" } })} id="descriptionId" label="תיאור" ></TextAreaField>
        <FormField error={errors.price?.message} registration={register("price", { required: "חובה למלא מחיר למוצר", valueAsNumber: true, min: { value: 0.01, message: "מחיר גדול מ-0" } })} type="number" id="priceId" label="מחיר" ></FormField>
        <FormField error={errors.imageUrl?.message} registration={register("imageUrl", { required: "חובה לצרף תמונה" })} id="imageUrlId" label="קישור לתמונה" ></FormField>
        <SelectField options={options} registration={register("categoryId", { setValueAs: (value) => Number(value), validate: (value) => value > 0 || "חובה לבחור קטגוריה" })} id="categoryId" label="קטגוריה" error={errors.categoryId?.message} ></SelectField>
        <Button type="submit" disabled={isPending}>{isPending ? "שומרת..." : "שמירה"}</Button>
    </form>
}

export default ProductForm;