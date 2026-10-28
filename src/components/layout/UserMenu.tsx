import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import Button from "../common/Button";
import { useCart } from "../../context/CartContext";


const UserMenu = () => {
    const navigate = useNavigate()

    const { user, logout } = useAuth();
    const { clearCart } = useCart()

    const handleLogout = () => {
        logout();
        clearCart();
        navigate("/")
    }

    if (!user)
        return null;
    return <>
        <p>שלום, {user.fullName}</p>
        <Button onClick={handleLogout}>התנתקות</Button>
    </>
}


export default UserMenu;