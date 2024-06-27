import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <script src="dist/typesense.min.js"></script>
      <meta name="description" content="Welcome to the Edaran documentation site. Find tutorials, guides, and resources to help you get started with Edaran." />
      <meta name="keywords" content="edaran, resources, cusdec, docusaurus" />
      
           <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={` ${siteConfig.title}`}
      description="Welcome to the Edara documentation site. Find tutorials, guides, and resources to help you get started with Edaran.">
      <HomepageHeader />
      <main>
      
        <HomepageFeatures />
        <section>
          <Heading as='h2'>Introduction to Edaran</Heading>
          <p>This is API documentation for CUSDEC KASTAM. 
            All the deployment or maintenance will be documented in this API Documentation.</p>
        </section>
        
      </main>
    </Layout>
  );
}
