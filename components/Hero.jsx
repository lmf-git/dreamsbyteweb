import { useState } from 'react';
import RightLine from './icons/controls/RightLine';
import LeftLine from './icons/controls/LeftLine';
import Dot from './icons/controls/Dot';
import Screen from './icons/Screen';
import ScreenBase from './icons/Base';
import styles from '../styles/landing/hero.module.scss';

const projects = [
    {
        name: 'Lvolt (Networking)',
        problem: 'Faced with outdated branding and a lackluster online presence, [Client Name] struggled to connect with their target audience and stand out in the competitive digital landscape',
        solution: 'Collaborating with [Client Name], we tackled a critical challenge head-on. By crafting an impactful website and cohesive digital brand identity, we not only addressed their need for a strong online presence but also ensured consistency and recognition across platforms, driving their growth',
        url: ''
    },
    {
        name: 'Lvolt (Networking)',
        problem: 'Faced with outdated branding and a lackluster online presence, [Client Name] struggled to connect with their target audience and stand out in the competitive digital landscape',
        solution: 'Collaborating with [Client Name], we tackled a critical challenge head-on. By crafting an impactful website and cohesive digital brand identity, we not only addressed their need for a strong online presence but also ensured consistency and recognition across platforms, driving their growth',
        url: ''
    },
];

export default function Hero() {
    const [project, setProject] = useState(0);

    return <div className="section">
        {/* <div className={styles.projects}>
            {
                projects.map(p => (
                    <div>{p.name}</div>
                ))
            }
        </div> */}


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
                    <iframe className={styles.screeniframe} src="https://www.lvolt.net" />
                    {/* <img src="/landing/screen.svg" /> */}
                    <img className={styles.screenspinner} src="/landing/spinner.svg" />

                    <div className={styles.arrows}>
                        <button className={[styles.button, styles.buttonleft].join(' ')}>
                            <LeftLine className={[styles.arrow, styles.arrowleft].join(' ')} />
                        </button>
                        <button className={[styles.button, styles.buttonright].join(' ')}>
                            <RightLine className={[styles.arrow, styles.arrowright].join(' ')} />
                        </button>
                    </div>

                    <Screen className={styles.screenmonitor} />
                    <ScreenBase className={styles.screenbase} />
                </div>

                <div className={styles.mobile}>
                    <img src="/landing/mobile.svg" />
                    <iframe className={styles.mobileiframe} src="https://www.lvolt.net" />
                    <img className={styles.mobilespinner} src="/landing/spinner.svg" />
                </div>

                <div className={styles.controls}>
                    <a href="" className={styles.link}>GO TO SITE</a>
                    <a href="" className={styles.link}>SEE SCORE</a>

                    <div className={styles.dots}>
                        <Dot className={styles.dot} />
                        <Dot className={styles.dot} />
                        <Dot className={styles.dot} />
                        <Dot className={styles.dot} />
                        <Dot className={styles.dot} />
                    </div>
                </div>
            </div>

        </div>

    </div>
};

// Lvolt (Networking)
// PROBLEMS:
// Faced with outdated branding and a lackluster online presence, [Client Name] struggled to connect with their target audience and stand out in the competitive digital landscape.

// SOLUTIONS:
// Collaborating with [Client Name], we tackled a critical challenge head-on. By crafting an impactful website and cohesive digital brand identity, we not only addressed their need for a strong online presence but also ensured consistency and recognition across platforms, driving their growth