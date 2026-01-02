export default function TamperMonkey(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M12 12c-2.67 0-5.33-1.33-8-4 .1-1.33 1.2-2 2-2s2 .67 2 2-1 2-2 2h4" />
            <path d="M12 12c2.67 0 5.33-1.33 8-4 .1-1.33-1.2-2-2-2s-2 .67-2 2 1 2 2 2h-4" />
            <path d="m5.5 13.5-1 1" />
            <path d="m6 18 1.5-1.5" />
            <path d="m18.5 13.5 1 1" />
            <path d="m18 18-1.5-1.5" />
            <path d="m12 13 1 5" />
            <path d="m12 13-1 5" />
            <circle cx="12" cy="12" r="10" />
        </svg>
    )
}
