import styles from "./card.module.scss";
import { TCard } from "../../types/TCard";

export const Card = ({ img, altImg, heading, description }: TCard) => {
  return (
    <article className={styles.card}>
      <img src={img} alt={altImg} />

      <h5>{heading}</h5>

      <span></span>

      <p>{description}</p>
    </article>
  );
};
