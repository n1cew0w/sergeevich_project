import styles from "./CameraBlock.module.css";
import camera from './vecteezy_close-up-of-security-camera_54402653.png'
export default function CameraBlock() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.imageWrapper}>
                <img
                    src={camera}
                    alt="Камера видеонаблюдения"
                    className={styles.image}
                />
            </div>
            <div className={styles.textWrapper}>
                <h2>
                    Будьте <span className={styles.orange}>спокойны</span> за ход{" "}
                    <span className={styles.orange}>строительства</span>
                </h2>
                <p>
                    Мы установим камеры видеонаблюдения, а также будем присылать
                    еженедельные фотоотчеты на удобный вам мессенджер. Ожидать звонка
                    от нас возможно только в случае крайней необходимости.
                </p>
            </div>
        </div>
    );
}
