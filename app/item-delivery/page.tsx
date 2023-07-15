import Image from "next/image";
import Link from "next/link";

import styles from "./item-delivery.module.scss";

import servicesImage from "/public/services.webp";

const ItemDelivery = () => {
  return (
    <>
      <div className={`${styles.container} container`}>
        <section className={styles.intro}>
          <div className={styles.left}>
            <Image src={servicesImage} alt="" width={350} height={350} />
          </div>

          <div className={styles.right}>
            <h2>Welcome to the Item Delivery Square!</h2>
            <h2 className="font-48-500">
              Get Your Item Delivered. Help Deliver An Item.
            </h2>
            <p className={styles.introParagraph}>
              You are welcome to the Item Delivery Square. Here, you can get the
              services of a traveller to help deliver an item to Nigeria, or you
              can help to deliver an item yourself.
            </p>
            <div className={styles.buttons}>
              <Link href="/item-delivery/make-request">
                <button>Make Request</button>
              </Link>
              <Link href="/item-delivery/requests">
                <button className="button-secondary">View Requests</button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ItemDelivery;
