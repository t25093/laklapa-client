import Icon from "../common/Icon";

const Footer = () => {
    return <footer className="mt-16 bg-white/70 border-t border-blush-100 py-8 px-4 text-center flex flex-col items-center gap-2">
        <p className="font-hand text-2xl text-brand-700">שוזרת פרח שמדבר</p>
        <p className="text-sm text-gray-500"><Icon name="flower" className="inline-block w-4 h-4 align-[-0.2em] me-1.5 text-brand-600" />עבודת יד · <Icon name="truck" className="inline-block w-4 h-4 align-[-0.2em] me-1.5 text-brand-600" />משלוח עד הבית · <Icon name="envelope" className="inline-block w-4 h-4 align-[-0.2em] me-1.5 text-brand-600" />כרטיס ברכה אישי</p>
        <p className="text-xs text-gray-400">© Laklapa {new Date().getFullYear()}</p>
    </footer>

}

export default Footer;