export default function Close({ className }) {
    return <svg className={className} viewBox="0 0 100 100" fill="none">
        <rect x="10" y="45" width="80" height="10" rx="4" transform="rotate(45 50 50)" />
        <rect x="10" y="45" width="80" height="10" rx="4" transform="rotate(-45 50 50)" />
    </svg>;
};
