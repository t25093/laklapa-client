import { useAuth } from "../../context/AuthContext";
import AdminLinks from "./AdminLinks";
import CustomerLinks from "./CustomerLinks";
import GuestLinks from "./GuestLinks";
import UserMenu from "./UserMenu";


const NavBar = () => {

    const {user}=useAuth()
    
    const links=()=>{
        if(!user)
            return <GuestLinks></GuestLinks>
        if(user.role==="ADMIN") 
            return <AdminLinks></AdminLinks>
        return <CustomerLinks></CustomerLinks>
    }
    return <nav className="flex gap-4 items-center">{links()}<UserMenu></UserMenu></nav>
}

export default NavBar;