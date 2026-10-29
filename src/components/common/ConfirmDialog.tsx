import Button from "./Button"

interface ConfirmDialogProp {
    message: string,
    onConfirm: () => void,
    onCancel: () => void,
    isPending?: boolean,
    confirmText?: string
}

const ConfirmDialog = ({ isPending, message, onCancel, onConfirm, confirmText = "כן, לבטל" }: ConfirmDialogProp) => {
    return <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl p-6 flex flex-col gap-4 max-w-sm w-full mx-4">
            <p>{message}</p>
            <div className="flex gap-2 justify-end">
                <Button disabled={isPending} onClick={onConfirm} variant="danger" >{confirmText}</Button>
                <Button variant="secondary" onClick={onCancel} >חזרה</Button>
            </div>
        </div>
    </div>
}

export default ConfirmDialog;