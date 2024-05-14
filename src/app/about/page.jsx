import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.subTitle}>Grande testo</h2>
          <h1 className={styles.title}>Altro testo</h1>
          <p className={styles.desc}>description</p>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <h1>10 k+</h1>
              <p>Year of experience</p>
            </div>
            <div className={styles.box}>
              <h1>10 k+</h1>
              <p>Year of experience</p>
            </div>
            <div className={styles.box}>
              <h1>10 k+</h1>
              <p>Year of experience</p>
            </div>
          </div>
        </div>

        <div className={styles.imgContainer}>
          <Image
            src="/about.png"
            alt="About image"
            fill
            className={styles.img}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
