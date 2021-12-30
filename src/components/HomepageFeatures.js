import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
    {
        title: 'Easy to Use',
        Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <>
                dbang was built on Deno, and easily installed and
                used to run your Deno scripts on GitHub quickly and securely.
            </>
        ),
    },
    {
        title: 'Focus on What Matters',
        Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
        description: (
            <>
                dbang lets you focus on your scripts, and we&apos;ll do the chores. Go
                ahead and create your script in `dbang-catalog` repo under your GitHub account.
            </>
        ),
    },
    {
        title: 'Powered by Deno',
        Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                Deno is a modern runtime for JavaScript and TypeScript with secure by default.
                It's a good choice to write scripts with Deno.
            </>
        ),
    },
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} alt={title}/>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
