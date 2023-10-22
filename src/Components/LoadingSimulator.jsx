import { FiAperture } from "react-icons/fi";
import styles from "../styles.module.css";

const LoadingSimulator = () => {
  return (
    <div className={styles.loadericon_wrapper}>
      <div className={styles.loadericon_container}>
        <FiAperture size={"3rem"} />
      </div>
    </div>
  );
};

export default LoadingSimulator;
