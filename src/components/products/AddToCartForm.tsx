import { useForm } from "react-hook-form"
import { COLOR_OPTIONS } from "../../utils/constants"
import Button from "../common/Button"
import FormField from "../form/FormField"
import SelectField from "../form/SelectField"
import TextAreaField from "../form/TextAreaField"

export interface AddToCartValues {
    quantity: number,
    preferredColor: string,
    notes: string
}

interface AddToCartFormProp {
    onSubmit: (values: AddToCartValues) => void

}

const AddToCartForm = ({ onSubmit }: AddToCartFormProp) => {
    const { register, handleSubmit, formState: { errors } } = useForm<AddToCartValues>({
        defaultValues: { quantity: 1, preferredColor: "MIXED", notes: "" },
    })

    return <form className="flex flex-col gap-4 max-w-sm" noValidate onSubmit={handleSubmit(onSubmit)}>
        <FormField id="quantityId" label="כמות" type="number" registration={register("quantity", { valueAsNumber: true, required: "חובה למלא כמות", min: { value:1, message:"כמות מינימלית היא 1"}, max: { value:20, message:"כמות מקסימלית היא 20"} })} error={errors.quantity?.message}></FormField>
        <SelectField id="colorId" label="צבע מועדף" options={COLOR_OPTIONS} registration={register("preferredColor", { required: "חובה לבחור צבע מועדף" })}  error={errors.preferredColor?.message}></SelectField>
        <TextAreaField id="notesId" label="הערות (לא חובה)" registration={register("notes",{ maxLength: { value: 300, message: "עד 300 תווים" }})} error={errors.notes?.message}></TextAreaField>
        <Button type="submit">הוספה לסל</Button>
    </form>
}

export default AddToCartForm