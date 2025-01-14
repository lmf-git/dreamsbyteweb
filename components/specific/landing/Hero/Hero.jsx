'use client';

import { useState, useEffect } from 'react';

import RightLine from '../../../icons/controls/RightLine';
import LeftLine from '../../../icons/controls/LeftLine';
import Dot from '../../../icons/controls/Dot';
import Spinner from '../../../icons/spinner/Spinner';

import Screen from '../Screen/Screen';
import Mobile from '../Mobile/Mobile';

import styles from './hero.module.scss';

const projects = [
    {
        name: 'TRK Civils LTD',
        problem: 'New civil engineering company needed a website and complete digital presence.',
        solution: 'Built a modern website with inquiry tools and marketing setup.',
        url: 'https://trk-amber.vercel.app',
        image: '/projects/trk/trk-mobile.png',
        desktopimage: '/projects/trk/trk-desktop.png',
        reporturl: ''
    },
    {
        name: 'The Right Direction',
        problem: 'Community service needed a way to showcase programs and handle bookings.',
        solution: 'Created a website with booking system and program information.',
        url: 'https://trd.vercel.app',
        image: '/projects/trd/trd-mobile.png',
        desktopimage: '/projects/trd/trd-desktop.png',
        reporturl: ''
    },
    {
        name: 'Allied Construction',
        problem: 'Construction supplier needed to replace expensive outdated wholesale system.',
        solution: 'Built custom wholesale platform with business-specific pricing.',
        url: 'https://alliedconstruction.vercel.app/',
        image: '/projects/allied/allied-mobile.png',
        desktopimage: '/projects/allied/allied-desktop.png',
        reporturl: ''
    },
    {
        name: 'Electric Doctors',
        problem: 'Electrical contractor needed better customer communication and invoicing.',
        solution: 'Created website with customer management and business tools.',
        url: 'https://www.electricdrs.com',
        image: '/projects/eds/eds-mobile.png',
        desktopimage: '/projects/eds/eds-desktop.png',
        reporturl: ''
    },
    {
        name: 'Skylar Lily',
        problem: 'Content creator needed a hub to showcase work and engage with fans.',
        solution: 'Made a website connecting social media and community features.',
        url: 'https://www.skylarlily.com',
        image: '/projects/skylar/skylar-mobile.png',
        desktopimage: '/projects/skylar/skylar-desktop.png',
        reporturl: ''
    },
    {
        name: 'Lvolt (Networking)',
        problem: 'Security contractor needed to expand CCTV and low voltage services.',
        solution: 'Built website with service area targeting and lead generation.',
        url: 'https://www.lvolt.net',
        image: '/projects/lvolt/lvolt-mobile.png',
        desktopimage: '/projects/lvolt/lvolt-desktop.png',
        reporturl: ''
    }
];

export default function Hero() {  // Remove onComplete prop
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
    const [dotsReady, setDotsReady] = useState(false);
    const [contentFading, setContentFading] = useState(false);

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
            
            preloadImages(0).then(() => {
                if (isMobile) {
                    // Keep existing mobile sequence
                    setTimeout(() => {
                        setShowPreview(true);
                        setTimeout(() => {
                            setShowPreview(false);
                            setTimeout(() => {
                                setShowContent(true);
                                setTimeout(() => {
                                    setShowNav(true);
                                    setInitialAnimationComplete(true);
                                }, 800);
                            }, 300);
                        }, 2000);
                    }, 1300);
                } else {
                    // Desktop sequence - load content first, then preview
                    setTimeout(() => {
                        setShowContent(true);
                        setTimeout(() => {
                            setFirstRevealComplete(true);
                            setShowNav(true);
                            setInitialAnimationComplete(true);
                            setDotsReady(true);
                            // Delay preview appearance until after content
                            setTimeout(() => {
                                setShowPreview(true);
                            }, 800); // Add delay after content is visible
                        }, 600);
                    }, 200);
                }
            });
        }
    }, [isInitialized]);

    // Add resize handler to reset preview state
    useEffect(() => {
        const handleResize = () => {
            setShowPreview(false);
            setShowContent(true);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Update resize handler to also reset dots
    useEffect(() => {
        const handleResize = () => {
            setShowPreview(false);
            setShowContent(true);
            setDotsReady(false); // Reset dots state
            // Wait a bit then show dots again if on desktop
            setTimeout(() => {
                if (window.innerWidth >= 1200) {
                    setDotsReady(true);
                }
            }, 100);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Update resize handler to handle both dots and preview states
    useEffect(() => {
        const handleResize = () => {
            const isDesktop = window.innerWidth >= 1200;
            setShowPreview(false);
            setShowContent(true);
            setDotsReady(false);
            
            // Reset states for desktop
            if (isDesktop) {
                setTimeout(() => {
                    setDotsReady(true);
                    setShowPreview(true); // Show preview on desktop
                }, 100);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Project change effect
    useEffect(() => {
        if (!isInitialized || project === null || !initialAnimationComplete) return;
        if (project === 0 && currentProject === 0) return;
        
        const isMobile = window.innerWidth < 1200;
        setIsTransitioning(true);
        setContentFading(true);
        
        if (isMobile) {
            setShowPreview(false);
            setCurrentProject(project);
            
            preloadImages(project).then(() => {
                setShowPreview(true);
                setTimeout(() => {
                    setShowPreview(false);
                    // Release transition lock sooner on mobile
                    setIsTransitioning(false);
                    setContentFading(false);
                }, 1500);
            });
        } else {
            // Desktop sequence - delay preview changes
            setCurrentProject(project);
            setShowPreview(false);
            
            preloadImages(project).then(() => {
                setContentFading(false);
                setTimeout(() => {
                    setShowPreview(true);
                    setIsTransitioning(false);
                }, 800); // Delay preview appearance
            });
        }
    }, [project, isInitialized, initialAnimationComplete]);

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

                        <div className={`${styles.contentContainer} ${showContent ? styles.visible : ''} ${
                            contentFading ? styles.fading : ''
                        }`}>
                            <h2 className={styles.projectproblems}>PROBLEMS:</h2>
                            <p className={styles.projectparagraph}>{projects[currentProject].problem}</p>

                            <h2 className={styles.projectsolutions}>SOLUTIONS:</h2>
                            <p className={styles.projectparagraph}>{projects[currentProject].solution}</p>

                            {/* Move meta inside contentContainer */}
                            <div className={`${styles.meta} ${
                                // Simplified visibility condition
                                (showContent && !isTransitioning) ? styles.visible : ''
                            }`}>
                                <div className={styles.controls}>
                                    <div className={styles.controllinks}>
                                        <a href={projects[currentProject].url} className={styles.link}>GO TO SITE</a>
                                        {projects[currentProject]?.reporturl && (
                                            <a href={projects[currentProject]?.reporturl} className={styles.link}>SEE SCORE</a>
                                        )}
                                    </div>
                                </div>

                                <div className={`${styles.dots} ${
                                    // Simplified dots visibility condition
                                    (showContent && !isTransitioning) ? styles.visible : ''
                                }`}>
                                    {projects.map((p, i) => {
                                        // On mobile, don't check dotsReady, just show dots when preview is hidden
                                        const isMobile = window.innerWidth < 1200;
                                        if (isMobile && showPreview) return null;
                                        if (!isMobile && !dotsReady && i > 0) return null;
                                        
                                        // When ready, show dots with distance check
                                        const distance = Math.abs(project - i);
                                        if (distance > 2) return null;
                                        
                                        const dotClass = `${styles.dot} ${
                                            project === i ? styles.active : ''
                                        }`;
                                        
                                        return (
                                            <Dot 
                                                key={i} 
                                                className={dotClass}
                                                onClick={() => !isTransitioning && setProject(i)}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.arrows} ${
                        // Only show arrows after initial content AND preview are loaded
                        (firstRevealComplete && showPreview && window.innerWidth >= 1200 && !isTransitioning) 
                            ? styles.visible 
                            : ''
                    }`}>
                        {/* Always render both buttons, but disable them based on conditions */}
                        <button 
                            className={`${styles.button} ${styles.buttonleft}`} 
                            onClick={prevProject}
                            disabled={project <= 0 || isTransitioning}
                        >
                            <LeftLine className={`${styles.arrow} ${styles.arrowleft}`} />
                        </button>
                        
                        <button 
                            className={`${styles.button} ${styles.buttonright}`} 
                            onClick={nextProject}
                            disabled={project >= projects.length - 1 || isTransitioning}
                        >
                            <RightLine className={`${styles.arrow} ${styles.arrowright}`} />
                        </button>
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