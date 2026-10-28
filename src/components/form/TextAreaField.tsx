import type { UseFormRegisterReturn } from "react-hook-form";

interface TextAreaFieldProp {
    label: string,
    id: string,
    registration: UseFormRegisterReturn,
    error?: string,
    rows?: number
}

const TextAreaField = ({ id, label, registration, rows = 3, error }: TextAreaFieldProp) => {
    return <div className="flex flex-col gap-1">
        <label className="font-semibold text-sm" htmlFor={id}>{label}</label>
        <textarea className="border rounded-lg px-3 py-2 focus:outline-none focus:border-brand-600" id={id} {...registration} rows={rows}/>
        {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
}

export default TextAreaField;