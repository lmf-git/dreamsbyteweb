export default function Dot({ className, onClick = null }) {
    return <svg className={className} viewBox="0 0 28 28" fill="none" onClick={onClick}>
        <circle cx="14" cy="14" r="12.5" stroke="#D9D9D9" strokeWidth="3" />
    </svg>;
};
