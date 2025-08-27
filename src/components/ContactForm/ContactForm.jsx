import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './ContactForm.module.css'
const ContactForm = () => (
    <div className={styles.wrapper}>
        <h1>Хотите заказать строительство дома?</h1>
        <h2>Проконсультируйтесь со специалистом</h2>
        <form className={styles.form}>
            <div className={styles.form_flex}>
                <input className={styles.name} name="name" placeholder="Ваше имя" />
                <input className={styles.phone} name="phone" placeholder="Ваш телефон*"/>
            </div>
            <input className={styles.message} name="message" placeholder="Комментарий"/>
            <p>Используя эту форму Вы выражаете согласие на условия передачи информации и обработку ваших персональных данных.</p>
            <input className={styles.frm_btn} name="" type="submit" />
        </form>
    </div>
);

export default ContactForm;