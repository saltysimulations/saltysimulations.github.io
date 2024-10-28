import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  link: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Installation",
    link: "/docs/installation",
    description: (
      <>
        New to the 74S? Get started by learning how to install the aircraft.
      </>
    ),
  },
  {
    title: 'EFB Docs',
    link: "/docs/efb/overview",
    description: (
      <>
        Learn about the features of our EFB.
      </>
    ),
  },
  {
    title: 'Release Notes',
    link: "/release-notes/latest",
    description: (
      <>
        Curious about what was added to the latest stable release? Check out the
        release notes.
      </>
    ),
  },
];

function Feature({title, link, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.feature)} onClick={() => window.location.href = link}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
