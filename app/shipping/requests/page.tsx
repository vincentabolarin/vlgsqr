import NavBar from '@components/app/components/navBar';
import styles from './requests.module.scss';

const Requests = () => {
    return (
      <>
        <NavBar />
        <div className="container">
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.details}>
                <h2>Laptop</h2>
                <p>From: London, England</p>
                <p>To: Lagos, Nigeria</p>
                <p>Period of Need: 20th August 2023</p>
              </div>
              <div className={styles.button}>
                <button>I am interested</button>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.details}>
                <h2>Mobile Phone</h2>
                <p>From: Dakar, Senegal</p>
                <p>To: Ibadan, Nigeria</p>
                <p>Period of Need: 20th August 2023</p>
              </div>
              <div className={styles.button}>
                <button>I am interested</button>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.details}>
                <h2>Book</h2>
                <p>From: Kyiv, Ukraine</p>
                <p>To: Abuja, Nigeria</p>
                <p>Period of Need: 20th August 2023</p>
              </div>
              <div className={styles.button}>
                <button>I am interested</button>
              </div>
            </div>
            
            <div className={styles.card}>
              <div className={styles.details}>
                <h2>Laptop</h2>
                <p>From: Beijing, China</p>
                <p>To: Enugu, Nigeria</p>
                <p>Period of Need: 20th August 2023</p>
              </div>
              <div className={styles.button}>
                <button>I am interested</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
 
export default Requests;