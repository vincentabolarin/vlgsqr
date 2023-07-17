import Image from "next/image";
import Link from "next/link";

import styles from "./make-request.module.scss";

import servicesImage from "/public/services.webp";

const MakeRequest = () => {
  return (
    <>
      <div className={`${styles.container} container`}>
        <section className={styles.intro}>
          <div className={styles.left}>
            <h2 className={styles.pageTitle}>Make a Delivery Request</h2>
            <div>
              <form className={styles.requestForm}>
                <div className={styles.formItem}>
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" placeholder="John" />
                </div>

                <div className={styles.formItem}>
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" placeholder="Doe" />
                </div>

                <div className={styles.formItem}>
                  <label htmlFor="email">Email Address</label>
                  <input type="text" id="email" placeholder="example@example.com" />
                </div>

                <div className={styles.formItem}>
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input type="text" id="phoneNumber" placeholder="+2348000000000" />
                </div>

                <div className={styles.formItem}>
                  <label htmlFor="itemName">Item Name</label>
                  <input type="text" id="itemName" placeholder="Laptop" />
                </div>

                <div className={styles.formItem}>
                  <label htmlFor="itemDescription">Description of Item</label>
                  <input type="text" id="itemDescription" placeholder="MacBook Pro M1 2020" />
                </div>

                <div className={styles.formItem}>
                  <label htmlFor="itemWeight">Weight of Item</label>
                  <input type="text" id="itemWeight" placeholder="2kg" />
                </div>

                <div className={styles.formItem}>
                  <label htmlFor="itemLocation">
                    Item Location (City, Country)
                  </label>
                  <input type="text" id="itemLocation" placeholder="London, England" />
                </div>

                <div className={styles.formItem}>
                  <label htmlFor="itemSource">Item Source</label>
                  <select name="itemSource" id="itemSource" defaultValue="Select One">
                    <option value="Select One" disabled>Select One</option>
                    <option value="Online Store">Online Store</option>
                    <option value="Self Delivery">Self Delivery</option>
                  </select>
                </div>

                <div className={styles.formItem}>
                  <label htmlFor="storeName">Name of Store</label>
                  <input type="text" id="storeName" placeholder="Amazon UK" />
                </div>

                <div className={styles.formItem}>
                  <label htmlFor="deliveryAddress">
                    Delivery Address (City, Country)
                  </label>
                  <input type="text" id="deliveryAddress" placeholder="Lagos, Nigeria" />
                </div>

                <div className={styles.formItem}>
                  <label htmlFor="periodOfNeed">Period Of Need</label>
                  <input type="text" id="periodOfNeed" />
                </div>

                <button>Submit Request</button>
                <button className="button-reset">Reset</button>
              </form>
            </div>
          </div>

          <div className={styles.right}>
            <Image src={servicesImage} alt="" width={350} height={350} />
          </div>
        </section>
      </div>
    </>
  );
};

export default MakeRequest;
