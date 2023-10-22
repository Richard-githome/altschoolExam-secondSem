import { Link } from "react-router-dom";
import { FiFilm } from "react-icons/fi";
import { FaAlignJustify, FaTimes } from "react-icons/fa";
import styles from "../styles.module.css";
import { useState } from "react";

const Navbar = () => {
  const [clicked, setClicked] = useState(false)
  // const navRef = useRef();
  const handleToggleOpen = () => {
    setClicked(true)
    // navRef.current = styles;
    // console.log(e)
    // console.log(navRef.current)
    // navRef.current.toggle("responsive_nav")
  };
  const handleToggleClose = ()=>{
    setClicked(false)
  }

  return (
    <div className={styles.navbar_wrapper}>
      <div className={styles.navIcon_container} onClick={handleToggleOpen}>
        <FiFilm size={"1.8rem"}/>
      </div>
      <nav className={clicked ? styles.navLink_container2 : styles.navLink_container}>
        <Link to="/" className={styles.navbar_items} onClick={handleToggleClose}>
          Home
        </Link>
        <Link to="movies" className={styles.navbar_items} onClick={handleToggleClose}>
          Movies
        </Link>
        <Link to="contact" className={styles.navbar_items} onClick={handleToggleClose}>
          Contact Us
        </Link>
        <Link to={"logout"} className={styles.navbar_items} onClick={handleToggleClose}>
          Logout
        </Link>
        <div className={styles.nav_btn_close} onClick={handleToggleClose}>
          <FaTimes size={"1.8rem"} />
        </div>
      </nav>
      <div className={styles.nav_btn_open} onClick={handleToggleOpen}>
        <FaAlignJustify size={"1.8rem"} />
      </div>
    </div>
  );
};

export default Navbar;
