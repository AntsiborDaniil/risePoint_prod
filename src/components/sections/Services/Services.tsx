import styles from "./Services.module.css";
import Image from "next/image";

interface ServiceCard {
  id: number;
  title: string;
  description: string;
  features: string[];
  image: string;
  overlayText?: string[]; // Текст для наложения на изображение
}

const servicesData: ServiceCard[] = [
  {
    id: 1,
    title: "КОНСАЛТИНГ",
    description:
      "Многолетний опыт в стратегическом консалтинге позволяет нам анализировать бизнес-процессы и выстраивать эффективные системы управления, специализированные под задачи масштабирования и оптимизации затрат.",
    features: ["Ответственный", "Объективный", "Уровень"],
    image: "/images/consulting.png",
    overlayText: ["Аналитика", "Финансы", "Бизнес-процессы", "Прогнозирование"],
  },
  {
    id: 2,
    title: "ДИЗАЙН",
    description:
      "Мы руководствуемся принципом дизайна, ориентированного на пользователя, который способствуетповышению производительности и увеличению дохода. Наш опыт и изобретательность впечатляют, но мы всегда стремимся превзойти наши предыдущие достижения.",
    features: ["Ответственный", "Уровень", "Уровень"],
    image: "/images/design.png",
    overlayText: [
      "Figma",
      "Adobe AfterEffects",
      "Adobe Illustrator",
      "Blender",
    ],
  },
  {
    id: 3,
    title: "WEB РАЗРАБОТКА",
    description:
      "В основе нашей работы лежит принцип разработки, нацеленной на результат, который непосредственно влияет на ключевые метрики и укрепляет рыночные позиции. Наша экспертиза фундамент, а каждый проект новый шаг в развитии вашего бизнеса.",
    features: ["Ответственный", "Уровень", "Уровень"],
    image: "/images/web-dev.png",
    overlayText: ["ReactJS", "VueJS", "NodeJS", "WordPress", "Html"],
  },
];

export default function ServicesSection() {
  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        {/* Заголовок секции */}
        <div className={styles.header}>
          <h1 className={styles.prefix}>01 — Услуги</h1>
          <h1 className={styles.title}>
            Наша команда экспертов создает не просто очередные сайты в
            интернете, а инструменты для роста вашего бизнеса
          </h1>
        </div>

        {/* Карточки услуг */}
        <div className={styles.cards}>
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className={`${styles.card} ${
                service.title === "ДИЗАЙН" ? styles.designCard : ""
              }`}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={535}
                  height={530}
                  className={styles.realImage}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
                {service.overlayText && (
                  <div className={styles.imageOverlay}>
                    <h1 className={styles.cardTitle}>{service.title}</h1>
                    <div className={styles.cardDescription}>
                      {service.description}
                    </div>

                    <div className={styles.overlayContent}>
                      {service.overlayText.map((text, textIndex) => (
                        <div key={textIndex}>
                          <span className={styles.overlayText}>{text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
