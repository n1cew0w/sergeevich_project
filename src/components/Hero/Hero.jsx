import React from 'react';
import styles from './Hero.module.css';
import Galochka from './assets/Galochka.png'
import { FaCalculator } from "react-icons/fa";
import Socials from "../Socials/Socials.jsx"; // иконка калькулятора
const Hero = () => {
    return (
        <div className={styles.hero}>
            <h1 className={styles.main_text}>
                Строительство домов в Челябинске и области
            </h1>
            <h2 className={styles.main_desc}>
                Живи в своём доме!
            </h2>
            <div className={styles.list_advantages}>
                <div className={styles.advantage}>
                    <img src={Galochka} className={styles.galochka} alt=""/>
                    <div className={styles.advantage_text}><span className={styles.advantage_textbold}>Цена не изменится</span> в процессе строителства</div>
                </div>
                <div className={styles.advantage}>
                    <img src={Galochka} className={styles.galochka} alt=""/>
                    <div className={styles.advantage_text}>Построим дом полностью <span className={styles.advantage_textbold}>под ключ за 120 дней</span></div>
                </div>
                <div className={styles.advantage}>
                    <img src={Galochka} className={styles.galochka} alt=""/>
                    <div className={styles.advantage_text}>Расширенная <span className={styles.advantage_textbold}>гарантия</span> от 5 лет
                        включена в договор</div>
                </div>
            </div>
            <div className={styles.wrapper}>
                <button className={`${styles.btn} ${styles.green}`}>
                    <FaCalculator className={styles.icon} />
                    <span className={styles.btn_text}>СТРОИТЕЛЬСТВО ДОМА<br/>ИЗ ГАЗОБЕТОНА</span>
                </button>

                <button className={`${styles.btn} ${styles.orange}`}>
                    <FaCalculator className={styles.icon} />
                    <span className={styles.btn_text}>РАССЧИТАТЬ СТОИМОСТЬ<br/>СТРОИТЕЛЬСТВА ДОМА</span>
                </button>
            </div>

        </div>
    );
};

export default Hero;