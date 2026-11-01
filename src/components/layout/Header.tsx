import logo from "../../assets/logo.png"
import { Link } from "react-router";
import NavBar from "./NavBar";

const Header = () => {
    return <header className="sticky top-0 z-40 bg-white/85 backdrop-blur border-b border-blush-100 shadow-card">
        <div className="flex-wrap gap-2 max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
            <NavBar></NavBar>
            <Link to="/">
                <img className="h-16 md:h-28 w-auto" src={logo} alt="Laklapa" />
            </Link>
        </div>
    </header>
}
export default Header;