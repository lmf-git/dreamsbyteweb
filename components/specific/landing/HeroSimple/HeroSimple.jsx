'use client';

import { useState, useEffect } from 'react';

import RightLine from '../../../icons/controls/RightLine';
import LeftLine from '../../../icons/controls/LeftLine';
import Dot from '../../../icons/controls/Dot';
import Spinner from '../../../icons/spinner/Spinner';

import Screen from '../Screen/Screen';
import ScreenBase from '../Screen/Base';

import styles from './herosimple.module.scss';

const projects = [
    {
        name: 'TRK Civils LTD',
        problem: 'TRK Civils LTD, a startup in civil engineering, needed branding, a website, and marketing setup.',
        solution: 'Created a professional website, integrated tools for inquiries, and set up marketing essentials.',
        url: 'https://trk-amber.vercel.app',
        image: '/projects/trk/trk-mobile.png',
        desktopimage: '/projects/trk/trk-desktop.png',
        reporturl: ''
    },
    {
        name: 'The Right Direction',
        problem: 'The Right Direction Communal Services needed a professional website to showcase their mentorship programs, provide booking options, and connect with families and sponsors effectively.',
        solution: 'Developed a comprehensive website featuring program details, booking tools, testimonials, and team profiles to enhance engagement and support their mission.',
        url: 'https://trd.vercel.app',
        image: '/projects/trd/trd-mobile.png',
        desktopimage: '/projects/trd/trd-desktop.png',
        reporturl: ''
    },
    {
        name: 'Allied Construction',
        problem: '...',
        solution: '...',
        url: 'https://alliedconstruction.vercel.app/',
        image: 'https://random.imagecdn.app/500/150',
        reporturl: ''
    },
    {
        name: 'Electric Doctors',
        problem: '...',
        solution: '...',
        url: 'https://www.electricdrs.com',
        image: 'https://random.imagecdn.app/500/150',
        reporturl: ''
    },
    {
        name: 'Skylar Lily',
        problem: 'Faced with outdated branding and a lackluster online presence, [Client Name] struggled to connect with their target audience and stand out in the competitive digital landscape',
        solution: 'Collaborating with [Client Name], we tackled a critical challenge head-on. By crafting an impactful website and cohesive digital brand identity, we not only addressed their need for a strong online presence but also ensured consistency and recognition across platforms, driving their growth',
        url: 'https://www.skylarlily.com',
        image: 'https://random.imagecdn.app/500/150',
        reporturl: ''
    },
    {
        name: 'Lvolt (Networking)',
        problem: 'Faced with outdated branding and a lackluster online presence, [Client Name] struggled to connect with their target audience and stand out in the competitive digital landscape',
        solution: 'Collaborating with [Client Name], we tackled a critical challenge head-on. By crafting an impactful website and cohesive digital brand identity, we not only addressed their need for a strong online presence but also ensured consistency and recognition across platforms, driving their growth',
        url: 'https://www.lvolt.net',
        image: 'https://random.imagecdn.app/500/150',
        reporturl: ''
    },
    {
        name: 'HouseCheckup',
        problem: 'Work in progress/active outdated placeholder.',
        solution: '...',
        url: 'https://housecheckupwebsite.vercel.app/',
        image: 'https://random.imagecdn.app/500/150',
        reporturl: ''
    },
    {
        name: 'IMAA',
        problem: '...',
        solution: '...',
        url: 'https://imaa-institute.org',
        image: 'https://random.imagecdn.app/500/150',
        reporturl: ''
    },
    {
        name: 'Gold IRA Guide',
        problem: '',
        solution: '',
        url: "https://goldiraguide.vercel.app/",
        reporturl: ''
    },
    {
        name: 'Mr G\'s Gyros',
        problem: '...',
        solution: '...',
        url: 'https://mrgsgyroshop.com',
        image: 'https://random.imagecdn.app/500/150',
        reporturl: ''
    },
    {
        name: 'Kezi & Clay',
        problem: '...',
        solution: '...',
        url: 'https://keziandclay.co.uk',
        image: 'https://random.imagecdn.app/500/150',
        reporturl: ''
    }
];

export default function HeroSimple() {
    const [project, setProject] = useState(0);
    const [desktopLoading, setDesktopLoading] = useState(true);
    const [mobileLoading, setMobileLoading] = useState(true);

    // Reset loading states when project changes
    useEffect(() => {
        setDesktopLoading(true);
        setMobileLoading(true);
    }, [project]);

    return <div className={`section ${styles.hero}`}>
        <h1 className={styles.title}>Latest Work</h1>

        <div className={styles.projects}>
            <div className={styles.projectdesc}>
                <h1 className={styles.projectname}>
                    { projects[project].name }
                </h1>

                <h2 className={styles.projectproblems}>
                    PROBLEMS:
                </h2>
                <p className={styles.projectparagraph}>
                    { projects[project].problem }
                </p>

                <h2 className={styles.projectsolutions}>
                    SOLUTIONS:
                </h2>
                <p className={styles.projectparagraph}>
                    { projects[project].solution }
                </p>
            </div>

            <div className={styles.projectpreview}>
                <div className={styles.screen}>
                    <img 
                        className={styles.screeniframe} 
                        src={projects[project].desktopimage} 
                        alt="Project desktop image preview."
                        onLoad={() => setDesktopLoading(false)}
                    />

                    {desktopLoading && <Spinner className={styles.screenspinner} />}

                    <div className={styles.arrows}>
                        { project > 0 &&
                            <button className={[styles.button, styles.buttonleft].join(' ')}
                                onClick={() => setProject(project - 1)}>
                                <LeftLine className={[styles.arrow, styles.arrowleft].join(' ')} />
                            </button>
                        }
                        { project < projects.length - 1 &&
                            <button className={[styles.button, styles.buttonright].join(' ')}
                                onClick={() => setProject(project + 1)}>
                                <RightLine className={[styles.arrow, styles.arrowright].join(' ')} />
                            </button>
                        }
                    </div>

                    <Screen className={styles.screenmonitor} />
                    <ScreenBase className={styles.screenbase} />
                </div>

                <div className={styles.mobile}>
                    <img className={styles.mobileicon} src="/landing/mobile.svg" />
                    <img 
                        className={styles.mobileiframe} 
                        src={projects[project].image} 
                        alt="Project mobile image preview."
                        onLoad={() => setMobileLoading(false)}
                    />
                    {mobileLoading && <Spinner className={styles.mobilespinner} />}
                </div>

                <div className={styles.controls}>
                    <div className={styles.controllinks}>
                        <a href={projects[project].url} className={styles.link}>GO TO SITE</a>

                        { projects[project]?.reporturl &&
                            <a href={projects[project]?.reporturl} className={styles.link}>SEE SCORE</a>
                        }
                    </div>

                    <div className={styles.dots}>
                        { projects.map((p, i) => 
                            Math.abs(project - i) <= 2 ? 
                                <Dot 
                                    key={i} 
                                    className={`${styles.dot} ${project === i ? styles.active : ''}`} 
                                    onClick={() => setProject(i)}
                                /> 
                                : 
                                null
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>;
};