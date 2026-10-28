import { Outlet } from "react-router"
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
    return <div className="min-h-screen flex flex-col">
        <Header></Header>
        <main className="flex-1 p-6 max-w-6xl mx-auto w-full"><Outlet></Outlet></main>
        <Footer></Footer>
    </div>
}

export default Layout;