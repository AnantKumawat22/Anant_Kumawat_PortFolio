import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faEnvelope,
  faFile,
  faFolder,
  faHome,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
  // Menu Bar Checked State
  const [isChecked, setIsChecked] = useState(false);
  

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  }
  return (
    <>
      <nav className={styles.navbar}>
        <input type="checkbox" className={styles.check} id="check" />
        <label htmlFor="check" onClick={handleCheckboxChange} className={styles.checkbtn}>
        {
          isChecked ? 
          <FontAwesomeIcon icon={faXmark} />
          : 
          <FontAwesomeIcon icon={faBars} />
        }
          
          
        </label>
        <Link className={styles.name_logo} href="/">
          PortFolio
        </Link>
        <ul>
          <li>
            <Link href="/">
              <FontAwesomeIcon icon={faHome} />
              <span> Home</span>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <FontAwesomeIcon icon={faFolder} />
              <span> Projects</span>
            </Link>
          </li>
          <li>
            <Link
              href={
                "https://drive.google.com/file/d/1zKQYL8Xlhuz2N627DJGsNuyF3RAXANud/view?usp=drive_link"
              }
              target="_blank"
            >
              <FontAwesomeIcon icon={faFile} />
              <span> Resume</span>
            </Link>
          </li>
          <li>
            <Link href="#contactme">
              <FontAwesomeIcon icon={faEnvelope} />
              <span> Contact Me</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
