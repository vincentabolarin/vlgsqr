"use client";

import styles from "./successModal.module.scss";

const SuccessModal = (props: any) => {
    return (
      <>
        <div className="modalBackdrop">
          <div className="modalContainer">
            <h2 className={styles.title}>{props.title}</h2>
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