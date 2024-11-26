'use client';

import { useEffect } from 'react';

export default function Screen({ extraClass, src }) {
    useEffect(() => {
        const iframe = document.querySelector('iframe');
        if (iframe) {
            iframe.style.width = '100%';
            iframe.style.height = '100%';
        }
    }, []);

    return <svg className={`${extraClass}`} viewBox="0 0 1150 813" >
      <path fill="#C4C4C4" d="M401.358 778.461L398 795.972H698.714L693.056 777.362L401.358 778.461Z" />
      <path fill="#BDBCBC" d="M725.036 800.822L697.882 795.972H397.168L370 800.822H725.036Z" />
      <path fill="#F7F7F7" d="M421.175 675H676.662L698.714 795.972H398L421.175 675Z" />
      <path fill="#A9A8A8" d="M681.5 698.772L677.088 675H421.196L416.5 699L681.5 698.772Z" />
      <path fill="#F6F4F4" d="M734.641 801.49L731.295 800.895H364.284L360.938 801.49C359.814 801.697 359 802.667 359 803.818V811.112C359 812.069 359.776 812.832 360.719 812.832H734.874C735.83 812.832 736.592 812.056 736.592 811.112V803.818C736.592 802.68 735.778 801.697 734.654 801.49H734.641Z" />
      <path fill="url(#paint0_linear_290_577)" d="M1120.09 0H28.9243C12.9442 0 0 14.0449 0 31.3876V644.124C0 661.454 12.9442 675.512 28.9243 675.512H1120.09C1136.06 675.512 1149.01 661.467 1149.01 644.124V31.3876C1149.01 14.0578 1136.07 0 1120.09 0Z" />
      <path fill="#1E1E1E" d="M1115.64 5.40576H32.6307C16.8057 5.40576 3.96484 19.2437 3.96484 36.289V639.21C3.96484 656.268 16.7928 670.093 32.6307 670.093H1115.64C1131.48 670.093 1144.31 656.268 1144.31 639.21V36.289C1144.31 19.2308 1131.48 5.40576 1115.64 5.40576Z" />
      <path fill="#FF0000" d="M1104.89 16H43.1042C27.5892 16 15 29.3864 15 45.8756V629.125C15 645.626 27.5766 659 43.1042 659H1104.89C1120.42 659 1133 645.626 1133 629.125V45.8756C1133 29.374 1120.42 16 1104.89 16Z" />
      
      <foreignObject x="15" y="16" width="1089" height="613">
        <iframe 
          src={src}
          title="Desktop Preview"
          sandbox="allow-scripts allow-same-origin"
          style={{ display: 'block', width: '100%', height: '100%', overflow: 'hidden' }}
        />
      </foreignObject>

      <defs>
        <linearGradient id="paint0_linear_290_577" x1="574.506" y1="675.512" x2="574.506" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EAEAEB"/>
          <stop offset="0.51" stopColor="#AAAAAE"/>
          <stop offset="0.66" stopColor="#C6C6C8"/>
          <stop offset="1" stopColor="white"/>
        </linearGradient>
      </defs>
    </svg>;
};


