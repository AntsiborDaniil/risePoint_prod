import React from "react";
import styles from "./PortfolioGrid.module.css";

const PortfolioGrid: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.portfolioGrid}>
        <div className={styles.gridItem}>
          <div className={styles.projectLink}>
            <div className={styles.imageContainer}>
              <img
                src="/images/portfolio/sport.png"
                alt="Galaxy Trading Limited"
                className={styles.projectImage}
              />
              <a href="https://fargalaxyhk.com/" className={styles.overlay}>
                <div className={styles.textContainer}>
                  <h1 className={styles.projectTitle}>
                    For Galaxy Trading Limited
                  </h1>
                  <p className={styles.projectDescription}>
                    Сайт-визитка, созданный для компании, которая занимается
                    поставками электроэнергии в Таиланд.
                  </p>
                </div>
                <img
                  src="/images/portfolio/arrowProtfolio.png"
                  alt="arrowIcon"
                  className={styles.arrowIcon}
                />{" "}
              </a>
            </div>
          </div>
        </div>

        <div className={styles.gridItem}>
          <div className={styles.projectLink}>
            <div className={styles.imageContainer}>
              <img
                src="/images/portfolio/sport.png"
                alt="АЗС приложение"
                className={styles.projectImage}
              />
              <a href="https://all-vps.com/" className={styles.overlay}>
                <div className={styles.textContainer}>
                  <h1 className={styles.projectTitle}>
                    АЗ удобный подбор выгодного пре
                  </h1>
                  <p className={styles.projectDescription}>
                    АЗС-Удобный подбор выгодного предложения для клиентов,
                    разработанный для крупной сети АЗС.
                  </p>
                </div>
                <img
                  src="/images/portfolio/arrowProtfolio.png"
                  alt="arrowIcon"
                  className={styles.arrowIcon}
                />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.gridItem}>
          <div className={styles.projectLink}>
            <div className={styles.imageContainer}>
              <img
                src="/images/portfolio/sport.png"
                alt="SkyHall"
                className={styles.projectImage}
              />
              <a href="https://skyhalldance.ru/" className={styles.overlay}>
                <div className={styles.textContainer}>
                  <h1 className={styles.projectTitle}>SkyHall</h1>
                  <p className={styles.projectDescription}>
                    SkyHall — это СМР для танцевальной школы SkyHall, созданный
                    для организации и проведения лекций.
                  </p>
                </div>
                <img
                  src="/images/portfolio/arrowProtfolio.png"
                  alt="arrowIcon"
                  className={styles.arrowIcon}
                />{" "}
              </a>
            </div>
          </div>
        </div>

        <div className={styles.gridItem}>
          <div className={styles.projectLink}>
            <div className={styles.imageContainer}>
              <img
                src="/images/portfolio/sport.png"
                alt="Ренова24"
                className={styles.projectImage}
              />
              <a
                href="https://mode24.framer.website/"
                className={styles.overlay}
              >
                <div className={styles.textContainer}>
                  <h1 className={styles.projectTitle}>Ренова24</h1>
                  <p className={styles.projectDescription}>
                    Ренова24 — это современный дизайн СРМ, разработанный для
                    крупной строительной организации, с грамотным учетом всех
                    атрибутов мероприятия.
                  </p>
                </div>
                <img
                  src="/images/portfolio/arrowProtfolio.png"
                  alt="arrowIcon"
                  className={styles.arrowIcon}
                />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.projectLink}>
        <div className={styles.imageContainer}>
          <img
            src="/images/portfolio/unikaAgency.png"
            alt="Ренова24"
            className={styles.projectImage}
          />
          <a href="https://unikaagency.tilda.ws/" className={styles.overlay}>
            <div className={styles.textContainer}>
              <h1 className={styles.projectTitle}>Unika Agency</h1>
              <p className={styles.projectDescription}>
                Unika Agency — это динамичное маркетинговое агентство полного
                цикла.
              </p>
            </div>
            <img
              src="/images/portfolio/arrowProtfolio.png"
              alt="Unika Agency"
              className={styles.arrowIcon}
            />{" "}
          </a>
        </div>
      </div>
      <div className={styles.projectLink}>
        <div className={styles.imageContainer}>
          <img
            src="/images/portfolio/terminal.png"
            alt="Unika Agency"
            className={styles.projectImage}
          />
          <a href="https://terminalvnukovo.ru/" className={styles.overlay}>
            <div className={styles.textContainer}>
              <h1 className={styles.projectTitle}>
                Terminal Foodhall - уютный фудкорт в Vnukovo Outlet
              </h1>
              <p className={styles.projectDescription}>
                Terminal Foohall — это сайт для премиального фудхолла, созданный
                для привлечения аудитории
              </p>
            </div>
            <img
              src="/images/portfolio/arrowProtfolio.png"
              alt="arrowIcon"
              className={styles.arrowIcon}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
