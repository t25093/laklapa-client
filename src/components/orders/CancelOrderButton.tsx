import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { cancelOrder } from "../../api/orders";
import { useAuth } from "../../context/AuthContext";
import Button from "../common/Button";
import ConfirmDialog from "../common/ConfirmDialog";
import ErrorMessage from "../common/ErrorMessage";
import { errorMessage } from "../../utils/errors";

interface CancelOrderButtonProp {
    orderId: number
}

const CancelOrderButton = ({ orderId }: CancelOrderButtonProp) => {
    const { token } = useAuth()
    const queryClient = useQueryClient()
    const [showDialog, setShowDialog] = useState<boolean>(false)
    const { mutate, isPending, error } = useMutation({
        mutationFn: () => cancelOrder(orderId, token ?? ""),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["order", orderId] });
            queryClient.invalidateQueries({ queryKey: ["myOrders"] });
            setShowDialog(false)
        }
    });
    return <>
        <Button variant="danger" onClick={() => setShowDialog(true)}>ביטול הזמנה</Button>
        {error && <ErrorMessage message={errorMessage(error)}></ErrorMessage>}
        {showDialog && <ConfirmDialog isPending={isPending} message="לבטל את ההזמנה? לא ניתן לבטל את הפעולה." onConfirm={() => mutate()} onCancel={() => setShowDialog(false)}></ConfirmDialog>}
    </>
}
export default CancelOrderButton;