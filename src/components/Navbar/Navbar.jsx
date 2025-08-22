import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const links = ["Главная", "О нас", "Услуги", "Контакты"];

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                {/* Логотип */}
                <div className={styles.logo}>Logo</div>

                {/* Десктоп-меню */}
                <ul className={styles.menu}>
                    {links.map((link) => (
                        <li key={link}>{link}</li>
                    ))}
                </ul>

                {/* Бургер */}
                <button
                    className={styles.burger}
                    onClick={() => setOpen(!open)}
                    aria-label="Меню"
                >
                    <span className={open ? styles.lineOpen : styles.line}></span>
                    <span className={open ? styles.lineOpen : styles.line}></span>
                    <span className={open ? styles.lineOpen : styles.line}></span>
                </button>
            </div>

            {/* Мобильное меню */}
            <ul className={`${styles.mobileMenu} ${open ? styles.show : ""}`}>
                {links.map((link) => (
                    <li key={link} onClick={() => setOpen(false)}>
                        {link}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
