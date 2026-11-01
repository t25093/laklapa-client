import sprig from "../../assets/sprig.svg";

interface PageTitleProp{
    children: React.ReactNode
}

const PageTitle = ({children}:PageTitleProp) => {
    return <div className="flex items-center gap-2 mb-6">
        <img className="w-10 h-10" src={sprig} alt="" />
        <h1 className="font-display text-3xl font-medium text-brand-800">{children}</h1>
    </div>
}

export default PageTitle;