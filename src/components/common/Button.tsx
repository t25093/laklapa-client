interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit";
    variant?: "primary" | "secondary" | "danger";
    disabled?: boolean;
    fullWidth?: boolean;
}


const base = "px-6 py-2.5 rounded-full font-brand font-medium tracking-wide transition duration-300 hover:-translate-y-0.5 hover:shadow-soft active:translate-y-0"

const style = {
    primary: "bg-brand-600 text-white shadow-card hover:bg-brand-700",
    secondary: "bg-white text-brand-700 border border-brand-100 hover:border-brand-600",
    danger: "bg-red-600 text-white hover:bg-red-700"
}

const Button = ({ children, onClick, type = "button", variant = "primary", disabled, fullWidth }: ButtonProps) => {
    const widthClass = fullWidth ? "w-full" : "";
    const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "";
    return <button className={`${style[variant]} ${disabledClass} ${base} ${widthClass}`} onClick={onClick} type={type} disabled={disabled} >{children}</button>
}

export default Button;