import { useState, useRef } from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { useOutsideClick } from "../../hooks/useOutsideClick/useOutsideClick";

function NavBar() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeDropdown = () => {
    setIsDropdownVisible(false);
  };
  useOutsideClick(dropdownRef, closeDropdown);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles["nav-list"]}>
        <li className={styles["nav-item"]}>
          <Link to="/" className={styles["nav-link"]}>
            <img
              src="logo-white.png"
              alt="Logo"
              className={styles["nav-logo"]}
            />
          </Link>
        </li>
        <li className={styles["nav-item"]}>
          <button
            className={[
              styles["nav-btn"],
              isDropdownVisible ? styles["nav-btn--active"] : "",
            ].join(" ")}
            onClick={toggleDropdown}
          >
            Configuración
          </button>
          {isDropdownVisible && (
            <div
              ref={dropdownRef}
              onClick={toggleDropdown}
              className={styles["dropdown-menu"]}
            >
              <Link to="#" className={styles["dropdown-item"]}>
                Retos matemáticos
              </Link>
              <Link to="#" className={styles["dropdown-item"]}>
                Retos memoria
              </Link>
              <Link to="/phrases" className={styles["dropdown-item"]}>
                Frases motivacionales
              </Link>
            </div>
          )}
        </li>
        <li className={styles["nav-item"]}>
          <button className={styles["nav-btn"]}>Cambiar Contraseña</button>
        </li>
        <li className={styles["nav-item"]}>
          <button className={styles["nav-btn"]}>Informes</button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
