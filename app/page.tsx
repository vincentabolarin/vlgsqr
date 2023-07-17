import Image from 'next/image';
import Link from 'next/link';

import styles from './page.module.scss';

import servicesImage from '/public/services.webp';
import NavBar from './components/navBar';

export default function Home() {
  return (
    <>
      <NavBar />
      <div className={`${styles.container} container`}>
        <section className={styles.intro}>
          <div className={styles.left}>
            <h2>Welcome to the Village Square!</h2>
            <h2 className="font-48-500">
              Get Service. Give Service. Connect Now.
            </h2>
            <p className={styles.introParagraph}>
              You are welcome to the Village Square, the go-to website for
              connecting service providers and those in need of services across
              various industries.
            </p>
            <Link href="/shipping">
              <button>Shipping</button>
            </Link>
          </div>

          <div className={styles.right}>
            <Image src={servicesImage} alt="" width={350} height={350} />
          </div>
        </section>
      </div>
    </>
  );
}
