import { FiAperture } from "react-icons/fi";
import styles from "../styles.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Fallback = () => {
  const navigate = useNavigate();
  const [back, setBack] = useState(false);
  back && navigate("/")


  return (
    <div role="alert" className={styles.fallBack_wrapper}>
      <div className={styles.fallBack_icon}>
        <FiAperture size={"4rem"} />
      </div>
      <div className={styles.fallBack_brief}>
        <h1>Something went wrong 😥😓 </h1>
      </div>
      <div >
        <button className={styles.returnError_btn}
         onClick={()=> setBack(true)}
         >
          Back to Previous Page
        </button>
      </div>
    </div>
  );

};


export default Fallback;
