import styles from '../styles/page.module.css';

import FooterComponent from './footer';
import IntroComponent from './intro';
import ProjectsComponent from './projects';

export default function Home() {
    return (
        <div className={styles.container}>
            <IntroComponent />
            <ProjectsComponent />
            <FooterComponent />
        </div>
    );
}
