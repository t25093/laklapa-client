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
        <label className="font-brand font-medium text-sm text-brand-800" htmlFor={id}>{label}</label>
        <input className="bg-white border border-blush-200 rounded-xl px-4 py-2.5 transition focus:outline-none focus:border-brand-600 focus:ring-4 focus:ring-brand-50" id={id} {...registration} type={type} />
        {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
}

export default FormField;
