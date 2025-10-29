"use client";

import HeaderActions from "../HeaderActions/HeaderActions";
import styles from "./Header.module.css";

export default function Header() {
  const handleNavClick = (href: string) => {
    setTimeout(() => {
      if (href === "#home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 100);
  };

  return (
    <header>
      <nav className={styles.staticNav}>
        <div className={styles.menuWrap}>
          <button
            className={styles.menuLink}
            onClick={() => handleNavClick("#services")}
          >
            Услуги
          </button>
          <button
            className={styles.menuLink}
            onClick={() => handleNavClick("#about")}
          >
            О нас
          </button>
          <button
            className={styles.menuLink}
            onClick={() => handleNavClick("#portfolio")}
          >
            Портфолио
          </button>
          <button
            className={styles.menuLink}
            onClick={() => handleNavClick("#testimonials")}
          >
            Отзывы
          </button>
          <button
            className={styles.menuLink}
            onClick={() => handleNavClick("#contact")}
          >
            Контакты
          </button>
        </div>
      </nav>

      {/* Sticky Header с HeaderActions */}
      <div className={styles.header}>
        <HeaderActions />
      </div>
    </header>
  );
}
