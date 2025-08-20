'use client';

import { useState, useEffect } from 'react';
import { useHero } from '../../contexts/HeroContext';
import { useHeaderAnimation } from '../../contexts/HeaderAnimationContext';

import RightLine from '../../components/icons/controls/RightLine';
import LeftLine from '../../components/icons/controls/LeftLine';
import Dot from '../../components/icons/controls/Dot';

import Screen from '../../components/specific/portfolio/Screen/Screen';
import Mobile from '../../components/specific/portfolio/Mobile/Mobile';

import styles from './portfolio.module.scss';

const projects = [
    {
        name: 'ICTALLY',
        problem: 'IT professionals needed a trusted marketplace to showcase skills and connect with businesses.',
        solution: 'Built a platform connecting IT integrators, businesses, and vendors with reviews and portfolios.',
        url: 'https://ictally.com',
        image: '/projects/ictally/ictally-mobile.png',
        desktopimage: '/projects/ictally/ictally-desktop.png',
        reporturl: ''
    },
    {
        name: 'Lvolt Networking',
        problem: 'Security contractor needed to expand CCTV and low voltage services.',
        solution: 'Built website with service area targeting and lead generation.',
        url: 'https://www.lvolt.net',
        image: '/projects/lvolt/lvolt-mobile.png',
        desktopimage: '/projects/lvolt/lvolt-desktop.png',
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
        name: 'MetaTicket',
        problem: 'Event discovery needed to be more accessible and supportive of local talent.',
        solution: 'Created a platform making live events affordable and connecting users with local venues.',
        url: 'https://metaticket.org',
        image: '/projects/metaticket/metaticket-mobile.png',
        desktopimage: '/projects/metaticket/metaticket-desktop.png',
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
        name: 'Electric Doctors',
        problem: 'Electrical contractor needed better customer communication and invoicing.',
        solution: 'Created website with customer management and business tools.',
        url: 'https://www.electricdrs.com',
        image: '/projects/eds/eds-mobile.png',
        desktopimage: '/projects/eds/eds-desktop.png',
        reporturl: ''
    },
    {
        name: 'TRK Civils LTD',
        problem: 'New civil engineering company needed a website and complete digital presence.',
        solution: 'Built a modern website with inquiry tools and marketing setup.',
        url: 'https://trk-amber.vercel.app',
        image: '/projects/trk/trk-mobile.png',
        desktopimage: '/projects/trk/trk-desktop.png',
        reporturl: ''
    }
];

export default function PortfolioPage() {
    const { setHeroComplete } = useHero();
    const { headerAnimationComplete } = useHeaderAnimation();
    const [project, setProject] = useState(null);
    const [showPreview, setShowPreview] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [initialAnimationComplete, setInitialAnimationComplete] = useState(false);
    const [isInitialized, setIsInitialized] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [firstRevealComplete, setFirstRevealComplete] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [isReturningToFirst, setIsReturningToFirst] = useState(false);
    const [showNav, setShowNav] = useState(false);
    const [dotsReady, setDotsReady] = useState(false);
    const [contentFading, setContentFading] = useState(false);
    const [showTitle, setShowTitle] = useState(false);
    const [showProjectName, setShowProjectName] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    const preloadImages = (projectIndex) => {
        return new Promise((resolve) => {
            setImagesLoaded(false);
            
            const desktopImage = new Image();
            const mobileImage = new Image();
            let loadedCount = 0;

            const handleLoad = () => {
                loadedCount++;
                if (loadedCount === 2) {
                    setImagesLoaded(true);
                    resolve();
                }
            };

            desktopImage.onload = handleLoad;
            mobileImage.onload = handleLoad;

            desktopImage.onerror = handleLoad;
            mobileImage.onerror = handleLoad;

            desktopImage.src = projects[projectIndex].desktopimage;
            mobileImage.src = projects[projectIndex].image;
        });
    };

    useEffect(() => {
        if (!isInitialized) {
            const isMobile = window.innerWidth < 1200;
            setIsInitialized(true);
            setProject(0);
            setCurrentProject(0);
            setIsDesktop(!isMobile);
            
            preloadImages(0).then(() => {
                const logoAnimationTime = 100;
                
                if (isMobile) {
                    setTimeout(() => {
                        setShowTitle(true);
                        
                        setTimeout(() => {
                            setShowProjectName(true);
                            
                            setTimeout(() => {
                                setShowPreview(true);
                                
                                setTimeout(() => {
                                    setShowPreview(false);
                                    setTimeout(() => {
                                        setShowContent(true);
                                        setFirstRevealComplete(true);
                                        setTimeout(() => {
                                            setShowNav(true);
                                            setDotsReady(true);
                                            setTimeout(() => {
                                                setInitialAnimationComplete(true);
                                            }, 500);
                                        }, 300);
                                    }, 300);
                                }, 6000);
                            }, 300);
                        }, 200);
                    }, logoAnimationTime);
                } else {
                    setTimeout(() => {
                        setFirstRevealComplete(true);
                        setInitialAnimationComplete(true);
                    }, logoAnimationTime);
                }
            });
        }
    }, [isInitialized]);

    useEffect(() => {
        if (headerAnimationComplete && initialAnimationComplete && !showContent) {
            const isMobile = window.innerWidth < 1200;
            
            setTimeout(() => {
                setShowContent(true);
                setShowNav(true);
                setDotsReady(true);
                
                if (!isMobile) {
                    setTimeout(() => {
                        setShowPreview(true);
                    }, 400);
                }
            }, 200);
        }
    }, [headerAnimationComplete, initialAnimationComplete, showContent]);

    useEffect(() => {
        if (initialAnimationComplete) {
            setHeroComplete(true);
        }
    }, [initialAnimationComplete, setHeroComplete]);

    useEffect(() => {
        const handleResize = () => {
            const desktopMode = window.innerWidth >= 1200;
            setIsDesktop(desktopMode);
            setShowPreview(false);
            setShowContent(true);
            setDotsReady(false);
            
            if (desktopMode) {
                setDotsReady(true);
                setShowPreview(true);
            } else {
                setDotsReady(true);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!isInitialized || project === null || !initialAnimationComplete) return;
        if (project === 0 && currentProject === 0) return;
        
        const isMobile = window.innerWidth < 1200;
        setIsTransitioning(true);
        setContentFading(true);
        setShowNav(false);
        setDotsReady(false);
        
        if (isMobile) {
            setShowContent(false);
            setShowProjectName(false);
            
            preloadImages(project).then(() => {
                setCurrentProject(project);
                setTimeout(() => {
                    setShowProjectName(true);
                    setShowPreview(true);
                }, 100);
                
                setTimeout(() => {
                    setShowPreview(false);
                    setShowContent(true);
                    setIsTransitioning(false);
                    setContentFading(false);
                    
                    setTimeout(() => {
                        setShowNav(true);
                        setDotsReady(true);
                    }, 600);
                }, 6000);
            });
        } else {
            preloadImages(project).then(() => {
                setTimeout(() => {
                    setCurrentProject(project);
                    setTimeout(() => {
                        setShowContent(true);
                        setIsTransitioning(false);
                        setContentFading(false);
                        setShowNav(true);
                        setDotsReady(true);
                    }, 100);
                }, 250);
            });
        }
    }, [project, isInitialized, initialAnimationComplete]);

    const nextProject = () => {
        if (project < projects.length - 1 && !isTransitioning && imagesLoaded) setProject(project + 1);
    };

    const prevProject = () => {
        if (project > 0 && !isTransitioning && imagesLoaded) {
            if (project === 1) {
                setIsReturningToFirst(true);
            }
            setProject(project - 1);
        }
    };

    return (
        <div className={`section ${styles.hero} ${headerAnimationComplete ? styles.navigated : ''}`}>
            {currentProject !== null && (
                <div className={styles.projects}>
                    <div className={styles.projectdesc}>
                        <h1 className={styles.title}>Latest Work</h1>

                        <div className={`${styles.contentContainer} ${showContent ? styles.visible : ''} ${
                            contentFading ? styles.fading : ''
                        }`}>
                            <h1 className={styles.projectname}>{projects[currentProject].name}</h1>
                            
                            <h2 className={styles.projectproblems}>PROBLEM:</h2>
                            <p className={styles.projectparagraph}>{projects[currentProject].problem}</p>

                            <h2 className={styles.projectsolutions}>SOLUTION:</h2>
                            <p className={styles.projectparagraph}>{projects[currentProject].solution}</p>

                            <div className={`${styles.navigation} ${showNav ? styles.visible : ''}`}>
                                <a 
                                    href={projects[currentProject].url}
                                    className={styles.floatingLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GO TO SITE
                                </a>

                                <div className={`${styles.dots} ${dotsReady ? styles.visible : ''}`}>
                                    {(() => {
                                        const maxDots = 5;
                                        const totalProjects = projects.length;
                                        const currentIndex = project;
                                        
                                        let startIndex, endIndex;
                                        
                                        if (totalProjects <= maxDots) {
                                            startIndex = 0;
                                            endIndex = totalProjects - 1;
                                        } else {
                                            const halfDots = Math.floor(maxDots / 2);
                                            startIndex = Math.max(0, currentIndex - halfDots);
                                            endIndex = Math.min(totalProjects - 1, startIndex + maxDots - 1);
                                            
                                            if (endIndex === totalProjects - 1) {
                                                startIndex = Math.max(0, endIndex - maxDots + 1);
                                            }
                                        }
                                        
                                        return projects.slice(startIndex, endIndex + 1).map((p, i) => {
                                            const actualIndex = startIndex + i;
                                            const dotClass = `${styles.dot} ${
                                                project === actualIndex ? styles.active : ''
                                            } ${isTransitioning || !imagesLoaded ? styles.disabled : ''}`;
                                            
                                            return (
                                                <Dot 
                                                    key={actualIndex} 
                                                    className={dotClass}
                                                    onClick={() => !isTransitioning && imagesLoaded && setProject(actualIndex)}
                                                    disabled={isTransitioning || !imagesLoaded}
                                                />
                                            );
                                        });
                                    })()}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.arrows} ${
                        (firstRevealComplete && showPreview && typeof window !== 'undefined' && window.innerWidth >= 1200 && !isTransitioning) 
                            ? styles.visible 
                            : ''
                    }`}>
                        <button 
                            className={`${styles.button} ${styles.buttonleft}`} 
                            onClick={prevProject}
                            disabled={project <= 0 || isTransitioning || !imagesLoaded}
                            aria-label="Previous project"
                        >
                            <LeftLine className={`${styles.arrow} ${styles.arrowleft}`} />
                        </button>
                        
                        <button 
                            className={`${styles.button} ${styles.buttonright}`} 
                            onClick={nextProject}
                            disabled={project >= projects.length - 1 || isTransitioning || !imagesLoaded}
                            aria-label="Next project"
                        >
                            <RightLine className={`${styles.arrow} ${styles.arrowright}`} />
                        </button>
                    </div>

                    <div className={`${styles.projectpreview} ${showPreview ? styles.showMobile : ''}`}>
                        <Screen 
                            extraClass={`${styles.screen} ${showPreview ? styles.showMobile : ''}`}
                            src={projects[currentProject].desktopimage}
                            loading={isTransitioning && isDesktop}
                        />
                        
                        <Mobile 
                            extraClass={`${styles.mobile} ${showPreview ? styles.showMobile : ''}`}
                            src={projects[currentProject].image}
                            loading={isTransitioning && isDesktop}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}