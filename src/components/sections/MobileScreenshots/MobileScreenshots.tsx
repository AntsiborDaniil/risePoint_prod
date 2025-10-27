"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import styles from "./MobileScreenshots.module.css";

interface Screenshot {
  id: number;
  src: string;
  alt: string;
}

// Данные для левой колонки (3 скриншота)
const leftScreenshots: Screenshot[] = [
  {
    id: 1,
    src: "/images/smartHome/first.png",
    alt: "First screen",
  },
  {
    id: 2,
    src: "/images/smartHome/second.png",
    alt: "Second screen",
  },
  {
    id: 3,
    src: "/images/smartHome/third.png",
    alt: "Third screen",
  },
  {
    id: 4,
    src: "/images/smartHome/forth.png",
    alt: "forth screen",
  },
  {
    id: 5,
    src: "/images/smartHome/fifth.png",
    alt: "fifth screen",
  },
  {
    id: 6,
    src: "/images/smartHome/sixth.png",
    alt: "sixth screen",
  },
];

// Данные для правой колонки (3 скриншота)
const rightScreenshots: Screenshot[] = [
  {
    id: 7,
    src: "/images/smartHome/seven.png",
    alt: "seven screen",
  },
  {
    id: 8,
    src: "/images/smartHome/eight.png",
    alt: "eight screen",
  },
  {
    id: 9,
    src: "/images/smartHome/nine.png",
    alt: "nine screen",
  },
  {
    id: 10,
    src: "/images/smartHome/ten.png",
    alt: "ten screen",
  },
  {
    id: 11,
    src: "/images/smartHome/eleven.png",
    alt: "eleven screen",
  },
  {
    id: 12,
    src: "/images/smartHome/twelve.png",
    alt: "twelve screen",
  },
];

export default function MobileScreenshots() {
  const [phonePosition, setPhonePosition] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !phoneRef.current) return;

      const container = containerRef.current;
      const phone = phoneRef.current;

      const containerRect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const phoneHeight = phone.offsetHeight;
      const windowHeight = window.innerHeight;

      // Вычисляем, когда компонент входит в область видимости
      const containerTop = containerRect.top;
      const containerBottom = containerRect.bottom;

      // Если компонент полностью выше экрана или полностью ниже экрана
      if (containerBottom < 0 || containerTop > windowHeight) {
        setPhonePosition(0);
        return;
      }

      // Вычисляем прогресс скролла в пределах компонента
      // Когда верх компонента касается верха экрана, прогресс = 0
      // Когда низ компонента касается низа экрана, прогресс = 1
      let scrollProgress = 0;

      if (containerTop <= 0 && containerBottom >= windowHeight) {
        // Компонент полностью покрывает экран
        scrollProgress =
          Math.abs(containerTop) / (containerHeight - windowHeight);
      } else if (containerTop > 0) {
        // Компонент еще не дошел до верха экрана
        scrollProgress = 0;
      } else if (containerBottom < windowHeight) {
        // Компонент уже прошел низ экрана
        scrollProgress = 1;
      }

      // Ограничиваем прогресс от 0 до 1
      scrollProgress = Math.max(0, Math.min(1, scrollProgress));

      // Вычисляем максимальное расстояние, которое может пройти телефон
      const maxMovement = containerHeight - phoneHeight;

      // Позиция телефона в пикселях
      const position = scrollProgress * maxMovement;

      setPhonePosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Вызываем сразу для начальной позиции

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section ref={containerRef} className={styles.container}>
      {/* Левая колонка */}
      <div className={styles.leftColumn}>
        <div className={styles.grid}>
          {leftScreenshots.map((screenshot) => (
            <div key={screenshot.id} className={styles.screenshotItem}>
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                width={365}
                height={770}
                className={styles.screenshot}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Центральная колонка с синхронно движущимся телефоном */}
      <div className={styles.centerColumn}>
        <div
          ref={phoneRef}
          className={styles.stickyPhone}
          style={{
            transform: `translateY(${phonePosition}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <Image
            src="/images/smartHome/center.png"
            alt="Hand holding smartphone with app interface"
            width={348}
            height={741}
            className={styles.phoneImage}
            loading="lazy"
          />
        </div>
      </div>

      {/* Правая колонка */}
      <div className={styles.rightColumn}>
        <div className={styles.grid}>
          {rightScreenshots.map((screenshot) => (
            <div key={screenshot.id} className={styles.screenshotItem}>
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                width={365}
                height={770}
                className={styles.screenshot}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
