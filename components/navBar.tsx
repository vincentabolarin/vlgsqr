"use client";

import Link from 'next/link';
import styles from 'app/styles/navbar.module.scss';
import { Menu } from '@mui/icons-material';

const NavBar = () => {
  const toggleMenu = (e: any) => {
    e.preventDefault();
    const mobileMenuItems = document.getElementById(
      "mobileMenuItems"
    ) as HTMLElement;
    mobileMenuItems.classList.toggle(`${styles.active}`);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <p className={styles.logoText}>VILLAGE SQUARE</p>
          </Link>
        </div>

        <div className={styles.menu}>
          <Link href="/">Home</Link>
          <Link href="/">Services</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>

        <div className={styles.mobileMenu} onClick={toggleMenu}>
          <Menu sx={{ fontSize: "2rem" }} />
        </div>
      </div>

      <div
        className={`${styles.menu} ${styles.mobileMenuItems}`}
        id="mobileMenuItems"
      >
        <Link href="/">Home</Link>
        <Link href="/">Services</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
      </div>
    </>
  );
}
 
export default NavBar;