
interface PageTitleProp{
    children: React.ReactNode
}

const PageTitle = ({children}:PageTitleProp) => {
    return <h1 className="inline-block font-display text-3xl font-medium text-brand-800 mb-6 px-1 bg-[linear-gradient(transparent_72%,var(--color-blush-100)_72%)]">{children}</h1>
}

export default PageTitle;