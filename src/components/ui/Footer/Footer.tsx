"use client";

import styles from "./Footer.module.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.mainInfo}>
            <h3 className={styles.title}>RISEPOINT</h3>
            <p className={styles.description}>
              Создаем цифровые решения для вашего бизнеса
            </p>
          </div>

          <div className={styles.contact}>
            <a href="mailto:risepointagency@gmail.com" className={styles.email}>
              risepointagency@gmail.com
            </a>
            <a
              href="https://t.me/risepoint"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.telegram}
            >
              Telegram
            </a>
          </div>
        </div>

        <div className={styles.links}>
          <a href="/terms" className={styles.link}>
            Условия использования
          </a>
          <a href="/privacy" className={styles.link}>
            Политика конфиденциальности
          </a>
        </div>

        <div className={styles.bottom}>
          <span className={styles.copyright}>
            © 2025 RISEPOINT. Все права защищены
          </span>
          <button onClick={scrollToTop} className={styles.backToTop}>
            Наверх
          </button>
        </div>
      </div>
    </footer>
  );
}
