import React, {useState} from 'react';
import styles from './header.module.css';
import logo from './assets/logo.png'
import {Link} from "react-router";
import Socials from "../Socials/Socials.jsx";
import {FaTelegramPlane, FaVk, FaWhatsapp} from "react-icons/fa";
const Header = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className={styles.main}>
            <nav>
                <Link className={styles.link_head} to="/">Главная</Link>
                <Link className={styles.link_head} to="/o-kompanii">О компании</Link>
                <Link className={styles.link_head} to="/nashi-raboti">Наши работы</Link>
            </nav>
            <hr/>
            <div className={styles.main_nav}>
                <img src={logo} className={styles.logo}/>
                <nav>
                    <Link className={styles.link_nav} to="/catalog-proektov">Каталог проектов</Link>
                    <Link className={styles.link_nav} to="/nashi-raboti">Примеры работ</Link>
                    <Link className={styles.link_nav} to="/preimushestva">Преимущества</Link>
                    <Link className={styles.link_nav} to="/vidi-rabot">Виды работ</Link>
                    <Link className={styles.link_nav} to="/kontakti">Контакты</Link>
                </nav>
                <div className={styles.nomer_wrap}>
                    <a className={styles.nomer} href="tel:+79511111111">8(951)111-11-11</a>
                    <div className={styles.nomer_text}>заказать звонок</div>
                </div>
            </div>
            <div className={styles.socials_wrap}>
                <div className={styles.socials}>
                    <span className={styles.label}>Мы в соц. сетях</span>
                    <div className={styles.icons}>
                        <a
                            href="https://t.me/your_channel"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.icon} ${styles.telegram}`}
                        >
                            <FaTelegramPlane />
                        </a>
                        <a
                            href="https://wa.me/79999999999"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.icon} ${styles.whatsapp}`}
                        >
                            <FaWhatsapp />
                        </a>
                        <a
                            href="https://vk.com/your_page"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.icon} ${styles.vk}`}
                        >
                            <FaVk />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;