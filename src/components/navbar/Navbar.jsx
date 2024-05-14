import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <Link className={styles.logo} href={"/"}>
        Logo
      </Link>
      <div>
        <Links></Links>
      </div>
    </div>
  );
}

export default Navbar;
