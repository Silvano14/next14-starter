import Links from "./links/Links";
import styles from "./navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <div>Logo</div>
      <div>
        <Links></Links>
      </div>
    </div>
  );
}

export default Navbar;
