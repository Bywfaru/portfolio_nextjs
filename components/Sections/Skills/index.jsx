import styles from './Skills.module.scss';
import homeStyles from '@/styles/pages/Home.module.scss';
import sectionsStyles from '../Sections.module.scss';
import programmingLanguages from 'res/programming_languages.json';
import technologies from 'res/technologies.json';
import Image from 'next/image';
import { Anchor } from '../../';

const Skills = () => {
  return (
    // <div className={styles.background}>
    // <span className={styles.backgroundStart}></span>
    <section className={sectionsStyles.container}>
      <Anchor name={'skills'} />

      <h1 className={homeStyles.heading}>These are my skills...</h1>

      <div className={styles.container}>
        <div className={styles.skillsContainer}>
          <h2 className={homeStyles.subHeading}>Programming Languages</h2>

          <div className={styles.logoContainer}>
            {programmingLanguages.map((language, index) => (
              <Image
                key={index}
                src={language.logo}
                width={50}
                height={50}
                alt={`${language.name} logo`}
              />
            ))}
          </div>

          <div className={styles.logoContainerDesktop}>
            {programmingLanguages.map((language, index) => (
              <Image
                key={index}
                src={language.logo}
                width={80}
                height={80}
                alt={`${language.name} logo`}
              />
            ))}
          </div>
        </div>

        <div className={styles.skillsContainer}>
          <h2 className={homeStyles.subHeading}>Technologies</h2>

          <div className={styles.logoContainer}>
            {technologies.map((technology, index) => (
              <Image
                key={index}
                src={technology.logo}
                width={50}
                height={50}
                alt={`${technology.name} logo`}
              />
            ))}
          </div>

          <div className={styles.logoContainerDesktop}>
            {technologies.map((technology, index) => (
              <Image
                key={index}
                src={technology.logo}
                width={80}
                height={80}
                alt={`${technology.name} logo`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
    // <span className={styles.backgroundEnd}></span>
    // </div>
  );
};

export default Skills;
