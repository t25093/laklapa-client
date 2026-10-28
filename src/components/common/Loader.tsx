

interface LoaderProp {
    text?: string
}

const Loader = ({ text = "טוען..." }: LoaderProp) => {
    return <div className="flex flex-col items-center gap-3 py-10">
    <div className="w-10 h-10 rounded-full border-4 border-brand-100 border-t-brand-600 animate-spin"></div>
    <p className="text-gray-500">{text}</p>
    </div>
}

export default Loader;