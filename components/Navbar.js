import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCertificate,
  faFile,
  faFolder,
  faHome,
  faLaptop,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import AKLogo from '../public/assets/images/AKLogo.gif'

const Navbar = (props) => {

  // Router
  const router = useRouter();

  // UseRef
  const navbarRef = useRef();

  // Menu Bar Checked State
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  }

  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 50) {
        props.setBottomToTop(true);
      } else {
        props.setBottomToTop(false);
      }
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsChecked(false);
      }
    };

    if (window.innerWidth <= 768) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsChecked(false);
  }, [router.asPath]);


  return (
    <>
      <nav ref={navbarRef} className={styles.navbar}>
        <input type="checkbox" readOnly checked={isChecked} className={styles.check} id="check" />
        <label htmlFor="check" onClick={handleCheckboxChange} className={styles.checkbtn}>
        {
          isChecked ? 
          <FontAwesomeIcon icon={faXmark} />
          : 
          <FontAwesomeIcon icon={faBars} />
        }
          
          
        </label>
        <Link className={styles.name_logo} href="/">
          <Image src={AKLogo} alt='Logo' width={60} height={60} />
        </Link>
        <ul>
          <li>
            <Link href="/">
              <FontAwesomeIcon icon={faHome} />
              <span> Home</span>
            </Link>
          </li>
          <li>
            <Link href="/projectsection">
              <FontAwesomeIcon icon={faFolder} />
              <span> Projects</span>
            </Link>
          </li>
          <li>
            <Link href="/codingdsa">
              <FontAwesomeIcon icon={faLaptop} />
              <span> Coding DSA</span>
            </Link>
          </li>
          <li>
            <Link href="/coursesandcertificates">
              <FontAwesomeIcon icon={faCertificate} />
              <span> Courses & Certificate</span>
            </Link>
          </li>
          <li>
            <Link
              href={
                "https://drive.google.com/file/d/1fa5qPObuaMIi3LdodReysdhO6dVFscdr/view?usp=sharing"
              }
              target="_blank"
            >
              <FontAwesomeIcon icon={faFile} />
              <span> Resume</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
