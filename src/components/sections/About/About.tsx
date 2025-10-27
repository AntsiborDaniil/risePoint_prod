import styles from "./About.module.css";
import Image from "next/image";

interface StatItem {
    id: number;
    number: string;
    text: string;
    icon?: string;
    alt?: string;
}

const statsData: StatItem[] = [
    {
        id: 1,
        number: "+100",
        text: "Мы успешно реализовали в общей сложности более 100 проектов",
        icon: "/images/smart-device.png",
        alt: "Smart device",
    },
    {
        id: 2,
        number: "100K",
        text: "Мы собрали десятки отзывов от клиентов и более 100 тысяч отзывов от их <br /> пользователей.",
        icon: "/images/carve.png",
        alt: "Carve",
    },
    {
        id: 3,
        number: "+10",
        text: "Многолетний опыт",
        icon: "/images/community.png",
        alt: "Tennis ball",
    },
    {
        id: 4,
        number: "+50",
        text: "Членов команды",
        icon: "/images/plasma.png",
        alt: "Tennis ball",
    },
];

export default function AboutSection() {
    return (
        <section className={styles.about} id="about">
            <div className={styles.container}>
                {/* Блок 1: Заголовок */}
                <div className={styles.header}>
                    <h1 className={styles.prefix}>02 — О нас</h1>
                </div>

                {/* Блок 2: Основной заголовок и кнопка */}
                <div className={styles.hero}>
                    <h2 className={styles.heroTitle}>
                        Мы стремимся к инновациям
                    </h2>
                    <button className={styles.heroButton}>
                        Стать клиентом →
                    </button>
                </div>

                {/* Блок 4: Пустой div с бордером */}
                <div className={styles.borderBlock}></div>
                {/* Блок 3: Описание */}

                {/* Блок 5: Статистика и диаграмма */}
                <div className={styles.statsContainer}>
                    {/* Левая часть - статистика */}
                    <div className={styles.descContainer}>
                        <div className={styles.description}>
                            <p className={styles.descriptionText}>
                                Продуманная стратегия, соответствующая
                                потребностям бизнеса, и надежный анализ данных
                                являются основополагающими принципами нашей
                                работы.
                            </p>
                        </div>
                        <div className={styles.stats}>
                            <h3 className={styles.statsTitle}>
                                Некоторые цифры о нас
                            </h3>

                            <div className={styles.statsGrid}>
                                {statsData.map((stat) => (
                                    <div
                                        key={stat.id}
                                        className={styles.statItem}
                                    >
                                        <div className={styles.statContent}>
                                            <span className={styles.statNumber}>
                                                {stat.number}
                                            </span>
                                            <p
                                                className={styles.statText}
                                                dangerouslySetInnerHTML={{
                                                    __html: stat.text,
                                                }}
                                            />
                                        </div>
                                        {stat.icon && stat.alt && (
                                            <Image
                                                src={stat.icon}
                                                alt={stat.alt}
                                                width={150}
                                                height={150}
                                                className={styles.iconImage}
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Правая часть - диаграмма */}
                    <Image
                        src="/images/team-icon.png"
                        alt="Team"
                        width={625}
                        height={625}
                    />
                </div>
            </div>
        </section>
    );
}
