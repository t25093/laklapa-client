import bouquet from "../../assets/floral-bouquet.svg";

interface EmptyStateProp {
    message: string
}

const EmptyState = ({ message }: EmptyStateProp) => {
    return <div className="rounded-[2rem] bg-blush-50/60 border border-blush-100 flex flex-col items-center gap-3 py-12 px-6 text-center">
        <img className="w-32 opacity-90" src={bouquet} alt="" />
        <p className="font-display text-xl text-brand-800">{message}</p>
    </div>
}

export default EmptyState;