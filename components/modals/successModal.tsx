"use client";

import Link from "next/link";
import styles from "./successModal.module.scss";
import {Home, Close, CheckCircle} from "@mui/icons-material";

const SuccessModal = (props: any) => {
    return (
      <>
        <div className="modalBackdrop">
          <div className="modalContainer">
            <div className="header">
              <div className="home">
                <Link href="/">
                  <Home sx={{ color: "var(--primary-color)", fontSize: 30 }} />
                </Link>
              </div>
              <div className="close" onClick={props.closeModal}>
                <Close sx={{ color: "var(--red-1)", fontSize: 30 }} />
              </div>
            </div>
            <div className="icon">
              <CheckCircle sx={{ color: "var(--success)", fontSize: 100 }} />
            </div>
            <p className="title">{props.title}</p>
            <p className="body">{props.body}</p>
            <div className={`buttons ${styles.buttons}`}>
              <button onClick={props.buttonOneClick}>
                {props.buttonOneText}
              </button>
              <button
                className="button-secondary"
                onClick={props.buttonTwoClick}
              >
                {props.buttonTwoText}
              </button>
            </div>
          </div>
        </div>
      </>
    );
}
 
export default SuccessModal;