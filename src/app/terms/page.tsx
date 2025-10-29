import styles from "./page.module.css";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <Link href="/" className={styles.backButton}>
            ← Назад
          </Link>
          <h1 className={styles.title}>Условия использования</h1>
        </div>
        <p className={styles.lastUpdated}>
          Последнее обновление: 1 января 2025 г.
        </p>

        <section className={styles.section}>
          <h2>1. Принятие условий</h2>
          <p>
            Используя веб-сайт RISEPOINT и наши услуги, вы соглашаетесь с
            данными условиями использования. Если вы не согласны с какими-либо
            условиями, пожалуйста, не используйте наш сайт.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Описание услуг</h2>
          <p>
            RISEPOINT предоставляет услуги по разработке веб-сайтов, мобильных
            приложений, дизайну и цифровому маркетингу. Мы оставляем за собой
            право изменять, приостанавливать или прекращать любые аспекты наших
            услуг в любое время.
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. Интеллектуальная собственность</h2>
          <p>
            Все материалы на этом сайте, включая тексты, графику, логотипы,
            изображения и программное обеспечение, являются собственностью
            RISEPOINT или наших лицензиаров и защищены законами об авторском
            праве.
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. Ограничение ответственности</h2>
          <p>
            RISEPOINT не несет ответственности за любые прямые, косвенные,
            случайные или последующие убытки, возникающие в результате
            использования или невозможности использования наших услуг.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Изменения условий</h2>
          <p>
            Мы оставляем за собой право изменять эти условия в любое время.
            Изменения вступают в силу немедленно после их публикации на сайте.
            Продолжение использования услуг после изменений означает ваше
            согласие с новыми условиями.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Контактная информация</h2>
          <p>
            Если у вас есть вопросы по поводу этих условий использования,
            свяжитесь с нами:
          </p>
          <ul>
            <li>Email: risepointagency@gmail.com</li>
            <li>Telegram: @risepoint</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
