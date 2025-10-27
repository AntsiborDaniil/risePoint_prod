"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useModal } from "@/contexts/ModalContext";
import styles from "./MobileMenu.module.css";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { openModal } = useModal();

  const menuItems = [
    { id: "01", href: "#home", label: "Главная" },
    { id: "02", href: "#services", label: "Услуги" },
    { id: "03", href: "#about", label: "О нас" },
    { id: "04", href: "#portfolio", label: "Портфолио" },
    { id: "05", href: "#testimonials", label: "Отзывы" },
    { id: "06", href: "#contact", label: "Контакты" },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    onClose();

    setTimeout(() => {
      if (href === "#home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 300);
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
  };

  if (!isOpen) return null;

  return (
    <div className={`${styles.overlay} ${isOpen ? styles.open : ""}`}>
      <div className={styles.menu}>
        <div className={styles.leftPanel}>
          <div className={styles.logoContainer}>
            <Image src="/images/logo.png" alt="logo" width={122} height={123} />
          </div>

          <p className={styles.slogan}>
            Инвестиция в ваш сайт - инвестиция в прибыль
          </p>
        </div>

        {/* Right Panel - Light Blue */}

        <div className={styles.rightPanel}>
          {/* Top Section */}
          <div className={styles.topSection}>
            <span className={styles.navigationLabel}>Навигация</span>
            <div className={styles.topButtons}>
              <button className={styles.requestButton} onClick={openModal}>
                <Image
                  src="/images/plus.png"
                  alt="plus"
                  width={20}
                  height={20}
                />
                Оставить заявку
              </button>
              <button
                className={styles.closeButton}
                onClick={onClose}
                aria-label="Закрыть меню"
              >
                ✕
              </button>
            </div>
          </div>
          <div className={styles.centerContainer}>
            <nav className={styles.nav}>
              {menuItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={styles.menuLink}
                  onClick={(e) => handleNavClick(e, item.href)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className={styles.linkText}>{item.label}</span>
                  <span className={styles.linkNumber}>{item.id}</span>
                </a>
              ))}
            </nav>
            <div className={styles.contactInfo}>
              <div className={styles.contactInfoContainer}>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>Telegram</span>
                  <div className={styles.contactValue}>
                    <span>@mrtnvil</span>
                    <button
                      className={styles.copyButton}
                      onClick={() => copyToClipboard("@mrtnvil", "telegram")}
                      aria-label="Скопировать"
                    >
                      <Image
                        src="/images/burger/copy.png"
                        alt="copy"
                        width={24}
                        height={24}
                      />
                    </button>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>Phone</span>
                  <div className={styles.contactValue}>
                    <span>+7-914-878-58-57</span>
                    <button
                      className={styles.copyButton}
                      onClick={() => copyToClipboard("+79148785857", "phone")}
                      aria-label="Скопировать"
                    >
                      <Image
                        src="/images/burger/copy.png"
                        alt="copy"
                        width={24}
                        height={24}
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.socialIcons}>
                <a
                  href="https://wa.me/79148785857"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  aria-label="WhatsApp"
                >
                  <Image
                    src="/images/burger/whatsapp.png"
                    alt="WhatsApp"
                    width={48}
                    height={48}
                  />
                </a>
                <a
                  href="mailto:risepoint.agency@gmail.com"
                  className={styles.socialIcon}
                  aria-label="Email"
                >
                  <Image
                    src="/images/burger/gmail.png"
                    alt="Email"
                    width={48}
                    height={48}
                  />
                </a>
                <a
                  href="https://vk.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  aria-label="VK"
                >
                  <Image
                    src="/images/burger/ya.png"
                    alt="VK"
                    width={48}
                    height={48}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            <span>© RISEPOINT 2025. Все права защищены</span>
            <span className={styles.footerSeparator}>•</span>
            <a href="#" className={styles.footerLink}>
              Реквизиты
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
