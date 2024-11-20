import styles from "./modal.module.scss";
import { TModal } from "../../types/TModal";

export const Modal = ({ isOpen, children }: TModal) => {
  return (
    <div
      className={styles.modal}
      style={{
        display: isOpen ? "block" : "none",
        opacity: isOpen ? 1 : 0,
        visibility: isOpen ? "visible" : "hidden",
      }}
    >
      <div className={styles.modalWrapper}>
        <div className={styles.modalContent}>{children}</div></div>
    </div>
  );
};
