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
    title: "Beginner's Guide",
    link: "/docs/category/beginners-guide",
    description: (
      <>
        New to the 74S? Get started by reading our guide tailored towards beginners.
      </>
    ),
  },
  {
    title: 'Feature Guides',
    link: "/docs/category/guides",
    description: (
      <>
        Want to learn about specific features of the aircraft or learn how to operate
        the aircraft in detail? These guides may be beneficial to you.
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
