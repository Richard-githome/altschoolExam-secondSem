import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import styles from "../../styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { authenticateUser } from "../../Database/slice";
import LoadingSimulator from "../LoadingSimulator";
import AuthFormHeader from "./AuthFormHeader";
import { Toaster, toast } from "react-hot-toast";

const LoginForm = () => {
  const userRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const errorMSGRef = useRef();

  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState(null);
  const [pwd, setPWD] = useState(null);
  const [errorMSG, setErrorMSG] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && pwd) {
      dispatch(
        authenticateUser({
          email,
          pwd,
        })
      );
      if (
        errorMSG !== "Wrong Password" ||
        errorMSG !== "Account do not eixst" ||
        errorMSGRef.current !== "Wrong Password" ||
        errorMSGRef.current !== "Account do not exist"
      ) {
        navigate("/");
      } else {
        toast.error("Wrong email and password");
      }
    }
  };

  useEffect(() => {
    setEmail(null);
    setPWD(null);
    setErrorMSG(errorMSGRef.current);
    setTimeout(() => {
      setErrorMSG(null);
      errorMSGRef.current = "";
    }, 1000);
  }, []);

  const userState = useSelector((state) => state.user.userData);
  // if (userState.isAuthenticated === true) {
  //   navigate("/");
  // }
  if (
    userState.itme === "Wrong Password" ||
    userState.item === "Account do not exist"
  ) {
    errorMSGRef.current = userState.item;
  }

  return (
    <>
      {isLoading && (
        <>
          <LoadingSimulator />
        </>
      )}
      {!isLoading && (
        <>
          <AuthFormHeader />
          <div>
            <form
              className={styles.login_form}
              onSubmit={(e) => handleLogin(e)}
            >
              <h2 className={styles.register_title}>Sign In</h2>
              <label className={styles.register_label} htmlFor="email">
                Email:
              </label>{" "}
              <br />
              <input
                type="email"
                name="email"
                required
                autoComplete="off"
                ref={userRef}
                placeholder="example@domain.com"
                className={styles.register_input}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <label className={styles.register_label} htmlFor="password">
                Password:
              </label>{" "}
              <br />
              <input
                type="password"
                className={styles.register_input}
                name="password"
                required
                autoComplete="off"
                placeholder="Password"
                onChange={(e) => setPWD(e.target.value)}
              />
              <br />
              <button type="submit" className={styles.register_button}>
                login
              </button>
              <br />
              <small>
                <i>
                  Need an account? <Link to="/register">Register</Link> here.
                </i>
              </small>
            </form>
          </div>
        </>
      )}

      <Toaster position="top-center" />
    </>
  );
};

export default LoginForm;
