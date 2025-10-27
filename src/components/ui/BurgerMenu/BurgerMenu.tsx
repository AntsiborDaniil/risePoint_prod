"use client";

import { useState } from "react";
import styles from "./BurgerMenu.module.css";

interface BurgerMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function BurgerMenu({ isOpen, onToggle }: BurgerMenuProps) {
  return (
    <button
      className={`${styles.burger} ${isOpen ? styles.open : ""}`}
      onClick={onToggle}
      aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
    >
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
    </button>
  );
}
