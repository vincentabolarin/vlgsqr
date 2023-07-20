import Link from 'next/link';
import styles from 'app/styles/navbar.module.scss';

const NavBar = () => {
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
        </div>
      </>
    );
}
 
export default NavBar;