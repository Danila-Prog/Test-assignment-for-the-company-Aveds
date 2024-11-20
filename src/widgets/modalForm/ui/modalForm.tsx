import { useModalForm } from "../model/useModalForm";
import { Modal } from "../../../shared/ui/modal/modal";
import styles from "./modalForm.module.scss";
import cross from "/cross.svg";
import { TModalForm } from "../model/TModalForm";

export const ModalForm = ({ isOpen, setIsOpen }: TModalForm) => {
  const {
    register,
    handleSubmit,
    submit,
    loginError,
    inputStyle,
    handleInputChange,
    errorPassword,
    errorLogin,
    useModalEscapeKey
  } = useModalForm();

  useModalEscapeKey(isOpen, setIsOpen);

  return (
    <Modal isOpen={isOpen}>
      <form className={styles.modalForm} onSubmit={handleSubmit(submit)}>

        <button type="button" className={styles.buttonCross} onClick={setIsOpen}>
          <img src={cross} alt="Close" />
        </button>

        <h3>Войдите в систему</h3>

        <label>
          <span>Логин</span>
          <input
            type="text"
            style={inputStyle}
            {...register("login", {
              required: "Логин обязателен",
              minLength: { value: 4, message: "Логин должен быть не менее 4 символов" },
              maxLength: { value: 20, message: "Логин должен быть не более 20 символов" },
              onChange: handleInputChange,
            })}
          />
          {errorLogin && <p>{errorLogin}</p>}
        </label>

        <label>
          <span>Пароль</span>
          <input
            type="password"
            style={inputStyle}
            {...register("password", {
              required: "Пароль обязателен",
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                message: "Не правильный пароль",
              },
              onChange: handleInputChange,
            })}
          />
          <p>{loginError || errorPassword}</p>
        </label>

        <button className={styles.buttonExite}>Войти</button>
      </form>
    </Modal>
  );
};