"use client";

import styles from "./successModal.module.scss";

const SuccessModal = (props: any) => {
    return (
      <>
        <div className="modalBackdrop">
          <div className="modalContainer">
            <p className="title">{props.title}</p>
            <div className={styles.buttons}>
              <button>{props.buttonOneText}</button>
              <button className="button-secondary">{props.buttonTwoText}</button>
            </div>
          </div>
        </div>
      </>
    );
}
 
export default SuccessModal;