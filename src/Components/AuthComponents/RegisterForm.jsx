import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addNewUser } from "../../Database/slice";
import styles from "../../styles.module.css";
import LoadingSimulator from "../LoadingSimulator";
import AuthFormHeader from "./AuthFormHeader";
import toast, { Toaster } from "react-hot-toast";

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPWD] = useState("");
  const [pwdConfirm, setPWDConfirm] = useState("");
  const [pwdErr, setPWDErr] = useState("");
  let errorMSGRef = useRef("");

  useEffect(() => {
    if (pwd !== "" && pwdConfirm !== "") {
      if (pwd !== pwdConfirm) {
        setPWDErr("Password do not match");
      } else {
        setPWDErr("Password match");
      }
    }
  }, [pwd, pwdConfirm]);

  

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    const rawDate = new Date().toDateString();
    const date = rawDate.toString().slice(0, 15);
    if (name && email && pwd) {
      dispatch(
        addNewUser({
          id: uuidv4(),
          name,
          email,
          pwd,
          date,
          isAuthenticated: true,
        })
      );
      if(errorMSGRef.current === 1){
        toast.error("Email already has an account.");
      } else {
        
        navigate("/");
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      errorMSGRef.current = "";
    }, 1000);
  }, [navigate]);

  const userState = useSelector((state) => state.user.userData);
  if (userState.isAuthenticated === true) {
    navigate("/");
  }
  if (Object.keys(userState).length === 1) {
    errorMSGRef.current = 1;
  }

  return (
    <>
      {isLoading && <LoadingSimulator />}
      {!isLoading && (
        <>
          <AuthFormHeader />
          <div className={styles.register_form_wrapper}>
            <form
              className={styles.register_form}
              onSubmit={(e) => handleRegister(e)}
            >
              <h2 className={styles.register_title}>Sign Up</h2>
              <label className={styles.register_label} htmlFor="name">
                Name:
              </label>{" "}
              <br />
              <input
                type="text"
                className={styles.register_input}
                name="name"
                value={name}
                required
                autoComplete="off"
                placeholder="name"
                onChange={(e) => setName(e.target.value)}
              />{" "}
              <br />
              <label className={styles.register_label} htmlFor="email">
                Email:
              </label>{" "}
              <br />
              <input
                type="email"
                className={styles.register_input}
                name="email"
                value={email}
                required
                autoComplete="off"
                placeholder="example@domain.com"
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <label className={styles.register_label} htmlFor="pwd">
                Password:
              </label>{" "}
              <br />
              <input
                type="password"
                className={styles.register_input}
                name="pwd"
                value={pwd}
                required
                autoComplete="off"
                placeholder="Password"
                onChange={(e) => setPWD(e.target.value)}
              />
              <br />
              <label className={styles.register_label} htmlFor="pwd1">
                Confirm Password:
              </label>{" "}
              <br />
              <input
                type="password"
                className={styles.register_input}
                name="pwd1"
                value={pwdConfirm}
                required
                autoComplete="off"
                placeholder="Confirm Password"
                onChange={(e) => setPWDConfirm(e.target.value)}
              />
              <br />
              <small
                className={
                  pwdErr === "Password match"
                    ? styles["form_password_matching"]
                    : styles["form_password_notMatching"]
                }
              >
                {pwdErr}
              </small>
              <br />
              <button type="submit" className={styles.register_button}>
                Register
              </button>
              <br />
              <small>
                <i>
                  Already have an existing account?{" "}
                  <Link to="/login">login</Link> here.
                </i>
              </small>
            </form>
          </div>
        </>
      )}
            <Toaster
        position="top-center"
        toastOptions={{ style: { fontSize: "1.4rem" } }}
      />

    </>
  );
};

export default RegisterForm;
