import { STATUS_OPTIONS } from "../../utils/constants";

interface StatusBadgeProp {
    status: string
}

const STATUS_STYLES: Record<string, string> = {
    RECEIVED: "bg-blue-100 text-blue-800",
    IN_PREPARATION: "bg-yellow-100 text-yellow-800",
    SHIPPED: "bg-purple-100 text-purple-800",
    DELIVERED: "bg-green-100 text-green-800",
    CANCELLED: "bg-gray-100 text-gray-600"
}

const StatusBadge = ({ status }: StatusBadgeProp) => {
    const label =  STATUS_OPTIONS.find((option) => option.value === status)?.label 
    return <span className={`${STATUS_STYLES[status]} px-2 py-1 rounded-full text-xs font-semibold`}>
        {label}
    </span>
}

export default StatusBadge;