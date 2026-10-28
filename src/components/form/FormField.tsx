import type { UseFormRegisterReturn } from "react-hook-form";

interface FormFieldProps {
    label: string,
    id: string,
    type?: "text" | "email" | "password" | "tel" | "number" | "date",
    registration: UseFormRegisterReturn,
    error?: string
}

const FormField = ({ label, id, type = "text", registration, error }: FormFieldProps) => {
    return <div className="flex flex-col gap-1">
        <label className="font-semibold text-sm" htmlFor={id}>{label}</label>
        <input className="border rounded-lg px-3 py-2 focus:outline-none focus:border-brand-600" id={id} {...registration} type={type} />
        {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
}

export default FormField;
