import { useModal } from "../../../shared/ui/modal/useModal";
import { Link } from "react-router-dom";
import { ModalForm } from "../../modalForm";
import { ButtonLogin } from "../../../shared/ui/buttonLogin/buttonLogin";
import styles from "./header.module.scss";
import logo from "/logo.svg";

export const Header = () => {
  
  const { modal, setModal } = useModal();

  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo" />

      <div className={styles.clickInfo}>
        
        <Link to="/contacts" target="_blank" rel="noopener noreferrer">
          Контакты
        </Link>

        <ButtonLogin
          className={styles.buttonExited}
          setIsModal={() => setModal(true)}
        />

        <ModalForm isOpen={modal} setIsOpen={() => setModal(false)} />
      </div>
    </header>
  );
};
