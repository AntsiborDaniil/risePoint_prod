"use client";

import { useState, useEffect } from "react";
import styles from "./Testimonials.module.css";

interface Testimonial {
  id: number;
  text: string;
  author: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Выражаем благодарность веб студии RISEPOINT за разработку сайта для нашей компании по подбору строительного персонала. Все в срок.",
    author: "Вячеслав",
    company: "Владелец alphapodrad38",
  },
  {
    id: 2,
    text: "Отличная работа! Сайт получился именно таким, как мы хотели. Команда профессионалов своего дела.",
    author: "Анна",
    company: "Директор ООО 'Технологии'",
  },
  {
    id: 3,
    text: "Быстрая разработка, качественный результат. Рекомендую всем, кто ищет надежного партнера для создания сайта.",
    author: "Михаил",
    company: "Предприниматель",
  },
];

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const nextTestimonial = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setTimeout(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
      setTimeout(() => {
        setIsAnimating(false);
      }, 50);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextTestimonial();
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <section
      id="testimonials"
      data-section="testimonials"
      className={`${styles.testimonials} ${isVisible ? styles.visible : ""}`}
    >
      <div className={styles.container}>
        <div
          className={`${styles.header} ${isVisible ? styles.animateIn : ""}`}
        >
          <span className={styles.sectionNumber}>06 — Отзывы</span>
          <p className={styles.sectionDescription}>
            Мы обеспечиваем клиентов по всей России самыми передовыми веб
            решениями.
          </p>
        </div>

        <div className={styles.testimonialContainer}>
          <div
            className={`${styles.quoteIcon} ${
              isVisible ? styles.animateIn : ""
            }`}
          >
            &quot;
          </div>

          <div className={styles.testimonialContent}>
            <div className={styles.testimonialWrapper}>
              <blockquote
                className={`${styles.testimonialText} ${
                  isAnimating ? styles.slideOut : styles.slideIn
                }`}
              >
                {testimonials[currentTestimonial].text}
              </blockquote>
            </div>

            <div
              className={`${styles.authorInfo} ${
                isVisible ? styles.animateIn : ""
              }`}
            >
              <div className={styles.authorDetails}>
                <span
                  className={`${styles.authorName} ${
                    isAnimating ? styles.fadeOut : styles.fadeIn
                  }`}
                >
                  {testimonials[currentTestimonial].author}
                </span>
                <span
                  className={`${styles.authorCompany} ${
                    isAnimating ? styles.fadeOut : styles.fadeIn
                  }`}
                >
                  {testimonials[currentTestimonial].company}
                </span>
              </div>

              <div
                className={`${styles.progressIndicators} ${
                  isVisible ? styles.animateIn : ""
                }`}
              >
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    className={`${styles.indicator} ${
                      index === currentTestimonial ? styles.active : ""
                    }`}
                    onClick={() => {
                      if (!isAnimating && index !== currentTestimonial) {
                        setIsAnimating(true);
                        setTimeout(() => {
                          setCurrentTestimonial(index);
                          setTimeout(() => {
                            setIsAnimating(false);
                          }, 50);
                        }, 300);
                      }
                    }}
                  />
                ))}
              </div>
              <button
                className={`${styles.nextButton} ${
                  isVisible ? styles.animateIn : ""
                }`}
                onClick={nextTestimonial}
                disabled={isAnimating}
              >
                <span>Далее</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className={isAnimating ? styles.rotating : ""}
                >
                  <path
                    d="M6 12L10 8L6 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Индикаторы прогресса */}
      </div>
    </section>
  );
}
