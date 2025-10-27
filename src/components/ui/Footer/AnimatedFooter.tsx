"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Footer.module.css";

export default function AnimatedFooter() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const footerRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Находим секцию отзывов
      const testimonialsElement = document.querySelector(
        '[data-section="testimonials"]'
      );
      if (testimonialsElement) {
        testimonialsRef.current = testimonialsElement as HTMLElement;
      }

      if (footerRef.current && testimonialsRef.current) {
        const footerRect = footerRef.current.getBoundingClientRect();
        const testimonialsRect =
          testimonialsRef.current.getBoundingClientRect();

        // Проверяем, когда футер начинает появляться из-за отзывов
        const isFooterEmerging =
          footerRect.top < window.innerHeight && footerRect.bottom > 0;
        setIsVisible(isFooterEmerging);
      }
    };

    // Используем requestAnimationFrame для плавности
    let ticking = false;
    const optimizedScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", optimizedScroll, { passive: true });
    handleScroll(); // Вызываем сразу для начального состояния

    return () => {
      window.removeEventListener("scroll", optimizedScroll);
    };
  }, []);

  // Вычисляем прогресс появления футера
  const getFooterProgress = () => {
    if (!testimonialsRef.current) return 0;

    const testimonialsRect = testimonialsRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // Когда футер начинает появляться (когда отзывы почти закончились)
    const startPoint = testimonialsRect.bottom - viewportHeight * 0.9;
    const endPoint = testimonialsRect.bottom - viewportHeight * 0.1;
    const currentPoint = window.scrollY;

    if (currentPoint < startPoint) return 0;
    if (currentPoint > endPoint) return 1;

    const progress = Math.min(
      1,
      (currentPoint - startPoint) / (endPoint - startPoint)
    );

    // Применяем более плавную easing функцию
    return progress < 0.5 
      ? 2 * progress * progress 
      : 1 - Math.pow(-2 * progress + 2, 3) / 2; // easeInOutCubic
  };

  const progress = getFooterProgress();
  const translateY = (1 - progress) * 100; // От 100% до 0% (более плавно)
  const scale = 0.8 + progress * 0.2; // От 0.8 до 1 (менее драматично)
  const opacity = Math.min(1, progress * 1.1); // Более плавное появление
  const rotateX = (1 - progress) * 10; // Меньший поворот для более естественного эффекта
  const borderRadius = progress * 24; // Закругленные углы появляются постепенно

  return (
    <footer
      ref={footerRef}
      className={`${styles.footer} ${isVisible ? styles.animated : ""}`}
      style={{
        transform: `translateY(${translateY}%) scale(${scale}) rotateX(${rotateX}deg)`,
        opacity: opacity,
        borderRadius: `${borderRadius}px`,
        transformOrigin: "bottom center",
        transformStyle: "preserve-3d",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
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
