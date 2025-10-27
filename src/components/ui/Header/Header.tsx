"use client";

import { useState } from "react";
import { useModal } from "@/contexts/ModalContext";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import MobileMenu from "../MobileMenu/MobileMenu";
import styles from "./Header.module.css";

export default function Header() {
  const { openModal } = useModal();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Навигационное меню - статичное */}
      <nav className={styles.staticNav}>
        <div className={styles.menuWrap}>
          <a href="#services" className={styles.menuLink}>
            О нас
          </a>
          <a href="#portfolio" className={styles.menuLink}>
            Портфолио
          </a>
          <a href="#testimonials" className={styles.menuLink}>
            Отзывы
          </a>
          <a href="#contact" className={styles.menuLink}>
            Контакты
          </a>
        </div>
      </nav>

      {/* Sticky Header с кнопкой и BurgerMenu */}
      <header className={styles.header}>
        <div className={styles.actions}>
          <button className={styles.ctaButton} onClick={openModal}>
            <img src="/images/plus.png" alt="chat-icon" />
            Оставить заявку
          </button>
          <BurgerMenu isOpen={isMenuOpen} onToggle={toggleMenu} />
        </div>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
}
