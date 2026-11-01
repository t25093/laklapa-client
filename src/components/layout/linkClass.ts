export const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "px-4 py-1.5 rounded-full font-brand font-medium text-brand-700 bg-brand-50" : "px-4 py-1.5 rounded-full font-brand text-gray-600 hover:text-brand-600 transition duration-300";
