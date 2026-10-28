
interface PageTitleProp{
    children: React.ReactNode
}

const PageTitle = ({children}:PageTitleProp) => {
    return <h1 className="text-2xl font-bold text-brand-700 mb-6">{children}</h1>
}

export default PageTitle;