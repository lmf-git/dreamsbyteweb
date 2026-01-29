export default function Menu({ extraClass = '' }) {
    return <svg className={extraClass} viewBox="0 0 100 100" fill="none">
        <rect x="10" y="25" width="80" height="10" rx="4" />
        <rect x="10" y="45" width="80" height="10" rx="4" />
        <rect x="10" y="65" width="80" height="10" rx="4" />
    </svg>;
};
