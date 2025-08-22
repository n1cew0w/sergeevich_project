import styles from "./Projects.module.css";
import house from './House.png'
export default function Projects() {
    return (
        <div className={styles.container}>
            {/* Левая большая карточка */}
            <div
                className={`${styles.card} ${styles.largeCard}`}

            >
                <div className={styles.overlay}>
                    <h2>ДОМА ИЗ КИРПИЧА И ГАЗОБЕТОНА</h2>
                    <p className={styles.price}>от 75 000 р./м²</p>
                    <button className={styles.btn}>Смотреть проекты</button>
                </div>
            </div>

            {/* Правая колонка */}
            <div className={styles.rightCol}>
                <div
                    className={styles.card}
                >
                    <div className={styles.overlay}>
                        <h2>ДОМА ПО КАРКАСНОЙ ТЕХНОЛОГИИ</h2>
                        <p className={styles.price}>от 57 000 р./м²</p>
                        <button className={styles.btn}>Смотреть проекты</button>
                    </div>
                </div>

                <div
                    className={styles.card}

                >
                    <div className={styles.overlay}>
                        <h2>ВЫБЕРИТЕ ПРОЕКТ</h2>
                        <button className={styles.btn}>Смотреть все проекты</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
