"use client";

import { useModal } from "@/contexts/ModalContext";
import PortfolioGrid from "./PortfolioGrid";
import styles from "./Portfolio.module.css";

export default function Portfolio() {
  const { openModal } = useModal();

  return (
    <section className={styles.portfolio} id="portfolio">
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <div className={styles.sectionNumber}>03 — Наше портфолио</div>
          <p className={styles.description}>
            Наш дизайн, ориентированный на пользователя, повышает
            производительность и увеличивает доход вашего бизнеса.
          </p>
        </div>

        <div className={styles.rightColumn}>
          <h2 className={styles.mainHeading}>
            Мы не делаем шаблонных решений, мы создаем цифровое искусство.
          </h2>
          <button className={styles.ctaButton} onClick={openModal}>
            Запланировать встречу +
          </button>
        </div>
      </div>

      <PortfolioGrid />
    </section>
  );
}
