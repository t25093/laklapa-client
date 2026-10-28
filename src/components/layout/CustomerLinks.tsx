import { NavLink } from "react-router";
import { linkClass } from "./linkClass";
import CartBadge from "./CartBadge";

const CustomerLinks = () => {
        return <>
        <NavLink className={linkClass} to="/">קטלוג</NavLink>
        <NavLink className={linkClass} to="/cart">סל קניות<CartBadge></CartBadge></NavLink>
        <NavLink className={linkClass} to="/orders">ההזמנות שלי</NavLink>
        <NavLink className={linkClass} to="/contact">צור קשר</NavLink>
    </>
}

export default CustomerLinks;