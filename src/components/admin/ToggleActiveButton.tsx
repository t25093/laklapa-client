import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { setProductActive } from "../../api/products";
import { useAuth } from "../../context/AuthContext";
import Button from "../common/Button";
import ConfirmDialog from "../common/ConfirmDialog";
import ErrorMessage from "../common/ErrorMessage";
import { errorMessage } from "../../utils/errors";

interface ToggleActiveButtonProp {
    productId: number,
    isActive: boolean
}

const ToggleActiveButton = ({ productId, isActive }: ToggleActiveButtonProp) => {
    const { token } = useAuth()
    const queryClient = useQueryClient()
    const [showDialog, setShowDialog] = useState<boolean>(false)
    const { mutate, isPending, error } = useMutation({
        mutationFn: () => setProductActive(productId, !isActive, token ?? ""),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["products"] });
            queryClient.invalidateQueries({ queryKey: ["product", productId] });
            setShowDialog(false)
        }
    });
    return <>
        {isActive
            ? <Button size="sm" variant="danger" onClick={() => setShowDialog(true)}>הסרה מהקטלוג</Button>
            : <Button size="sm" variant="secondary" disabled={isPending} onClick={() => mutate()}>החזרה לקטלוג</Button>}
        {error && <ErrorMessage message={errorMessage(error)}></ErrorMessage>}
        {showDialog && <ConfirmDialog isPending={isPending} confirmText="כן, להסיר" message="להסיר את המוצר מהקטלוג? הלקוחות לא יראו אותו, וההזמנות הקודמות יישארו. אפשר להחזיר אותו בכל רגע." onConfirm={() => mutate()} onCancel={() => setShowDialog(false)}></ConfirmDialog>}
    </>
}

export default ToggleActiveButton;
