import { Link } from "react-router-dom";
import styles from "../css/Header.module.css";
function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <Link className={styles.logo} to={"/"}>
          RECENT COOL MOVIES
        </Link>
      </h1>
    </header>
  );
}

export default Header;
