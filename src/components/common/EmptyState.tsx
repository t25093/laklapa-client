interface EmptyStateProp {
    message: string
}

const EmptyState = ({ message }: EmptyStateProp) => {
    return <div className="flex flex-col items-center gap-3 py-10">
        <p className="text-4xl">🌸</p>
        <p className="text-gray-500">{message}</p>
    </div>
}

export default EmptyState;