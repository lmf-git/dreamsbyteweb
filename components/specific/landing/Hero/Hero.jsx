'use client';

import { useState } from 'react';

import RightLine from '../../../icons/controls/RightLine';
import LeftLine from '../../../icons/controls/LeftLine';
import Dot from '../../../icons/controls/Dot';

import Screen from '../../landing/Screen/Screen';
import ScreenBase from '../../landing/Screen/Base';

import styles from './hero.module.scss';

const projects = [
    {
        name: 'Skylar Lily',
        problem: 'Faced with outdated branding and a lackluster online presence, [Client Name] struggled to connect with their target audience and stand out in the competitive digital landscape',
        solution: 'Collaborating with [Client Name], we tackled a critical challenge head-on. By crafting an impactful website and cohesive digital brand identity, we not only addressed their need for a strong online presence but also ensured consistency and recognition across platforms, driving their growth',
        url: 'https://www.skylarlily.com',
        reporturl: ''
    },
    {
        name: 'Lvolt (Networking)',
        problem: 'Faced with outdated branding and a lackluster online presence, [Client Name] struggled to connect with their target audience and stand out in the competitive digital landscape',
        solution: 'Collaborating with [Client Name], we tackled a critical challenge head-on. By crafting an impactful website and cohesive digital brand identity, we not only addressed their need for a strong online presence but also ensured consistency and recognition across platforms, driving their growth',
        url: 'https://www.lvolt.net',
        reporturl: ''
    },
    {
        name: 'The Right Direction',
        problem: '',
        solution: '',
        url: 'https://trd.vercel.app',
        reporturl: ''
    },
    {
        name: 'Electric Doctors',
        problem: '...',
        solution: '...',
        url: 'https://www.electricdrs.com',
        reporturl: ''
    },
    {
        name: 'Astin Doherty',
        problem: '...',
        solution: '...',
        url: 'https://www.astindoherty.com',
        reporturl: ''
    },
    {
        name: 'MyLuxuryLodging',
        problem: '...',
        solution: '...',
        url: 'https://myluxurylodging.vercel.app/',
        reporturl: ''
    },
    {
        name: 'The Myre',
        problem: '...',
        solution: '...',
        url: 'https://themyre.com',
        reporturl: ''
    },
    {
        name: 'Luxe Blinds',
        problem: '...',
        solution: '...',
        url: 'https://luxeblinds.vercel.app/',
        reporturl: ''
    },
    {
        name: 'YabberGabber',
        problem: '...',
        solution: '...',
        url: 'https://yabbergabberclient.vercel.app/',
        reporturl: ''
    },
    {
        name: 'HouseCheckup',
        problem: 'Work in progress/active outdated placeholder.',
        solution: '...',
        url: 'https://housecheckupwebsite.vercel.app/',
        reporturl: ''
    },
    {
        name: 'Allied Construction',
        problem: '...',
        solution: '...',
        url: 'https://alliedconstruction.vercel.app/',
        reporturl: ''
    },
    {
        name: 'IMAA',
        problem: '...',
        solution: '...',
        url: 'https://imaainterface.vercel.app/',
        reporturl: ''
    },
    {
        name: 'The Coop',
        problem: '...',
        solution: '...',
        url: 'https://thecoop.group',
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
        name: 'MoodCoach',
        problem: '...',
        solution: '...',
        url: 'https://moodcoach.vercel.app/',
        reporturl: ''
    }
];




export default function Hero() {
    const [project, setProject] = useState(0);

    return <div className="section">
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
                    <iframe className={styles.screeniframe} src={projects[project].url} />

                    <img className={styles.screenspinner} src="/landing/spinner.svg" />

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
                    <img src="/landing/mobile.svg" />
                    <iframe className={styles.mobileiframe} src={projects[project].url} />
                    <img className={styles.mobilespinner} src="/landing/spinner.svg" />
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