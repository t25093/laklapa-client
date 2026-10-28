import { NavLink } from "react-router";
import { linkClass } from "./linkClass";

const AdminLinks=()=>{
    return <>
        <NavLink className={linkClass} to="/admin/products">ניהול מוצרים</NavLink>
        <NavLink className={linkClass} to="/admin/categories">קטגוריות</NavLink>
        <NavLink className={linkClass} to="/admin/orders">הזמנות</NavLink>
        <NavLink className={linkClass} to="/admin/users">משתמשים</NavLink>
        <NavLink className={linkClass} to="/admin/messages">הודעות</NavLink>
    </>
}

export default AdminLinks;