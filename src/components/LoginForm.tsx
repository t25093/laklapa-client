import FormField from "./form/FormField"
import { useForm } from "react-hook-form"
import Button from "./common/Button"
import { EMAIL_PATTERN } from "../utils/patterns"

export interface LoginFormValues {
    email: string,
    password: string
}


interface LoginFormProp {
    onSubmit: (values: LoginFormValues) => void
    isPending?:boolean
}

const LoginForm = ({ onSubmit,isPending }: LoginFormProp) => {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>()

    return <form noValidate className="flex flex-col gap-4 max-w-sm" onSubmit={handleSubmit(onSubmit)}>
        <FormField id="emailId" label="אימייל" type="email" registration={register("email", { required: "חובה למלא אימייל", pattern: { value: EMAIL_PATTERN, message: "מייל לא חוקי" } })} error={errors.email?.message}></FormField>
        <FormField label="סיסמה" id="passId" type="password" registration={register("password", { required: "חובה למלא סיסמה" })} error={errors.password?.message}></FormField>
        <Button type="submit" disabled={isPending}>{isPending? "מתחברת..." : "התחברות"}</Button>
    </form>
}

export default LoginForm;