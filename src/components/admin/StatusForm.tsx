import { useForm } from "react-hook-form"
import { STATUS_OPTIONS } from "../../utils/constants"
import Button from "../common/Button"
import SelectField from "../form/SelectField"

export interface StatusFormValues {
    status: string
}

interface StatusFormProp {
    onSubmit: (values: StatusFormValues) => void,
    isPending?: boolean,
    currentStatus: string

}

const StatusForm = ({ onSubmit, currentStatus, isPending }: StatusFormProp) => {
    const { register, handleSubmit, formState: { errors } } = useForm<StatusFormValues>({
        defaultValues: {status:currentStatus },
    })

    return <form className="flex gap-2 items-end" noValidate onSubmit={handleSubmit(onSubmit)}>
        <SelectField id="statusId" label="שינוי סטטוס" options={STATUS_OPTIONS} registration={register("status", { required: "חובה לבחור סטטוס" })} error={errors.status?.message}></SelectField>
<Button type="submit" disabled={isPending}>{isPending ? "עדכון סטטוס": "...מעדכנת"}</Button>    </form>
}

export default StatusForm