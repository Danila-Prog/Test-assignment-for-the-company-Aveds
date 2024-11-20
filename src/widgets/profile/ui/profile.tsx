import styles from "./profile.module.scss";
import { handleLogOut } from "../../../features/handleLogOut";

export const Profile = () => {
    
  const name = localStorage.getItem("name");

  return (
    <main className={styles.mainProfile}>

      <h1>Привет, {name}</h1>

      <div>

        <button className={styles.exitButton} onClick={handleLogOut}>
          Выйти из аккаунта
        </button>

        <button
          className={styles.goContactsButton}
          onClick={() => open("/contacts")}
        >
          Перейти в контакты
        </button>
      </div>
    </main>
  );
};
