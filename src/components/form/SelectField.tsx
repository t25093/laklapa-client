import type { UseFormRegisterReturn } from "react-hook-form"

interface SelectFieldProp {
    id: string,
    label: string,
    registration: UseFormRegisterReturn,
    error?: string,
    options: { value: string; label: string }[]
}

const SelectField = ({ label, id, registration, options, error }: SelectFieldProp) => {
    return <div className="flex flex-col gap-1">
        <label className="font-brand font-medium text-sm text-brand-800" htmlFor={id}>{label}</label>
        <select className="bg-white border border-blush-200 rounded-xl px-4 py-2.5 transition focus:outline-none focus:border-brand-600 focus:ring-4 focus:ring-brand-50" id={id} {...registration} >
            {options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
        </select>
        {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
}

export default SelectField;