import { NavLink } from "react-router"
import { linkClass } from "./linkClass";

const GuestLinks = () => {

    return <>
        <NavLink className={linkClass} to="/">קטלוג</NavLink>
        <NavLink className={linkClass} to="/contact">צור קשר</NavLink>
        <NavLink className={linkClass} to="/login">התחברות</NavLink>
        <NavLink className={linkClass} to="/register">הרשמה</NavLink>
    </>
}

export default GuestLinks;