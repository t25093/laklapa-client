export const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "text-brand-600 font-bold border-b-2 border-brand-600" : "text-gray-700 hover:text-brand-600 transition";
