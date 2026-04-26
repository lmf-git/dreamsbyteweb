'use client';

import { useState, useEffect } from 'react';
import { useHero } from '../../contexts/HeroContext';
import { useHeaderAnimation } from '../../contexts/HeaderAnimationContext';

import RightLine from '../../components/icons/controls/RightLine';
import LeftLine from '../../components/icons/controls/LeftLine';
import Dot from '../../components/icons/controls/Dot';

import Screen from '../../components/specific/portfolio/Screen/Screen';
import Mobile from '../../components/specific/portfolio/Mobile/Mobile';

import { useLanguage } from '../../contexts/LanguageContext';
import styles from './portfolio.module.scss';

const projects = [
    {
        name: 'ICTALLY',
        problem: 'IT professionals needed a trusted marketplace to showcase skills and connect with businesses.',
        problem_es: 'Los profesionales de IT necesitaban un mercado de confianza para mostrar sus habilidades y conectarse con empresas.',
        solution: 'Built a platform connecting IT integrators, businesses, and vendors with reviews and portfolios.',
        solution_es: 'Construimos una plataforma que conecta integradores de IT, empresas y proveedores con reseñas y portfolios.',
        url: 'https://ictally.com',
        image: '/projects/ictally/ictally-mobile.png',
        desktopimage: '/projects/ictally/ictally-desktop.png',
        reporturl: ''
    },
    {
        name: 'Lvolt Networking',
        problem: 'Security contractor needed to expand CCTV and low voltage services.',
        problem_es: 'Un contratista de seguridad necesitaba expandir sus servicios de CCTV y baja tensión.',
        solution: 'Built website with service area targeting and lead generation.',
        solution_es: 'Construimos un sitio web con segmentación por área de servicio y generación de leads.',
        url: 'https://www.lvolt.net',
        image: '/projects/lvolt/lvolt-mobile.png',
        desktopimage: '/projects/lvolt/lvolt-desktop.png',
        reporturl: ''
    },
    {
        name: 'Allied Construction',
        problem: 'Construction supplier needed to replace expensive outdated wholesale system.',
        problem_es: 'Un proveedor de construcción necesitaba reemplazar su costoso sistema mayorista desactualizado.',
        solution: 'Built custom wholesale platform with business-specific pricing.',
        solution_es: 'Construimos una plataforma mayorista personalizada con precios específicos por cliente.',
        url: 'https://alliedconstruction.vercel.app/',
        image: '/projects/allied/allied-mobile.png',
        desktopimage: '/projects/allied/allied-desktop.png',
        reporturl: ''
    },
    {
        name: 'MetaTicket',
        problem: 'Event discovery needed to be more accessible and supportive of local talent.',
        problem_es: 'El descubrimiento de eventos necesitaba ser más accesible y apoyar el talento local.',
        solution: 'Created a platform making live events affordable and connecting users with local venues.',
        solution_es: 'Creamos una plataforma que hace los eventos en vivo más accesibles y conecta a los usuarios con venues locales.',
        url: 'https://metaticket.org',
        image: '/projects/metaticket/metaticket-mobile.png',
        desktopimage: '/projects/metaticket/metaticket-desktop.png',
        reporturl: ''
    },
    {
        name: 'The Right Direction',
        problem: 'Community service needed a way to showcase programs and handle bookings.',
        problem_es: 'Un servicio comunitario necesitaba una forma de mostrar sus programas y gestionar reservas.',
        solution: 'Created a website with booking system and program information.',
        solution_es: 'Creamos un sitio web con sistema de reservas e información sobre los programas.',
        url: 'https://trd.vercel.app',
        image: '/projects/trd/trd-mobile.png',
        desktopimage: '/projects/trd/trd-desktop.png',
        reporturl: ''
    },
    {
        name: 'Electric Doctors',
        problem: 'Electrical contractor needed better customer communication and invoicing.',
        problem_es: 'Un contratista eléctrico necesitaba mejorar la comunicación con clientes y la facturación.',
        solution: 'Created website with customer management and business tools.',
        solution_es: 'Creamos un sitio web con gestión de clientes y herramientas de negocio.',
        url: 'https://www.electricdrs.com',
        image: '/projects/eds/eds-mobile.png',
        desktopimage: '/projects/eds/eds-desktop.png',
        reporturl: ''
    },
    {
        name: 'TRK Civils LTD',
        problem: 'New civil engineering company needed a website and complete digital presence.',
        problem_es: 'Una nueva empresa de ingeniería civil necesitaba un sitio web y presencia digital completa.',
        solution: 'Built a modern website with inquiry tools and marketing setup.',
        solution_es: 'Construimos un sitio web moderno con herramientas de consulta y configuración de marketing.',
        url: 'https://trk-amber.vercel.app',
        image: '/projects/trk/trk-mobile.png',
        desktopimage: '/projects/trk/trk-desktop.png',
        reporturl: ''
    }
];

export default function PortfolioPage() {
    const { setHeroComplete } = useHero();
    const { headerAnimationComplete } = useHeaderAnimation();
    const { t, language } = useLanguage();
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
            const desktopImage = new Image();
            const mobileImage = new Image();
            let loadedCount = 0;
            let hasSetLoadingFalse = false;
            let startTime = Date.now();

            // Only show loading state if images take more than 200ms to load
            const loadingTimer = setTimeout(() => {
                if (loadedCount < 2) {
                    setImagesLoaded(false);
                    hasSetLoadingFalse = true;
                }
            }, 200);

            const handleLoad = () => {
                loadedCount++;
                if (loadedCount === 2) {
                    clearTimeout(loadingTimer);
                    // Always set images as loaded when both are complete
                    setImagesLoaded(true);
                    resolve();
                }
            };

            // Check if images are already cached by setting src first
            desktopImage.onload = handleLoad;
            mobileImage.onload = handleLoad;
            desktopImage.onerror = handleLoad;
            mobileImage.onerror = handleLoad;

            desktopImage.src = projects[projectIndex].desktopimage;
            mobileImage.src = projects[projectIndex].image;

            // If both images are already complete (cached), handle immediately
            if (desktopImage.complete && mobileImage.complete) {
                clearTimeout(loadingTimer);
                setImagesLoaded(true);
                resolve();
                return;
            }
        });
    };

    useEffect(() => {
        if (!isInitialized) {
            const isMobile = window.innerWidth < 1200;
            setIsInitialized(true);
            setProject(0);
            setCurrentProject(0);
            setIsDesktop(!isMobile);
            
            // Start image preloading and ensure imagesLoaded state is set
            preloadImages(0).then(() => {
                // Images are now loaded, state already set in preloadImages
            });
            
            const logoAnimationTime = 100;
            
            if (isMobile) {
                setTimeout(() => {
                    setShowTitle(true);
                    
                    setTimeout(() => {
                        setShowProjectName(true);
                        
                        setTimeout(() => {
                            setShowPreview(true);
                        }, 300);
                    }, 200);
                }, logoAnimationTime);
            } else {
                setTimeout(() => {
                    setFirstRevealComplete(true);
                    setInitialAnimationComplete(true);
                }, logoAnimationTime);
            }
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
                    }, 100); // Reduced delay since we have loading spinners
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
        
        // Start preloading images in background
        preloadImages(project);
        
        if (isMobile) {
            setShowContent(false);
            setShowProjectName(false);
            
            setTimeout(() => {
                setCurrentProject(project);
                setTimeout(() => {
                    setShowProjectName(true);
                    setShowPreview(true);
                }, 100);
            }, 250);
        } else {
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
        }
    }, [project, isInitialized, initialAnimationComplete]);

    // Handle mobile preview countdown after images load and spinners finish
    useEffect(() => {
        if (!imagesLoaded) return;
        
        const isMobile = window.innerWidth < 1200;
        if (!isMobile) return;
        
        // Only start countdown if preview is showing
        if (!showPreview) return;
        
        // Wait for spinners to finish and give users time to see the loaded preview
        // Start with a delay to ensure spinners have disappeared
        const initialDelay = setTimeout(() => {
            // Then start the actual 6-second preview countdown
            const countdownTimer = setTimeout(() => {
                setShowPreview(false);
                
                if (isTransitioning) {
                    // Handle transitions
                    setShowContent(true);
                    setIsTransitioning(false);
                    setContentFading(false);
                    
                    setTimeout(() => {
                        setShowNav(true);
                        setDotsReady(true);
                    }, 600);
                } else {
                    // Handle initial load
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
                }
            }, 6000); // 6 seconds of clean preview
            
            return () => clearTimeout(countdownTimer);
        }, 500); // 500ms delay to ensure spinners have finished

        return () => clearTimeout(initialDelay);
    }, [imagesLoaded, showPreview, isTransitioning]);

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
                        <h1 className={styles.title}>{t.portfolio.title}</h1>

                        <div className={`${styles.contentContainer} ${showContent ? styles.visible : ''} ${
                            contentFading ? styles.fading : ''
                        }`}>
                            <h1 className={styles.projectname}>{projects[currentProject].name}</h1>
                            
                            <h2 className={styles.projectproblems}>{t.portfolio.problem}</h2>
                            <p className={styles.projectparagraph}>{language === 'es' ? projects[currentProject].problem_es : projects[currentProject].problem}</p>

                            <h2 className={styles.projectsolutions}>{t.portfolio.solution}</h2>
                            <p className={styles.projectparagraph}>{language === 'es' ? projects[currentProject].solution_es : projects[currentProject].solution}</p>

                            <div className={`${styles.navigation} ${showNav ? styles.visible : ''}`}>
                                <a 
                                    href={projects[currentProject].url}
                                    className={styles.floatingLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {t.portfolio.goToSite}
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
                            loading={isDesktop ? (isTransitioning || !imagesLoaded) : !imagesLoaded}
                        />
                        
                        <Mobile 
                            extraClass={`${styles.mobile} ${showPreview ? styles.showMobile : ''}`}
                            src={projects[currentProject].image}
                            loading={isDesktop ? (isTransitioning || !imagesLoaded) : !imagesLoaded}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}