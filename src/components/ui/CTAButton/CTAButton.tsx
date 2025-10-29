"use client";

import { useModal } from "@/contexts/ModalContext";
import styles from "./CTAButton.module.css";

export default function CTAButton() {
  const { openModal } = useModal();

  return (
    <button className={styles.ctaButton} onClick={openModal}>
      <img src="/images/plus.png" alt="chat-icon" />
      Оставить заявку
    </button>
  );
}
