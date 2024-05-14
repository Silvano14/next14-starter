import React from "react";
import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>silvadev</div>
      <p className={styles.text}>Silvano All Rights reserved</p>
    </div>
  );
}

export default Footer;
