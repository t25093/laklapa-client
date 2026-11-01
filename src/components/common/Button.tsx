interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit";
    variant?: "primary" | "secondary" | "danger";
    disabled?: boolean;
    fullWidth?: boolean;
    size?: "md" | "sm";
}


const base = "rounded-full font-brand font-medium tracking-wide transition duration-300 hover:-translate-y-0.5 hover:shadow-soft active:translate-y-0"

const style = {
    primary: "bg-brand-600 text-white shadow-card hover:bg-brand-700",
    secondary: "bg-white text-brand-700 border border-brand-100 hover:border-brand-600",
    danger: "bg-white text-red-600 border border-red-200 hover:bg-red-50 hover:border-red-400"
}

const sizes = {
    md: "px-6 py-2.5",
    sm: "px-3 py-1 text-sm"
}

const Button = ({ children, onClick, type = "button", variant = "primary", disabled, fullWidth, size = "md" }: ButtonProps) => {
    const widthClass = fullWidth ? "w-full" : "";
    const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "";
    return <button className={`${style[variant]} ${disabledClass} ${base} ${sizes[size]} ${widthClass}`} onClick={onClick} type={type} disabled={disabled} >{children}</button>
}

export default Button;