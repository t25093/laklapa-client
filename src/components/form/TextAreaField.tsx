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
        <label className="font-brand font-medium text-sm text-brand-800" htmlFor={id}>{label}</label>
        <textarea className="bg-white border border-blush-200 rounded-xl px-4 py-2.5 transition focus:outline-none focus:border-brand-600 focus:ring-4 focus:ring-brand-50" id={id} {...registration} rows={rows}/>
        {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
}

export default TextAreaField;