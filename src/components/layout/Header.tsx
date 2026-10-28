import logo from "../../assets/logo.png"
import { Link } from "react-router";
import NavBar from "./NavBar";

const Header = () => {
    return <header className="bg-blush-50 border-b border-blush-200">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
            <NavBar></NavBar>
            <Link to="/">
                <img className="h-20 w-auto" src={logo} alt="Laklapa" />
            </Link>
        </div>
    </header>
}
export default Header;