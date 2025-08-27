import styles from "./Advantages.module.css";
import house from './../Projects/House.png'
export default function Advantages() {
    const cardsData = [
        {
            title: "Более 10 лет опыта",
            text: "Реализовали более 75 объектов различной сложности",
            img: house,
        },
        {
            title: "Работаем полностью “под ключ”",
            text: "Полный спектр услуг - от замысла до воплощения в жизнь",
            img: house,
        },
        {
            title: "Поэтапная оплата",
            text: "Удобная модель оплаты, с возможностью контролировать каждый этап",
            img: house,
        },
        {
            title: "Фиксированная стоимость в смете",
            text: "Гарантируем цену в смете на 100%",
            img: house,
        },
        {
            title: "Гарантия на дома 10 лет",
            text: "Расширенная гарантия включена в договор",
            img: house,
        },
        {
            title: "Индивидуальные и готовые проекты",
            text: "Мы воплощаем уникальные задумки без лишних затрат",
            img: house,
        },
    ];
    return (
       <div className={styles.advantages}>
           <section className={styles.section}>
               <div className={styles.top}>
                   <h2>Доверьте нам постройку дома под ключ</h2>
                   <p>
                       Накопленный опыт позволяет нам строить одни из лучших домов в России
                   </p>
                   <span className={styles.year}>С 2014 года</span>
               </div>
               <div className={styles.container}>
                   {cardsData.map((card, index) => (
                       <div className={styles.card} key={index}>
                           <div className={styles.plus}>+</div>
                           <div className={styles.content}>
                               <h3>{card.title}</h3>
                               <p>{card.text}</p>
                           </div>
                           <img src={card.img} alt={card.title} className={styles.image} />
                       </div>
                   ))}
               </div>
           </section>
       </div>
    );
}
