import { Card } from "../../../shared/ui/card/card";
import { cardInfo } from "../model/cardInfo";
import styles from "./cardsContainer.module.scss";

export const CardsContainer = () => {
  return (
    <section className={styles.cardsContainer}>
      {cardInfo.map((el) => (
        <Card key={el.id} {...el}/>
      ))}
    </section>
  );
};
