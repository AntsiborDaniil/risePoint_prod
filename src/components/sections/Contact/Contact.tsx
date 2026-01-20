import styles from "./Contact.module.css";
import { useModal } from "@/contexts/ModalContext";

interface ContactMethod {
  id: number;
  icon: string;
  text: string;
  link: string;
}

const contactMethods: ContactMethod[] = [
  {
    id: 1,
    icon: "phone",
    text: "+7 (914)878-58-57",
    link: "tel:+79148785857",
  },
  {
    id: 2,
    icon: "telegram",
    text: "@mrtnvil",
    link: "https://t.me/mrtnvil",
  },
  {
    id: 3,
    icon: "email",
    text: "risepoint.agency@gmail.com",
    link: "mailto:risepoint.agency@gmail.com",
  },
  {
    id: 4,
    icon: "whatsapp",
    text: "+7 (914)878-58-57",
    link: "https://wa.me/79148785857",
  },
];

export default function ContactSection() {
  const { openModal } = useModal();

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.background}>
        <div className={styles.circles}>
          <img
            src="/images/contact-circles.png"
            alt="Circle"
            className={styles.circlesImage}
          />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.textSection}>
          <h2 className={styles.prefix}>Контакты</h2>
          <h1 className={styles.title}>
            Свяжитесь с нами любым удобным способом.
          </h1>
          <p className={styles.description}>
            Мы всегда рады ответить на ваши вопросы и обсудить проект.
          </p>
        </div>

        <div className={styles.contactsSection}>
          <div className={styles.contactGrid}>
            {contactMethods.map((method) => (
              <a
                key={method.id}
                href={method.link}
                className={styles.contactItem}
                target={
                  method.icon === "telegram" || method.icon === "whatsapp"
                    ? "_blank"
                    : undefined
                }
                rel={
                  method.icon === "telegram" || method.icon === "whatsapp"
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                <div className={styles.icon}>
                  {method.icon === "phone" && (
                    <img
                      src="/images/phone-icon.png"
                      alt="Phone"
                      className={styles.iconImage}
                    />
                  )}
                  {method.icon === "telegram" && (
                    <img
                      src="/images/telegram-icon.png"
                      alt="Telegram"
                      className={styles.iconImage}
                    />
                  )}
                  {method.icon === "email" && (
                    <img
                      src="/images/email-icon.png"
                      alt="Email"
                      className={styles.iconImage}
                    />
                  )}
                  {method.icon === "whatsapp" && (
                    <img
                      src="/images/whatsapp-icon.png"
                      alt="Whatsapp"
                      className={styles.iconImage}
                    />
                  )}
                </div>
                <span className={styles.contactText}>{method.text}</span>
              </a>
            ))}
          </div>

          <div className={styles.workingHours}>
            <h3 className={styles.hoursTitle}>
              Режим работы
              <br />
              Пн-Пт: 9:00-20:00
              <br />
              Сб-Вс: выходные
            </h3>
            <button className={styles.clientButton} onClick={openModal}>
              Стать клиентом +
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
