
import { useState, useRef } from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  const [showCopied, setShowCopied] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const email = "risepoint.agency@gmail.com";

  const scrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleEmailClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(email);
      
      // Очищаем предыдущий таймер, если он есть
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      // Показываем уведомление
      setShowCopied(true);
      
      // Устанавливаем новый таймер
      timeoutRef.current = setTimeout(() => {
        setShowCopied(false);
        timeoutRef.current = null;
      }, 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
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
            <a 
              href={`mailto:${email}`} 
              className={styles.email}
              onClick={handleEmailClick}
            >
              {email}
            </a>
            <a
              href="https://t.me/mrtnvil"
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
      {showCopied && (
        <div className={styles.copiedNotification}>Скопировано!</div>
      )}
    </footer>
  );
}
