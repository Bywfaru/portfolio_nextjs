import styles from "./Education.module.scss";
import homeStyles from "@/styles/pages/Home.module.scss";
import sectionsStyles from "../Sections.module.scss";
import { Anchor } from "../../";
import Image from "next/image";
import schools from "res/schools.json";

const Education = () => {
  return (
    <section className={sectionsStyles.container}>
      <Anchor name={"education"} />

      <h1 className={homeStyles.heading}>I went to school for this!</h1>

      <div className={styles.schoolsContainer}>
        {schools.map((school, index) => {
          let schoolProgramOption = school.program;

          if (school.specialty) schoolProgramOption += ` - ${school.specialty}`;

          return (
            <div
              key={index}
              className={styles.schoolContainer}
            >
              <div className={styles.schoolNameContainer}>
                <div className={styles.schoolLogoContainer}>
                  <Image
                    fill
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      objectFit: "contain",
                    }}
                    src={school.logo}
                    alt={`${school.name} logo`}
                  />
                </div>
                <span className={styles.schoolName}>{school.name}</span>
              </div>
              <span className={styles.schoolOption}>{schoolProgramOption}</span>
              {school.expectedGraduation && (
                <span className={styles.schoolGraduated}>
                  Expected to graduate {school.expectedGraduation.year} -{" "}
                  {school.expectedGraduation.level}
                </span>
              )}
              {school.graduated && (
                <span className={styles.schoolGraduated}>
                  Graduated {school.graduated.month} {school.graduated.year} -{" "}
                  {school.graduated.level}
                </span>
              )}
              {!!school.completedCourses?.length && (
                <span className={styles.schoolGraduated}>
                  Completed courses: <br />
                  <span className={styles.schoolCompletedCourses}>
                    {school.completedCourses.join(", ")}
                  </span>
                </span>
              )}
              <span className={styles.schoolYears}>
                {school.attended.from} - {school.attended.to}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
