interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit";
    variant?: "primary" | "secondary" | "danger";
    disabled?: boolean;
    fullWidth?: boolean;
}


const base = "px-4 py-2 rounded-lg font-semibold transition"

const style = {
    primary: "bg-brand-600 text-white hover:bg-brand-700",
    secondary: "bg-white text-brand-600 border border-brand-600 hover:bg-brand-50",
    danger: "bg-red-600 text-white hover:bg-red-700"
}

const Button = ({ children, onClick, type = "button", variant = "primary", disabled, fullWidth }: ButtonProps) => {
    const widthClass = fullWidth ? "w-full" : "";
    const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "";
    return <button className={`${style[variant]} ${disabledClass} ${base} ${widthClass}`} onClick={onClick} type={type} disabled={disabled} >{children}</button>
}

export default Button;