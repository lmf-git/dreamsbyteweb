'use client';

import { useState, useEffect } from 'react';

import RightLine from '../../../icons/controls/RightLine';
import LeftLine from '../../../icons/controls/LeftLine';
import Dot from '../../../icons/controls/Dot';
import Spinner from '../../../icons/spinner/Spinner';

import Screen from '../Screen/Screen';
import Mobile from '../Mobile/Mobile';

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
        problem: 'Allied needed a portal for their wholesale operations. Their existing OpenCart solution was outdated and overpriced.',
        solution: 'Developed a custom-built B2B wholesale application tailored to their specific needs, providing a more cost-effective and modern solution.',
        url: 'https://alliedconstruction.vercel.app/',
        image: 'https://random.imagecdn.app/500/150',
        desktopimage: '/projects/allied/allied-desktop.png',
        reporturl: ''
    },
    {
        name: 'Electric Doctors',
        problem: 'A master electrician seeking to establish their online presence and streamline business operations. They needed help with Google Business setup, client communication, and invoice management.',
        solution: 'Built a professional website, optimized their Google Business profile, and implemented basic invoice management tools to help organize their growing business.',
        url: 'https://www.electricdrs.com',
        image: '/projects/eds/eds-desktop.png',
        desktopimage: '/projects/eds/eds-desktop.png',
        reporturl: ''
    },
    {
        name: 'Skylar Lily',
        problem: 'As a variety streamer and free-spirited content creator, Skylar Lily needed a professional platform to showcase her content and connect with her community.',
        solution: 'Created a custom website with seamless Instagram and Discord integrations, enabling direct community engagement and content showcasing in one cohesive platform.',
        url: 'https://www.skylarlily.com',
        image: '/projects/skylar/skylar-desktop.png',
        desktopimage: '/projects/skylar/skylar-desktop.png',
        reporturl: ''
    },
    {
        name: 'Lvolt (Networking)',
        problem: 'Specialized electrical contractor needed to expand their CCTV and low voltage hardware services, requiring a focused lead generation strategy and professional online presence.',
        solution: 'Developed a conversion-focused website highlighting security and networking solutions, with integrated lead capture systems and service area targeting.',
        url: 'https://www.lvolt.net',
        image: '/projects/lvolt/lvolt-desktop.png',
        desktopimage: '/projects/lvolt/lvolt-desktop.png',
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

    const nextProject = () => {
        if (project < projects.length - 1) setProject(project + 1);
    };

    const prevProject = () => {
        if (project > 0) setProject(project - 1);
    };

    return (
        <div className={`section ${styles.hero}`}>
            <div className={styles.projects}>
                <div className={styles.projectdesc}>
                    <h1 className={styles.title}>Latest Work</h1>

                    <h1 className={styles.projectname}>
                        {projects[project].name}
                    </h1>

                    <h2 className={styles.projectproblems}>
                        PROBLEMS:
                    </h2>
                    <p className={styles.projectparagraph}>
                        {projects[project].problem}
                    </p>

                    <h2 className={styles.projectsolutions}>
                        SOLUTIONS:
                    </h2>
                    <p className={styles.projectparagraph}>
                        {projects[project].solution}
                    </p>
                </div>

                <div className={styles.projectpreview}>
                    <Screen 
                        extraClass={styles.screen}
                        src={projects[project].desktopimage}
                        onLoad={() => setDesktopLoading(false)}
                    />
                    
                    {desktopLoading && <Spinner className={styles.screenspinner} />}

                    <div className={styles.arrows}>
                        {project > 0 ? (
                            <button 
                                className={`${styles.button} ${styles.buttonleft}`} 
                                onClick={prevProject}
                            >
                                <LeftLine className={`${styles.arrow} ${styles.arrowleft}`} />
                            </button>
                        ) : <div className={styles.buttonspacer} />}
                        
                        {project < projects.length - 1 ? (
                            <button 
                                className={`${styles.button} ${styles.buttonright}`} 
                                onClick={nextProject}
                            >
                                <RightLine className={`${styles.arrow} ${styles.arrowright}`} />
                            </button>
                        ) : <div className={styles.buttonspacer} />}
                    </div>

                    <div className={styles.controls}>
                        <div className={styles.controllinks}>
                            <a href={projects[project].url} className={styles.link}>GO TO SITE</a>

                            {projects[project]?.reporturl &&
                                <a href={projects[project]?.reporturl} className={styles.link}>SEE SCORE</a>
                            }
                        </div>

                        <div className={styles.dots}>
                            {projects.map((p, i) => 
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

                    <Mobile 
                        extraClass={styles.mobile}
                        src={projects[project].image}
                        onLoad={() => setMobileLoading(false)}
                        style={{ position: 'absolute', bottom: '-1em', right: '10%', width: '18vw' }}
                    />
                    {mobileLoading && <Spinner className={styles.mobilespinner} />}

                </div>
            </div>
        </div>
    );
};