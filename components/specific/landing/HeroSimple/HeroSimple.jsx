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
        image: '/projects/allied/allied-mobile.png',
        desktopimage: '/projects/allied/allied-desktop.png',
        reporturl: ''
    },
    {
        name: 'Electric Doctors',
        problem: 'A master electrician seeking to establish their online presence and streamline business operations. They needed help with Google Business setup, client communication, and invoice management.',
        solution: 'Built a professional website, optimized their Google Business profile, and implemented basic invoice management tools to help organize their growing business.',
        url: 'https://www.electricdrs.com',
        image: '/projects/eds/eds-mobile.png',
        desktopimage: '/projects/eds/eds-desktop.png',
        reporturl: ''
    },
    {
        name: 'Skylar Lily',
        problem: 'As a variety streamer and free-spirited content creator, Skylar Lily needed a professional platform to showcase her content and connect with her community.',
        solution: 'Created a custom website with seamless Instagram and Discord integrations, enabling direct community engagement and content showcasing in one cohesive platform.',
        url: 'https://www.skylarlily.com',
        image: '/projects/skylar/skylar-mobile.png',
        desktopimage: '/projects/skylar/skylar-desktop.png',
        reporturl: ''
    },
    {
        name: 'Lvolt (Networking)',
        problem: 'Specialized electrical contractor needed to expand their CCTV and low voltage hardware services, requiring a focused lead generation strategy and professional online presence.',
        solution: 'Developed a conversion-focused website highlighting security and networking solutions, with integrated lead capture systems and service area targeting.',
        url: 'https://www.lvolt.net',
        image: '/projects/lvolt/lvolt-mobile.png',
        desktopimage: '/projects/lvolt/lvolt-desktop.png',
        reporturl: ''
    }
];

export default function HeroSimple() {
    const [project, setProject] = useState(null); // Change initial state to null
    const [desktopLoading, setDesktopLoading] = useState(true);
    const [mobileLoading, setMobileLoading] = useState(true);
    const [showPreview, setShowPreview] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [initialAnimationComplete, setInitialAnimationComplete] = useState(false);
    const [isInitialized, setIsInitialized] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [firstRevealComplete, setFirstRevealComplete] = useState(false);
    const [currentProject, setCurrentProject] = useState(null); // Add this new state
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [isReturningToFirst, setIsReturningToFirst] = useState(false);
    const [showNav, setShowNav] = useState(false);
    const [initialContentShown, setInitialContentShown] = useState(false); // Add this new state

    const preloadImages = (projectIndex) => {
        return new Promise((resolve) => {
            setImagesLoaded(false);
            setDesktopLoading(true);
            setMobileLoading(true);

            const desktopImage = new Image();
            const mobileImage = new Image();
            let loadedCount = 0;

            const handleLoad = () => {
                loadedCount++;
                if (loadedCount === 2) {
                    setImagesLoaded(true);
                    setDesktopLoading(false);
                    setMobileLoading(false);
                    resolve();
                }
            };

            desktopImage.onload = handleLoad;
            mobileImage.onload = handleLoad;

            // Handle errors as well
            desktopImage.onerror = handleLoad;
            mobileImage.onerror = handleLoad;

            desktopImage.src = projects[projectIndex].desktopimage;
            mobileImage.src = projects[projectIndex].image;
        });
    };

    // Initial setup
    useEffect(() => {
        if (!isInitialized) {
            const isMobile = window.innerWidth < 1200;
            setIsInitialized(true);
            setProject(0);
            setCurrentProject(0);
            
            // Wait for initial images to load
            preloadImages(0).then(() => {
                if (isMobile) {
                    // Mobile initial sequence
                    setTimeout(() => {
                        setShowPreview(true);
                        setTimeout(() => {
                            setShowPreview(false);
                            setTimeout(() => {
                                setShowContent(true);
                                setTimeout(() => {
                                    setShowNav(true);
                                    setInitialAnimationComplete(true);
                                }, 1000);
                            }, 100);
                        }, 1500);
                    }, 800);
                } else {
                    // Desktop initial sequence
                    setTimeout(() => {
                        setShowContent(true);
                        setTimeout(() => {
                            setShowPreview(true);
                            setTimeout(() => {
                                setFirstRevealComplete(true);
                                setShowNav(true);
                                setInitialAnimationComplete(true);
                            }, 800);
                        }, 800);
                    }, 400);
                }
            });
        }
    }, [isInitialized]);

    // Project change effect
    useEffect(() => {
        // Skip if not initialized, no project selected, or still in initial animation
        if (!isInitialized || project === null || !initialAnimationComplete) return;
        
        // Skip if this is the initial project (project === 0 and currentProject === 0)
        if (project === 0 && currentProject === 0) return;
        
        const isMobile = window.innerWidth < 1200;
        setIsTransitioning(true);
        setShowContent(false);
        setShowPreview(false);
        
        preloadImages(project).then(() => {
            if (isMobile) {
                setCurrentProject(project);
                setShowPreview(true);
                setTimeout(() => {
                    setShowPreview(false);
                    setTimeout(() => { // Add nested timeout for content
                        setShowContent(true);
                        setIsTransitioning(false);
                        setIsReturningToFirst(false);
                    }, 100);
                }, 1500);
            } else {
                setCurrentProject(project);
                setTimeout(() => { // Add delay before showing content
                    setShowContent(true);
                    setTimeout(() => {
                        setShowPreview(true);
                        setIsTransitioning(false);
                        setIsReturningToFirst(false);
                    }, 600);
                }, 100);
            }
        });

    }, [project, isInitialized, initialAnimationComplete, currentProject]);

    const nextProject = () => {
        if (project < projects.length - 1 && !isTransitioning) setProject(project + 1);
    };

    const prevProject = () => {
        if (project > 0 && !isTransitioning) {
            // Set the flag when returning to first project
            if (project === 1) {
                setIsReturningToFirst(true);
            }
            setProject(project - 1);
        }
    };

    return (
        <div className={`section ${styles.hero}`}>
            {currentProject !== null && ( // Only render content when project is set
                <div className={styles.projects}>
                    <div className={styles.projectdesc}>
                        <h1 className={styles.title}>Latest Work</h1>
                        <h1 className={styles.projectname}>{projects[currentProject].name}</h1>

                        <div className={`${styles.contentContainer} ${showContent ? styles.visible : ''}`}>
                            <h2 className={styles.projectproblems}>PROBLEMS:</h2>
                            <p className={styles.projectparagraph}>{projects[currentProject].problem}</p>

                            <h2 className={styles.projectsolutions}>SOLUTIONS:</h2>
                            <p className={styles.projectparagraph}>{projects[currentProject].solution}</p>
                        </div>

                        <div className={`${styles.controls} ${showNav ? styles.visible : ''}`}>
                            <div className={styles.controllinks}>
                                <a href={projects[currentProject].url} className={styles.link}>GO TO SITE</a>
                                {projects[currentProject]?.reporturl && (
                                    <a href={projects[currentProject]?.reporturl} className={styles.link}>SEE SCORE</a>
                                )}
                            </div>
                        </div>

                        <div className={`${styles.dots} ${
                            // Match the arrows visibility pattern
                            (firstRevealComplete && window.innerWidth >= 1200) || 
                            (showNav && !isTransitioning && window.innerWidth < 1200) 
                                ? styles.visible 
                                : ''
                        }`}>
                            {projects.map((p, i) => 
                                Math.abs(project - i) <= 2 ? 
                                    <Dot 
                                        key={i} 
                                        className={`${styles.dot} ${project === i ? styles.active : ''}`} 
                                        onClick={() => !isTransitioning && setProject(i)}
                                    /> 
                                    : 
                                    null
                            )}
                        </div>
                    </div>

                    <div className={`${styles.arrows} ${
                        // Only show on desktop after first reveal, or on mobile with normal conditions
                        (firstRevealComplete && window.innerWidth >= 1200) || 
                        (showNav && !isTransitioning && window.innerWidth < 1200) 
                            ? styles.visible 
                            : ''
                    }`}>
                        {project > 0 ? (
                            <button 
                                className={`${styles.button} ${styles.buttonleft}`} 
                                onClick={prevProject}
                                disabled={isTransitioning}
                            >
                                <LeftLine className={`${styles.arrow} ${styles.arrowleft}`} />
                            </button>
                        ) : <div className={styles.buttonspacer} />}
                        
                        {project < projects.length - 1 ? (
                            <button 
                                className={`${styles.button} ${styles.buttonright}`} 
                                onClick={nextProject}
                                disabled={isTransitioning}
                            >
                                <RightLine className={`${styles.arrow} ${styles.arrowright}`} />
                            </button>
                        ) : <div className={styles.buttonspacer} />}
                    </div>

                    <div className={`${styles.projectpreview} ${showPreview ? styles.showMobile : ''}`}>
                        <Screen 
                            extraClass={`${styles.screen} ${showPreview ? styles.showMobile : ''}`}
                            src={projects[currentProject].desktopimage}
                            onLoad={() => setDesktopLoading(false)}
                        />
                        
                        {desktopLoading && <Spinner className={styles.screenspinner} />}

                        <Mobile 
                            extraClass={`${styles.mobile} ${showPreview ? styles.showMobile : ''}`}
                            src={projects[currentProject].image}
                            onLoad={() => setMobileLoading(false)}
                        />
                        {mobileLoading && <Spinner className={styles.mobilespinner} />}
                    </div>
                </div>
            )}
        </div>
    );
};