import { FiFilm } from "react-icons/fi";
import styles from "../../styles.module.css";

const AuthFormHeader = () => {
  return (
    <div className={styles.authHeader_wrapper}>
      <div className={styles.authHeader_icon}>
        <FiFilm size={"3rem"} color="rgb(204, 204, 204)" />
      </div>
      <h1 className={styles.authHeader_title}>Movie Catalogue</h1>
    </div>
  );
};

export default AuthFormHeader;
