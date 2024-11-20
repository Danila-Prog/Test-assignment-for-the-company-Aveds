import { MainSection } from "../../../widgets/mainSection";
import { CardsContainer } from "../../../widgets/cardsContainer";
import styles from "./mainPage.module.scss";
export const MainPage = () => {
  return (
    <main className={styles.mainPage}>
      <MainSection />
      <CardsContainer />
    </main>
  );
};
