import { Navigate, Outlet, useLocation } from "react-router"
import { useAuth } from "../context/AuthContext"
import type { Role } from "../types"
import Loader from "../components/common/Loader"


interface ProtectedRouteProp {
    role: Role
}

const ProtectedRoute = ({ role }: ProtectedRouteProp) => {
    const location = useLocation()
    const { user, initializing } = useAuth()
    if (initializing)
        return <Loader></Loader>
    if (!user) {
        return <Navigate state={location.pathname} to="/login" replace />;
    }
    if (user.role !== role)
        return <Navigate to="/" replace></Navigate>
    return <Outlet></Outlet>
}

export default ProtectedRoute