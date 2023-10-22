import styles from "../styles.module.css";
import ErrorTest from "./ErrorTest";


const Home = () => {


  return (
    <div className={styles.homePage_wrapper}>
      <h1 className={styles.homePage_title}>Hello Altschool Team <br />👋 😀 </h1>
      <h2 className={styles.homPage_subTitle}>
        Exam Question 3: Welcome to our Movie Catalog
      </h2>
      <div className={styles.homePage_short_note}>
        <p>
          Hey, I am also open, and would be glad to get an internship with you during or
          at the end of the program.
        </p>
      </div>
      <ErrorTest/>
    </div>
  );
};

export default Home;
