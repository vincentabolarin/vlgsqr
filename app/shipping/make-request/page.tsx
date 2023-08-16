"use client";

import { TextField, Select, NativeSelect, InputAdornment, InputLabel, MenuItem } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ng from "dayjs/locale/ng";
import updateLocale from "dayjs/plugin/updateLocale";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
dayjs.locale("ng");

import Image from "next/image";

import { useState, useRef, useEffect } from "react";

import { database } from "../../../firebaseConfig";
import styles from "./make-request.module.scss";
import servicesImage from "/public/services.webp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import SuccessModal from "@components/components/modals/successModal";

const MakeRequest = () => {
  
  const route = useRouter();

  const [storeName, setStoreName] = useState("");
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const container: any = document.getElementById("container");
    container.style.overflow = openModal ? "hidden" : "auto";
  }, [openModal]);

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

  const openSuccessModal = () => {
    setOpenModal(true);
    const container: any = document.getElementById("container");
    container.style.overflow = "hidden";
  }

  const closeSuccessModal = () => {
    setOpenModal(false);
  }

  const goToRequests = () => {
    route.replace("/shipping/requests")
  }

  const itemSourceHandler = (e: any) => {
    e.preventDefault();
    const itemSource = e.target.value;
    const storeName = document.getElementById("storeName");
    switch (itemSource) {
      case "Online Store":
        setStoreName("");
        storeName?.removeAttribute("disabled");
        break;
      case "Self Delivery":
        setStoreName("Self Delivery");
        storeName?.setAttribute("disabled", "");
        break;
      default:
        return;
    }
  }

  const storeNameHandler = (e: any) => {
    e.preventDefault();
    setStoreName(e.target.value);
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
      itemSource &&
      storeName &&
      deliveryAddress &&
      periodOfNeed
    );

    try {
      if (formIsValid) {
        const requestRef = await addDoc(collection(database, "requests"), {
          timeStamp: serverTimestamp(),
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
        form.reset();
        toast.success(`Request to ship ${itemName} from ${itemLocation} to ${deliveryAddress} submitted successfully.`);
        openSuccessModal();
      } else {
        toast.error("Please, ensure that all fields have been filled.");
      }
    } catch (e) {
      console.error("Error submitting request: ", e);
    }
  };

  return (
    <>
      <div className={`${styles.container} container`} id="container">
        <section className={styles.intro}>
          <div className={styles.left}>
            <h2 className={styles.pageTitle}>Make a Delivery Request</h2>
            <div>
              <form
                className={`${styles.requestForm} twoColumnForm`}
                ref={formRef}
                onSubmit={submitHandler}
              >
                <div className={styles.formItem}>
                  <TextField
                    id="firstName"
                    type="text"
                    inputRef={firstNameRef}
                    required
                    variant="outlined"
                    placeholder="John"
                    label="First Name"
                  />
                </div>

                <div className={styles.formItem}>
                  <TextField
                    id="lastName"
                    type="text"
                    inputRef={lastNameRef}
                    required
                    variant="outlined"
                    placeholder="Doe"
                    label="Last Name"
                  />
                </div>

                <div className={styles.formItem}>
                  <TextField
                    id="email"
                    type="text"
                    inputRef={emailRef}
                    required
                    variant="outlined"
                    placeholder="example@example.com"
                    label="Email Address"
                  />
                </div>

                <div className={styles.formItem}>
                  <TextField
                    id="phoneNumber"
                    type="text"
                    inputRef={phoneNumberRef}
                    required
                    variant="outlined"
                    placeholder="+2348000000000"
                    label="Phone Number"
                  />
                </div>

                <div className={styles.formItem}>
                  <TextField
                    id="itemName"
                    type="text"
                    inputRef={itemNameRef}
                    required
                    variant="outlined"
                    placeholder="Laptop"
                    label="Item Name"
                  />
                </div>

                <div className={styles.formItem}>
                  <TextField
                    id="itemDescription"
                    type="text"
                    inputRef={itemDescriptionRef}
                    required
                    variant="outlined"
                    placeholder="MacBook Pro M1 2020"
                    label="Item Description"
                  />
                </div>

                <div className={styles.formItem}>
                  <TextField
                    id="itemWeight"
                    type="text"
                    inputRef={itemWeightRef}
                    required
                    variant="outlined"
                    placeholder="4kg"
                    label="Item Weight"
                  />
                </div>

                <div className={styles.formItem}>
                  <TextField
                    id="itemLocation"
                    type="text"
                    inputRef={itemLocationRef}
                    required
                    variant="outlined"
                    placeholder="London, England"
                    label="Item Location (City, Country)"
                  />
                </div>

                <div className={styles.formItem}>
                  <TextField
                    select
                    name="itemSource"
                    id="itemSource"
                    inputRef={itemSourceRef}
                    required
                    variant="outlined"
                    label="Item Source"
                    defaultValue=""
                    onChange={(e) => itemSourceHandler(e)}
                  >
                    <MenuItem value="Online Store">Online Store</MenuItem>
                    <MenuItem value="Self Delivery">Self Delivery</MenuItem>
                  </TextField>
                </div>

                <div className={styles.formItem}>
                  <TextField
                    id="storeName"
                    type="text"
                    inputRef={storeNameRef}
                    value={storeName || ""}
                    required
                    // disabled
                    variant="outlined"
                    placeholder="Amazon UK"
                    label="Store Name"
                    onChange={(e) => storeNameHandler(e)}
                  />
                </div>

                <div className={styles.formItem}>
                  <TextField
                    id="deliveryAddress"
                    type="text"
                    inputRef={deliveryAddressRef}
                    required
                    variant="outlined"
                    placeholder="Lagos, Nigeria"
                    label="Delivery Address (City, Country)"
                  />
                </div>

                <div className={styles.formItem}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      // renderInput={(props) => <TextField {...props} />}
                      label="Latest Expected Delivery"
                      inputRef={periodOfNeedRef}
                      slotProps={{
                        textField: {
                          required: true,
                          id: "periodOfNeed"
                        },
                      }}
                      // value={value}
                      // onChange={(newValue) => {
                      //   setValue(newValue);
                      // }}
                    />
                  </LocalizationProvider>
                </div>

                <button type="submit" className="button-primary">Submit Request</button>
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
      {openModal && (
        <SuccessModal
          closeModal={closeSuccessModal}
          title="Request Submitted Successfully!"
          body="Your request has been submitted successfully. You will be connected to a transporter in a short while."
          buttonOneText="New Request"
          buttonTwoText="View Requests"
          buttonOneClick={closeSuccessModal}
          buttonTwoClick={goToRequests}
        />
      )}
    </>
  );
};

export default MakeRequest;
