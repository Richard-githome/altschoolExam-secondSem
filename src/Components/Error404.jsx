import { useNavigate } from "react-router-dom";
import styles from "../styles.module.css";

const Error404 = () => {
  const navigate = useNavigate()

  const handle404ReturnBTN = ()=>{
    navigate("/")
  }
  return (
    <div className={styles.errorPage}>
      <h1 className={styles.errorPage_title}>Oops! 😓😪<br/>  Page Not Found.</h1>
      <p className={styles.errorPage_brief}>The page you are looking for does not exist currently</p>
      <button type="button" onClick={()=>handle404ReturnBTN()} className={styles.returnError_btn}>Back to App</button>
    </div>
  );
};

export default Error404;
