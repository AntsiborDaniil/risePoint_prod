import React, { useEffect, useRef, useState } from "react";
import styles from "./PortfolioGrid.module.css";

const PortfolioGrid: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setActiveItem(null);
      return;
    }

    const findClosestToCenter = () => {
      const windowCenter = window.innerHeight / 2;
      let closestIndex: number | null = null;
      let minDistance = Infinity;

      itemRefs.current.forEach((item, index) => {
        if (!item) return;

        const rect = item.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const distance = Math.abs(itemCenter - windowCenter);

        // Проверяем, что элемент виден на экране
        if (
          rect.top < window.innerHeight &&
          rect.bottom > 0 &&
          distance < minDistance
        ) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      return closestIndex;
    };

    const handleScroll = () => {
      const closest = findClosestToCenter();
      setActiveItem(closest);
    };

    handleScroll(); // Проверяем сразу
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isMobile]);

  return (
    <section className={styles.container}>
      <div className={styles.portfolioGrid}>
        <div
          ref={(el) => {
            itemRefs.current[0] = el;
          }}
          className={`${styles.gridItem} ${isMobile && activeItem === 0 ? styles.descriptionVisible : ""}`}
          data-color="#4A90E2"
        >
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

        <div
          ref={(el) => {
            itemRefs.current[1] = el;
          }}
          className={`${styles.gridItem} ${isMobile && activeItem === 1 ? styles.descriptionVisible : ""}`}
          data-color="#E94B3C"
        >
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
                    АЗС
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

        <div
          ref={(el) => {
            itemRefs.current[2] = el;
          }}
          className={`${styles.gridItem} ${isMobile && activeItem === 2 ? styles.descriptionVisible : ""}`}
          data-color="#9B59B6"
        >
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
                />
              </a>
            </div>
          </div>
        </div>

        <div
          ref={(el) => {
            itemRefs.current[3] = el;
          }}
          className={`${styles.gridItem} ${isMobile && activeItem === 3 ? styles.descriptionVisible : ""}`}
          data-color="#F39C12"
        >
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
                    Ренова24 — это современный дизайн СРМ, разработанный <br />для крупной строительной организации, с грамотным учетом всех
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

        <div
          ref={(el) => {
            itemRefs.current[4] = el;
          }}
          className={`${styles.gridItem} ${isMobile && activeItem === 4 ? styles.descriptionVisible : ""}`}
          data-color="#1ABC9C"
        >
          <div className={styles.projectLink}>
            <div className={styles.imageContainer}>
              <img
                src="/images/portfolio/unikaAgency.png"
                alt="Unika Agency"
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
        </div>

        <div
          ref={(el) => {
            itemRefs.current[5] = el;
          }}
          className={`${styles.gridItem} ${isMobile && activeItem === 5 ? styles.descriptionVisible : ""}`}
          data-color="#E67E22"
        >
          <div className={styles.projectLink}>
            <div className={styles.imageContainer}>
              <img
                src="/images/portfolio/terminal.png"
                alt="Terminal Foodhall"
                className={styles.projectImage}
              />
              <a href="https://terminalvnukovo.ru/" className={styles.overlay}>
                <div className={styles.textContainer}>
                  <h1 className={styles.projectTitle}>
                    Terminal Foodhall
                  </h1>
                  <p className={styles.projectDescription}>
                    Terminal Foohall — это сайт для премиального фудхолла, <br />созданный для привлечения аудитории
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
      </div>
    </section>
  );
};

export default PortfolioGrid;
