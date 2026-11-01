import { getOptionLabel, STATUS_OPTIONS } from "../../utils/constants";

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
    const label =  getOptionLabel(STATUS_OPTIONS, status)
    return <span className={`${STATUS_STYLES[status]} px-3 py-1 rounded-full text-xs font-medium tracking-wide`}>
        {label}
    </span>
}

export default StatusBadge;