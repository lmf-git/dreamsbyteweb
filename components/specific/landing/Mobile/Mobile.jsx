import { useState } from 'react';
import styles from '../Portfolio/portfolio.module.scss';

export default function Mobile({ extraClass, src, onLoad }) {
    const [isLoading, setIsLoading] = useState(true);

    const handleLoad = () => {
        setIsLoading(false);
        onLoad?.();
    };

    return <svg className={`${extraClass} ${styles.herosimple_mobile}`} viewBox="0 0 258 520" preserveAspectRatio="xMidYMid meet">
        <defs>
            <clipPath id="mobileClipPath">
                <path d="M244.491 487.233C244.491 501.067 233.262 512.281 219.407 512.281H38.5909C24.7379 512.281 13.5086 501.067 13.5086 487.233V32.6765C13.5086 18.8422 24.7379 7.62792 38.5909 7.62792H219.407C233.262 7.62792 244.491 18.8422 244.491 32.6765V487.233Z" />
            </clipPath>
        </defs>

        <foreignObject x="13" y="7" width="232" height="506" clipPath="url(#mobileClipPath)">
            <img
                src={src}
                alt="Mobile Preview"
                onLoad={handleLoad}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: isLoading ? 0 : 1,
                    transition: 'opacity 0.3s ease-out'
                }}
            />
        </foreignObject>

        {/* Phone frame */}
        <path d="M253.968 82.212H253.478V30.841C253.478 13.8077 239.651 0 222.595 0H35.4047C18.3486 0 4.52227 13.8077 4.52227 30.841V82.212H4.03246C1.80406 82.212 0 84.0136 0 86.239V121.773C0 123.998 1.80406 125.8 4.03246 125.8H4.52227V134.276H4.03246C1.80406 134.276 0 136.077 0 138.303V173.837C0 176.062 1.80406 177.864 4.03246 177.864H4.52227V489.068C4.52227 506.101 18.3486 519.909 35.4047 519.909H222.595C239.651 519.909 253.478 506.101 253.478 489.068V147.594H253.968C256.194 147.594 258 145.792 258 143.567V86.239C258 84.0136 256.194 82.212 253.968 82.212ZM244.491 487.233C244.491 501.067 233.262 512.281 219.407 512.281H38.5909C24.7379 512.281 13.5086 501.067 13.5086 487.233V32.6765C13.5086 18.8422 24.7379 7.62792 38.5909 7.62792H219.407C233.262 7.62792 244.491 18.8422 244.491 32.6765V487.233Z" fill="#F6F0F8"/>
    </svg>;
};
