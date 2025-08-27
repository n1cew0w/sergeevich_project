import React from 'react';
import house from "../Projects/House.png";
import styles from './Services.module.css'
import img from './assets/Vector.png'
import img1 from './assets/Vector-1.png'
import img2 from './assets/Vector-2.png'
import img3 from './assets/Vector-3.png'
import img4 from './assets/Vector-4.png'
import img5 from './assets/Vector-5.png'
import { FaCalculator } from "react-icons/fa";
const Services = () => {
    const cardsData = [
        {
            img: img ,
            title: "Строительство дома “под ключ”",
            text: "Воплотим вашу мечту в дом \"под ключ\" с учетом всех пожеланий и сроков.",

        },
        {
            img: img1 ,
            title: "Кровельные работы",
            text: "Доверьте нам свою крышу! Профессиональные кровельные работы\n" +
                "для вашего дома.",

        },
        {
            img: img2 ,
            title: "Септик и канализации",
            text: "Эффективные решения для септика и канализации. Безопасность\n" +
                "и надежность в каждом моменте.",

        },
        {
            img: img3 ,
            title: "Внутренняя отделка",
            text: "Превратим ваш дом в уютное гнездышко с помощью качественной\n" +
                "внутренней отделки.",

        },
        {
            img: img4 ,
            title: "Фасадные работы",
            text: "Подчеркнем красоту вашего дома с помощью профессиональных\n" +
                "фасадных работ.",

        },
        {
            img: img5 ,
            title: "Строительство фундамента",
            text: "Стабильность вашего дома начинается с качественного фундамента.\n" +
                "Доверьте его нам.",

        },
    ];

    return (
        <div className={styles.wrapper}>
            <p>У нас вы можете <span>заказать</span>:</p>
            <div className={styles.container}>
                {cardsData.map((card, index) => (
                    <div className={styles.card} key={index}>
                        <div className={styles.content}>
                            <img src={card.img} alt=""/>
                            <h3>{card.title}</h3>
                            <p>{card.text}</p>
                            <button>
                                <FaCalculator/>
                                Оставить заявку
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;