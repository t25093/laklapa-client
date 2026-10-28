import { useForm } from "react-hook-form"
import FormField from "../form/FormField"
import Button from "../common/Button"
import { EMAIL_PATTERN, PASSWORD_PATTERN, PHONE_PATTERN } from "../../utils/patterns"
import type { FieldErrors } from "../../types";
import { useEffect } from "react";

export interface RegisterFormValues {
    fullName: string,
    email: string,
    phone: string,
    password: string,
    confirmPassword: string
}

interface RegisterFormProp {
    onSubmit: (values: RegisterFormValues) => void,
    isPending?: boolean,
    serverErrors?: FieldErrors
}

const RegisterForm = ({ onSubmit, isPending, serverErrors }: RegisterFormProp) => {

    const { register, handleSubmit, getValues, setError, formState: { errors } } = useForm<RegisterFormValues>()

    useEffect(() => {
        if (!serverErrors) return;
        for (const field in serverErrors) {
            setError(field as keyof RegisterFormValues, { message: serverErrors[field] });
        }
    }, [serverErrors, setError]);

    return <form noValidate className="flex flex-col gap-4 max-w-sm" onSubmit={handleSubmit(onSubmit)}>
        <FormField type="text" id="fullNameId" label="שם מלא" registration={register("fullName", { required: "שם מלא הוא שדה חובה", minLength: { value: 2, message: "שם מלא חייב להכיל לפחות 2 תווים" }, maxLength: { value: 60, message: "שם מלא יכול להכיל עד 60 תווים" } })} error={errors.fullName?.message} ></FormField>
        <FormField type="email" id="emailId" label="אימייל" registration={register("email", { required: "אימייל הוא שדה חובה", pattern: { value: EMAIL_PATTERN, message: "כתובת אימייל לא תקינה" } })} error={errors.email?.message} ></FormField>
        <FormField type="tel" id="phoneId" label="טלפון" registration={register("phone", { required: "טלפון הוא שדה חובה", pattern: { value: PHONE_PATTERN, message: "מספר טלפון לא תקין (לדוגמה 050-1234567)" } })} error={errors.phone?.message} ></FormField>
        <FormField type="password" id="passwordId" label="סיסמה" registration={register("password", { required: "סיסמה היא שדה חובה", minLength: { value: 8, message: "סיסמה חייבת להכיל לפחות 8 תווים" }, pattern: { value: PASSWORD_PATTERN, message: "סיסמה חייבת להכיל לפחות אות אחת באנגלית וספרה אחת" } })} error={errors.password?.message} ></FormField>
        <FormField type="password" id="confirmPasswordId" label="אימות סיסמה" registration={register("confirmPassword", { required: "יש לאמת את הסיסמה", validate: (value) => value === getValues("password") || "הסיסמאות לא תואמות" })} error={errors.confirmPassword?.message} ></FormField>
        <Button disabled={isPending} type="submit">{isPending ? "נרשמת..." : "הרשמה"}</Button>
    </form>
}

export default RegisterForm;