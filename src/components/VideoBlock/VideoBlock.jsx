import styles from "./VideoBlock.module.css";
import { FaPlay } from "react-icons/fa";
import { FaVk } from "react-icons/fa";
import ravshan from './ravshan.jpg'

export default function VideoBlock() {
    return (
        <div className={styles.wrapper}>
            {/* Видео превью */}
            <div className={styles.videoWrapper}>
                <img
                    src={ravshan} // сюда подставь свою картинку-превью
                    alt="Видео стройки"
                    className={styles.preview}
                />
                <button className={styles.playButton}>
                    <FaPlay />
                </button>
            </div>

            {/* Текстовый блок */}
            <div className={styles.content}>
                <h2 className={styles.title}>
                    <span className={styles.orange}>Посмотрите как мы строим</span>
                    <br />
                    <span className={styles.desc}>Видео отчеты о строительстве для наших клиентов!</span>
                </h2>
                <p className={styles.text}>
                    Мы установим камеры видеонаблюдения, а также будем присылать еженедельные фотоотчеты на удобный вам мессенджер.
                    Ожидать звонка от нас возможно только в случае крайней необходимости.
                </p>

                <div className={styles.linkWrapper}>
                    <span>Смотрите все видео на</span>
                    <a
                        href="https://vk.com/video"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.vkLink}
                    >
                        <FaVk /> VK Видео
                    </a>
                </div>
            </div>
        </div>
    );
}
