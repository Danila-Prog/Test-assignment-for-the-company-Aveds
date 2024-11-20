import styles from "./mainSection.module.scss";
import { useModal } from "../../../shared/ui/modal/useModal";
import { ModalForm } from "../../modalForm";
import { ButtonLogin } from "../../../shared/ui/buttonLogin/buttonLogin";
import { checkingEntry } from "../../../shared/utils/checkingEntry";

export const MainSection = () => {

  const { modal, setModal } = useModal();

  return (
    <main className={styles.main}>

      <h1>Место для получения медицинской помощи</h1>

      <div>

        <ButtonLogin className={styles.buttonEnter} setIsModal={() => setModal(true)}/>

        <button
          className={styles.buttonContacts}
          onClick={() => open("/contacts")}
        >
          Контакты
        </button>

        {!checkingEntry && (
          <ModalForm isOpen={modal} setIsOpen={() => setModal(false)} />
        )}
      </div>
    </main>
  );
};
