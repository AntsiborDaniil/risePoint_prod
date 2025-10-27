"use client";

import { useState, useEffect } from "react";
import { useModal } from "@/contexts/ModalContext";
import styles from "./Modal.module.css";

export default function Modal() {
  const { isModalOpen, closeModal } = useModal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectDescription: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Блокируем скролл страницы при открытии модального окна
  useEffect(() => {
    if (!isModalOpen) return;

    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    // Обработка клавиши Escape
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = originalStyle;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isModalOpen, closeModal]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", formData);
      alert("Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.");
      closeModal();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Произошла ошибка при отправке заявки. Попробуйте еще раз.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isModalOpen) return null;

  return (
    <div className={styles.overlay}>
      {/* Левая часть - максимальный минимализм */}
      <div className={styles.blurredSection}>
        {/* Размытый серый фон */}
        <div className={styles.blurredBackground}></div>

        {/* Минималистичный контент */}
        <div className={styles.minimalContent}>
          <div className={styles.simpleText}>
            <h2 className={styles.minimalTitle}>Create</h2>
            <div className={styles.minimalLine}></div>
          </div>
        </div>
      </div>

      {/* Правая часть с формой */}
      <div className={styles.formSection}>
        <button className={styles.closeButton} onClick={closeModal}>
          ×
        </button>

        <div className={styles.formContent}>
          <h1 className={styles.modalTitle}>Опишите вашу проблему!</h1>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.upperPart}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Ваше имя & Название компании
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="Name"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Ваш email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="Email"
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="projectDescription" className={styles.label}>
                Опишите ваш проект
              </label>
              <textarea
                id="projectDescription"
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleInputChange}
                className={styles.textarea}
                placeholder="Your idea"
                rows={6}
                required
              />
            </div>

            <div className={styles.formFooter}>
              <div className={styles.emailInfo}>
                Наш email{" "}
                <a
                  href="mailto:risepoint.agency@gmail.com"
                  className={styles.emailLink}
                >
                  risepoint.agency@gmail.com
                </a>
              </div>

              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Отправляем..." : "Отправить"}
                <span className={styles.arrow}>→</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
