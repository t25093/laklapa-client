
const Footer = () => {
    return <footer className="mt-16 bg-white/70 border-t border-blush-100 py-8 px-4 text-center flex flex-col items-center gap-2">
        <p className="font-hand text-2xl text-brand-700">שוזרת פרח שמדבר</p>
        <p className="text-sm text-gray-500">🌷 עבודת יד · 🚚 משלוח עד הבית · 💌 כרטיס ברכה אישי</p>
        <p className="text-xs text-gray-400">© Laklapa {new Date().getFullYear()}</p>
    </footer>

}

export default Footer;