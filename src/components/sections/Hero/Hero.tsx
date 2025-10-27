import styles from './Hero.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.marqueeContainer}>
        <div className={styles.marquee}>
          {/* Дублируем контент для бесшовной анимации */}
          <div className={styles.marqueeContent}>
            <span className={styles.marqueeText}>Помогаем вашему бизнесу расти и развиваться</span>
            <div className={styles.marqueeDot}></div>
            <span className={styles.marqueeText}>Помогаем вашему бизнесу расти и развиваться</span>
            <div className={styles.marqueeDot}></div>
            <span className={styles.marqueeText}>Помогаем вашему бизнесу расти и развиваться</span>
            <div className={styles.marqueeDot}></div>
          </div>
          {/* Дублируем для бесшовности */}
          <div className={styles.marqueeContent}>
            <span className={styles.marqueeText}>Помогаем вашему бизнесу расти и развиваться</span>
            <div className={styles.marqueeDot}></div>
            <span className={styles.marqueeText}>Помогаем вашему бизнесу расти и развиваться</span>
            <div className={styles.marqueeDot}></div>
            <span className={styles.marqueeText}>Помогаем вашему бизнесу расти и развиваться</span>
            <div className={styles.marqueeDot}></div>
          </div>
        </div>
      </div>
    </section>
  );
}