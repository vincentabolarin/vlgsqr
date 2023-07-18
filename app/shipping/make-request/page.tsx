"use client";

import Image from "next/image";

import { useRef } from "react";

import { database } from "../../../firebaseConfig";
import styles from "./make-request.module.scss";
import servicesImage from "/public/services.webp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { addDoc, collection } from "firebase/firestore";
import NavBar from "@components/app/components/navBar";

const MakeRequest = () => {
  const route = useRouter();

  const formRef: any = useRef();
  const firstNameRef: any = useRef();
  const lastNameRef: any = useRef();
  const emailRef: any = useRef();
  const phoneNumberRef: any = useRef();
  const itemNameRef: any = useRef();
  const itemDescriptionRef: any = useRef();
  const itemWeightRef: any = useRef();
  const itemLocationRef: any = useRef();
  const itemSourceRef: any = useRef();
  const storeNameRef: any = useRef();
  const deliveryAddressRef: any = useRef();
  const periodOfNeedRef: any = useRef();

  const itemSourceHandler = (e: any) => {
    e.preventDefault();
    const itemSource = e.target.value;
    const storeName = document.getElementById("storeName");
    switch (itemSource) {
      case "Online Store":
        storeName?.removeAttribute("disabled");
        storeNameRef.current.value = "";
        break;
      case "Self Delivery":
        storeName?.setAttribute("disabled", "");
        storeNameRef.current.value = "Self Delivery";
        break;
      default:
        return;
    }
  }

  const submitHandler = async (e: any) => {
    e.preventDefault();

    const form = formRef.current;
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;
    const phoneNumber = phoneNumberRef.current.value;
    const itemName = itemNameRef.current.value;
    const itemDescription = itemDescriptionRef.current.value;
    const itemWeight = itemWeightRef.current.value;
    const itemLocation = itemLocationRef.current.value;
    const itemSource = itemSourceRef.current.value;
    const storeName = storeNameRef.current.value;
    const deliveryAddress = deliveryAddressRef.current.value;
    const periodOfNeed = periodOfNeedRef.current.value;

    const formIsValid = Boolean(
      firstName &&
        lastName &&
        email &&
        phoneNumber &&
        itemName &&
        itemDescription &&
        itemWeight &&
        itemLocation &&
        itemSource != "Select One" &&
        storeName &&
        deliveryAddress &&
        periodOfNeed
    );

    try {
      if (formIsValid) {
        const requestRef = await addDoc(collection(database, "requests"), {
          requestDate: new Date(),
          firstName: firstName,
          lastName: lastName,
          email: email,
          phoneNumber: phoneNumber,
          itemName: itemName,
          itemDescription: itemDescription,
          itemWeight: itemWeight,
          itemLocation: itemLocation,
          itemSource: itemSource,
          storeName: storeName,
          deliveryAddress: deliveryAddress,
          periodOfNeed: periodOfNeed,
        });
        toast.success(`Request to ship ${itemName} from ${itemLocation} to ${deliveryAddress} submitted successfully.`);
        form.reset();
        route.push("/shipping/requests");
      } else {
        toast.error("Please, ensure that all fields have been filled.");
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <>
      <div className={`${styles.container} container`}>
        <section className={styles.intro}>
          <div className={styles.left}>
            <h2 className={styles.pageTitle}>Make a Delivery Request</h2>
            <div>
              <form
                className={styles.requestForm}
                ref={formRef}
                onSubmit={submitHandler}
              >
                <div className={styles.formItem}>
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="John"
                    ref={firstNameRef}
                    required
                  />
                </div>

                <div className={styles.formItem}>
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Doe"
                    ref={lastNameRef}
                    required
                  />
                </div>

                <div className={styles.formItem}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="text"
                    id="email"
                    placeholder="example@example.com"
                    ref={emailRef}
                    required
                  />
                </div>

                <div className={styles.formItem}>
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="text"
                    id="phoneNumber"
                    placeholder="+2348000000000"
                    ref={phoneNumberRef}
                    required
                  />
                </div>

                <div className={styles.formItem}>
                  <label htmlFor="itemName">Item Name</label>
                  <input
                    type="text"
                    id="itemName"
                    placeholder="Laptop"
                    ref={itemNameRef}
                    required
                  />
                </div>

                <div className={styles.formItem}>
                  <label htmlFor="itemDescription">Description of Item</label>
                  <input
                    type="text"
                    id="itemDescription"
                    placeholder="MacBook Pro M1 2020"
                    ref={itemDescriptionRef}
                    required
                  />
                </div>

                <div className={styles.formItem}>
                  <label htmlFor="itemWeight">Weight of Item</label>
                  <input
                    type="text"
                    id="itemWeight"
                    placeholder="2kg"
                    ref={itemWeightRef}
                    required
                  />
                </div>

                <div className={styles.formItem}>
                  <label htmlFor="itemLocation">
                    Item Location (City, Country)
                  </label>
                  <input
                    type="text"
                    id="itemLocation"
                    placeholder="London, England"
                    ref={itemLocationRef}
                    required
                  />
                </div>

                <div className={styles.formItem}>
                  <label htmlFor="itemSource">Item Source</label>
                  <select
                    name="itemSource"
                    id="itemSource"
                    defaultValue="Select One"
                    ref={itemSourceRef}
                    required
                    onChange={(e) => itemSourceHandler(e)}
                  >
                    <option value="Select One" disabled>
                      Select One
                    </option>
                    <option value="Online Store">Online Store</option>
                    <option value="Self Delivery">Self Delivery</option>
                  </select>
                </div>

                <div className={styles.formItem}>
                  <label htmlFor="storeName">Name of Store</label>
                  <input
                    type="text"
                    id="storeName"
                    placeholder="Amazon UK"
                    ref={storeNameRef}
                    required
                    disabled
                    defaultValue="Self Delivery"
                  />
                </div>

                <div className={styles.formItem}>
                  <label htmlFor="deliveryAddress">
                    Delivery Address (City, Country)
                  </label>
                  <input
                    type="text"
                    id="deliveryAddress"
                    placeholder="Lagos, Nigeria"
                    ref={deliveryAddressRef}
                    required
                  />
                </div>

                <div className={styles.formItem}>
                  <label htmlFor="periodOfNeed">Period Of Need</label>
                  <input
                    type="text"
                    id="periodOfNeed"
                    ref={periodOfNeedRef}
                    required
                  />
                </div>

                <button type="submit">Submit Request</button>
                <button type="reset" className="button-reset">
                  Reset
                </button>
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
