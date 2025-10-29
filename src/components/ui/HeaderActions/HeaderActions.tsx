"use client";

import { useState } from "react";
import CTAButton from "../CTAButton/CTAButton";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import MobileMenu from "../MobileMenu/MobileMenu";
import styles from "./HeaderActions.module.css";

export default function HeaderActions() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className={styles.actions}>
        <CTAButton />
        <BurgerMenu isOpen={isMenuOpen} onToggle={toggleMenu} />
      </div>
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
}
