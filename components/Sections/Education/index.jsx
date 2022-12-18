import styles from './Education.module.scss';
import homeStyles from '@/styles/pages/Home.module.scss';
import sectionsStyles from '../Sections.module.scss';
import { Anchor } from '../../';
import bcitLogo from 'public/assets/images/school/bcit_logo.png';
import douglasLogo from 'public/assets/images/school/douglas-college_logo.png';
import Image from 'next/image';

const Education = () => {
  return (
    <section className={sectionsStyles.container}>
      <Anchor name={'education'} />

      <h1 className={homeStyles.heading}>I went to school for this!</h1>

      <div className={styles.schoolsContainer}>
        <div className={styles.schoolContainer}>
          <div className={styles.schoolNameContainer}>
            <div className={styles.schoolLogoContainer}>
              <Image
                src={bcitLogo}
                width={110.28}
                height={100}
                alt={'BCIT logo'}
              />
            </div>
            <span className={styles.schoolName}>
              British Columbia Institute of Technology
            </span>
          </div>
          <span className={styles.schoolOption}>
            Computer Systems Technology - Web and Mobile Development
          </span>
          <span className={styles.schoolGraduated}>
            Graduated Dec 2021 - Diploma
          </span>
          <span className={styles.schoolYears}>Jan 2020 - Dec 2021</span>
        </div>

        <div className={styles.schoolContainer}>
          <div className={styles.schoolNameContainer}>
            <div className={styles.schoolLogoContainer}>
              <Image
                src={douglasLogo}
                width={94.82}
                height={100}
                alt={'Douglas College logo'}
              />
            </div>
            <span className={styles.schoolName}>Douglas College</span>
          </div>
          <span className={styles.schoolOption}>
            Computing Studies and Information Systems
          </span>
          <span className={styles.schoolGraduated}>
            Completed courses: <br />
            <span className={styles.schoolCompletedCourses}>
              C++ Programming, Introduction to Programming, Calculus,
              Introduction to Programming II, Data Structures & Algorithms,
              Calculus II, Business Statistics, Linear Algebra, Academic
              Writing, Discrete Mathematics I, Introduction to Programming II
            </span>
          </span>
          <span className={styles.schoolYears}>Sep 2017 - May 2019</span>
        </div>
      </div>
    </section>
  );
};

export default Education;
