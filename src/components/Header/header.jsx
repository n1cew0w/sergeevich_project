import React from 'react';
import styles from './header.module.css';
import logo from './assets/logo.png'
import {Link} from "react-router";
const Header = () => {
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
            </div>
        </div>
    );
};

export default Header;