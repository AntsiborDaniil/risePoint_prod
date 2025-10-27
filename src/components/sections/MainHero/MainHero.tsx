"use client";

import Image from "next/image";
import styles from "./MainHero.module.css";

export default function MainHero() {
  return (
    <section className={styles.wrapper} id="home">
      <div className={styles.bg}>
        <Image
          src="/images/mainImage.png"
          alt="Фоновое изображение"
          fill
          priority
          className={styles.bgImage}
        />
      </div>

      <div className={styles.contentWrap}>
        <div className={styles.content}>
          <div className={styles.heroLines}>
            <h1 className={styles.line1}>ВАШ ЛУЧШИЙ</h1>
            <div className={styles.line2Row}>
              <button className={styles.circleBtn} aria-label="Прокрутить вниз">
                <img src="/images/downArrow.png" alt="arrow-down" />
              </button>
              <h2 className={styles.line2}>DIGITAL</h2>
            </div>
            <h2 className={styles.line3}>
              ПАРТНЕР<div className={styles.cursor}></div>
            </h2>
          </div>

          <div className={styles.meta}>
            <div className={styles.thinDivider} />
            <p className={styles.caption}>
              Мы знаем о современных технологиях все и даже больше
            </p>
          </div>
        </div>
        {/* <div className={styles.menuWrap}>
          <a href="#services" className={styles.menuLink}>
            Главная
          </a>
          <a href="#portfolio" className={styles.menuLink}>
            Услуги
          </a>
          <a href="#contact" className={styles.menuLink}>
            Портфолио
          </a>
          <a href="#contact" className={styles.menuLink}>
            Отзывы
          </a>

          <a href="#contact" className={styles.menuLink}>
            Контакты
          </a>
        </div> */}
      </div>
    </section>
  );
}
