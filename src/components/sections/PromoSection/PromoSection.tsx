import styles from "./PromoSection.module.css";
import { useEffect, useState } from "react";

export default function PromoSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section className={styles.promoSection}>
      <div className={styles.contentContainer}>
        <div className={styles.backgroundRectangles}>
          <img
            src="/images/promo/rectangle.png"
            alt="Rectangle"
            className={styles.rectangleImage}
          />
          <img
            src="/images/promo/rectangle.png"
            alt="Rectangle"
            className={styles.rectangleImage}
          />
          <img
            src="/images/promo/rectangle.png"
            alt="Rectangle"
            className={styles.rectangleImage}
          />
          <img
            src="/images/promo/rectangle.png"
            alt="Rectangle"
            className={styles.rectangleImage}
          />
          <img
            src="/images/promo/rectangle.png"
            alt="Rectangle"
            className={styles.rectangleImage}
          />
          <img
            src="/images/promo/rectangle.png"
            alt="Rectangle"
            className={styles.rectangleImage}
          />
          <img
            src="/images/promo/rectangle.png"
            alt="Rectangle"
            className={styles.rectangleImage}
          />
          <img
            src="/images/promo/rectangle.png"
            alt="Rectangle"
            className={styles.rectangleImage}
          />
          <img
            src="/images/promo/rectangle.png"
            alt="Rectangle"
            className={styles.rectangleImage}
          />
          <img
            src="/images/promo/rectangle.png"
            alt="Rectangle"
            className={styles.rectangleImage}
          />
          <img
            src="/images/promo/rectangle.png"
            alt="Rectangle"
            className={styles.rectangleImage}
          />
          <img
            src="/images/promo/rectangle.png"
            alt="Rectangle"
            className={styles.rectangleImage}
          />
          <img
            src="/images/promo/rectangle.png"
            alt="Rectangle"
            className={styles.rectangleImage}
          />
          <img
            src="/images/promo/rectangle.png"
            alt="Rectangle"
            className={styles.rectangleImage}
          />
          <img
            src="/images/promo/rectangle.png"
            alt="Rectangle"
            className={styles.rectangleImage}
          />
        </div>
        <div className={styles.textLine}>
          <span className={styles.text}>Цифры не лгут</span>
        </div>

        <div className={styles.textLine}>
          <span className={styles.text}>мы поможем</span>
          <div className={styles.inlineImage}>
            <img
              src="/images/promo/white-pattern.png"
              alt="Pattern"
              className={styles.patternImage}
            />
          </div>
        </div>

        <div className={styles.textLine}>
          <div className={styles.inlineImage}>
            <img
              src="/images/promo/green-pattern.png"
              alt="Pattern"
              className={styles.patternImage}
            />
          </div>
          <span className={styles.text}>вашему бизнесу</span>
        </div>

        <div className={styles.textLine}>
          <span className={styles.textAccent}>развиваться!</span>
        </div>
      </div>
    </section>
  );
}
