export default function DragRight({ extraClass }) {
    return <svg className={extraClass} viewBox="0 0 64 64" fill="none">
        <g>
            <line fill="none" strokeWidth="2" strokeMiterlimit="10" x1="31" y1="32" x2="63" y2="32" />
        </g>
        <circle fill="none" strokeWidth="2" strokeMiterlimit="10" cx="16" cy="32" r="15" />
        <polyline fill="none" strokeWidth="2" strokeLinejoin="bevel" strokeMiterlimit="10" points="54,41 63,32 54,23" />
    </svg>;
};