import React from "react";
import styles from "./AbsoluteSection.module.css";

export default function AbsoluteSection() {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className={styles.absoluteSection}>
      <img
        className={styles.mac}
        src="/images/absoluteSection/Mac.png"
        alt="Mac"
      />
      <img
        className={styles.line}
        src="/images/absoluteSection/Line.png"
        alt="Line"
      />
      <div className={styles.upperContainer}>
        <h1 className={styles.webText}>WEB РАЗРАБОТКА</h1>
        <div className={styles.stars}>**</div>
      </div>
      <div className={styles.centerLineText}>
        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeText}>
            <h1>
              Ориентированная на пользователя и основанная на данных вашего
              бизнеса ценность
            </h1>
          </div>
          <div className={styles.marqueeText}>
            <h1>
              Ориентированная на пользователя и основанная на данных вашего
              бизнеса ценность
            </h1>
          </div>
        </div>
      </div>
      <div className={styles.lowerContainer}>
        <h1 className={styles.textBlock}>
          Сделать ваш бизнес выдающимся — это целая наука. Мы подходим к этому
          серьезно и креативно.
        </h1>
        <div className={styles.buttons}>
          <button className={styles.firstButton} onClick={scrollToPortfolio}>
            Посмотреть наше портфолио
          </button>
          <button className={styles.secondButton} onClick={scrollToContact}>
            Свяжитесь с нами
          </button>
        </div>
      </div>
    </section>
  );
}
