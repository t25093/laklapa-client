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
        <label className="font-semibold text-sm" htmlFor={id}>{label}</label>
        <select className="border rounded-lg px-3 py-2 focus:outline-none focus:border-brand-600" id={id} {...registration} >
            {options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
        </select>
        {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
}

export default SelectField;