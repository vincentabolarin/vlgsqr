import Image from 'next/image';

import styles from './page.module.css'

import servicesImage from '../public/services.webp';

export default function Home() {
  return (
    <>
      <div className={`${styles.container} container`}>
        <section className={styles.intro}>
          <div className={styles.left}>
            <h2>Welcome to the Village Square!</h2>
            <h2 className="font-48-500">
              Get Service. Give Service. Connect Now.
            </h2>
            <p className={styles.introParagraph}>
              You are welcome to the Village Square, the go-to website for connecting
              service providers and those in need of services across various
              industries.
            </p>
            <button>Item Delivery</button>
          </div>

          <div className={styles.right}>
            <Image src={servicesImage} alt="" width={350} height={350} />
          </div>
        </section>
      </div>
    </>
  );
}
