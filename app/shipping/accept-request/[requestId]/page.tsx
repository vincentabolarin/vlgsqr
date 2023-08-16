"use client";

import {
  TextField,
  Select,
  NativeSelect,
  InputAdornment,
  InputLabel,
  MenuItem,
} from "@mui/material";

import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ng from "dayjs/locale/ng";
import updateLocale from "dayjs/plugin/updateLocale";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
dayjs.locale("ng");

import Image from "next/image";

import { useState, useRef, useEffect } from "react";
import { useParams } from "next/navigation";

import { database } from "../../../../firebaseConfig";
import styles from "../accept-request.module.scss";
import servicesImage from "/public/services.webp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import SuccessModal from "@components/components/modals/successModal";

const AcceptRequest = () => {
  const route = useRouter();
  const params = useParams();

  const requestId = params.requestId;

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
  const travelDateRef: any = useRef();

  const openSuccessModal = () => {
    setOpenModal(true);
    const container: any = document.getElementById("container");
    container.style.overflow = "hidden";
  };

  const closeSuccessModal = () => {
    setOpenModal(false);
  };

  const goToCreateRequest = () => {
    route.replace("/shipping/make-request");
  }

  const goToRequests = () => {
    route.replace("/shipping/requests");
  };

  const submitHandler = async (e: any) => {
    e.preventDefault();

    const form = formRef.current;
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;
    const phoneNumber = phoneNumberRef.current.value;
    const travelDate = travelDateRef.current.value;

    const formIsValid = Boolean(
      firstName && lastName && email && phoneNumber && travelDate
    );

    try {
      if (formIsValid) {
        const acceptRequestRef = await addDoc(collection(database, "requests", requestId, "acceptances"), {
          timeStamp: serverTimestamp(),
          firstName: firstName,
          lastName: lastName,
          email: email,
          phoneNumber: phoneNumber,
          travelDate: travelDate
        })
        .then(() => {
          const acceptancesRef = addDoc(
            collection(database, "acceptances"),
            {
              timeStamp: serverTimestamp(),
              firstName: firstName,
              lastName: lastName,
              email: email,
              phoneNumber: phoneNumber,
              travelDate: travelDate
            }
          );
        })
        form.reset();
        toast.success(
          `You have successfully requested to ship this item.`
        );
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
            <h2 className={styles.pageTitle}>Accept Delivery Request</h2>
            <div>
              <form
                className={`${styles.requestForm} singleColumnForm`}
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
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      // renderInput={(props) => <TextField {...props} />}
                      label="Date of Travel"
                      inputRef={travelDateRef}
                      slotProps={{
                        textField: {
                          required: true,
                        },
                      }}
                      // value={value}
                      // onChange={(newValue) => {
                      //   setValue(newValue);
                      // }}
                    />
                  </LocalizationProvider>
                </div>

                <button type="submit">Accept Request</button>
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
          title="Request Accepted Successfully!"
          body="Your interest in shipping the item has been submitted successfully. You will be contacted if approved."
          buttonOneText="Submit A Request"
          buttonTwoText="View More Requests"
          buttonOneClick={goToCreateRequest}
          buttonTwoClick={goToRequests}
        />
      )}
    </>
  );
};

export default AcceptRequest;
