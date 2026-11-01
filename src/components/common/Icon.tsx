// סמלים קוויים דקים במקום אימוג'ים. הצבע נלקח מהטקסט (currentColor)
const PATHS = {
    flower: <>
        <circle cx="12" cy="5.2" r="2.4" /><circle cx="15.7" cy="7.9" r="2.4" /><circle cx="14.3" cy="12.2" r="2.4" />
        <circle cx="9.7" cy="12.2" r="2.4" /><circle cx="8.3" cy="7.9" r="2.4" /><circle cx="12" cy="9" r="1.4" />
        <path d="M12 14.5V22" /><path d="M12 19c-2.6 0-4.2-1.4-4.7-3.4 2.6 0 4.2 1.4 4.7 3.4z" />
    </>,
    truck: <>
        <rect x="2" y="6" width="12" height="9" rx="1" /><path d="M14 9h4l3 3v3h-7" />
        <circle cx="7" cy="17.5" r="1.8" /><circle cx="17" cy="17.5" r="1.8" />
    </>,
    envelope: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></>,
    user: <><circle cx="12" cy="8" r="4" /><path d="M4 21c1-4 4.5-6 8-6s7 2 8 6" /></>,
    phone: <path d="M6 3h3l1.5 4.5-2 1.5a11 11 0 0 0 6.5 6.5l1.5-2L21 15v3a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2z" />,
    pin: <><path d="M12 21s-6-5.5-6-11a6 6 0 0 1 12 0c0 5.5-6 11-6 11z" /><circle cx="12" cy="10" r="2.2" /></>,
    bag: <><path d="M5 8h14l-1 12H6L5 8z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></>,
    receipt: <><path d="M6 3h12v18l-2-1.5-2 1.5-2-1.5-2 1.5-2-1.5L6 21V3z" /><path d="M9 8h6M9 12h6M9 16h4" /></>,
    palette: <>
        <path d="M12 3a9 9 0 1 0 0 18c1.2 0 1.8-.9 1.5-2-.4-1.4.6-2.5 2-2.5H18a3 3 0 0 0 3-3c0-5-4-8.5-9-8.5z" />
        <circle cx="7.5" cy="11" r="1" /><circle cx="10" cy="7" r="1" /><circle cx="14.5" cy="7" r="1" />
    </>,
    pencil: <><path d="M4 20l1-4L16 5l3 3L8 19l-4 1z" /><path d="M14 7l3 3" /></>,
    lock: <><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></>,
    refresh: <><path d="M20 11a8 8 0 0 0-14.5-4.5L4 8M4 4v4h4" /><path d="M4 13a8 8 0 0 0 14.5 4.5L20 16M20 20v-4h-4" /></>,
    sparkle: <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />,
    camera: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7l1.5-3h5L16 7" /><circle cx="12" cy="13.5" r="3.5" /></>,
    tag: <><path d="M3 12V4h8l10 10-8 8L3 12z" /><circle cx="7.5" cy="7.5" r="1.3" /></>,
    check: <path d="M5 12.5l4.5 4.5L19 7" />,
    cart: <><path d="M3 4h2l2.5 11h11l2-8H6.5" /><circle cx="9" cy="19" r="1.5" /><circle cx="17" cy="19" r="1.5" /></>,
};

export type IconName = keyof typeof PATHS;

interface IconProps {
    name: IconName,
    className?: string
}

const Icon = ({ name, className = "w-4 h-4" }: IconProps) => {
    return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {PATHS[name]}
    </svg>
}

export default Icon;
