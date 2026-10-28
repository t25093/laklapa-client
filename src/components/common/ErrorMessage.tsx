
interface ErrorMessageProp {
    message: string | null | undefined
}


const ErrorMessage = ({ message }: ErrorMessageProp) => {
    if (!message)
        return null;
    return <div className="bg-red-50 text-red-700 border border-red-200 rounded-lg p-3">
        <p>{message}</p>
    </div>
}

export default ErrorMessage;