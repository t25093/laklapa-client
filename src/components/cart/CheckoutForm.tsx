import { useForm } from "react-hook-form"
import FormField from "../form/FormField"
import Button from "../common/Button"
import { PHONE_PATTERN } from "../../utils/patterns"
import SelectField from "../form/SelectField"
import { DELIVERY_OPTIONS } from "../../utils/constants"
import { getTomorrow } from "../../utils/dates"
import TextAreaField from "../form/TextAreaField"

export interface CheckoutFormValues {
    recipientName: string,
    recipientPhone: string,
    deliveryMethod: string,
    deliveryAddress: string,
    requestedDate: string,
    greetingText: string
}

interface CheckoutFormProp {
    onSubmit: (values: CheckoutFormValues) => void,
    isPending?: boolean
}

const CheckoutForm = ({ onSubmit, isPending }: CheckoutFormProp) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<CheckoutFormValues>({
        defaultValues: { deliveryMethod: "DELIVERY", deliveryAddress: "", greetingText: "", recipientName: "", recipientPhone: "", requestedDate: "" },
    })
    const deliveryMethodWatch = watch("deliveryMethod");
    return <form className="flex flex-col gap-4 max-w-sm" noValidate onSubmit={handleSubmit(onSubmit)}>
        <FormField id="recipientNameId" label="שם המקבל/ת" registration={register("recipientName", { required: "שם המקבל/ת שדה חובה", maxLength: { value: 60, message: "עד 60 תווים" }, minLength: { value: 2, message: "לפחות 2 תווים" } })} error={errors.recipientName?.message}></FormField>
        <FormField id="recipientPhoneId" type="tel" label="טלפון המקבל/ת" registration={register("recipientPhone", { required: "חובה", pattern: { value: PHONE_PATTERN, message: "מספר טלפון לא תקין" } })} error={errors.recipientPhone?.message}></FormField>
        <SelectField id="deliveryMethodId" label="אופן הקבלה" options={DELIVERY_OPTIONS} registration={register("deliveryMethod",{required:"חובה לבחור את אופן השליחה"})} error={errors.deliveryMethod?.message}></SelectField>
        {deliveryMethodWatch === "DELIVERY" && (
            <FormField label="כתובת למשלוח" registration={register("deliveryAddress", { required: "חובה" ,maxLength:{value:200,message:"אורך מקסימלי 200"},minLength:{value:5,message:"אורך מינימלי 5"}})} id="deliveryAddressId" error={errors.deliveryAddress?.message}/>
    )}
        <FormField type="date" id="requestedDateId" label="תאריך מבוקש" registration={register("requestedDate", {required:"חובה לבחור תאריך",validate:(value) => getTomorrow()<=value || "אפשר להזמין החל ממחר"})} error={errors.requestedDate?.message}></FormField>
     <TextAreaField id="greetingTextId" label="ברכה לכרטיס (לא חובה)" registration={register("greetingText",{maxLength:{value:300,message:"אורך מקסימלי 300 תווים"}})} error={errors.greetingText?.message}></TextAreaField>
        <Button type="submit" disabled={isPending}>{isPending ? "בשליחה..." : "שליחת הזמנה"}</Button>
    </form>
}
export default CheckoutForm;