import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.widget}>
        <h2 className={styles.widgetTitle}>ABOUT ME</h2>
        <img src="https://raw.githubusercontent.com/kevin-powell/reponsive-web-design-bootcamp/master/Module%202-%20A%20simple%20life/img/about-me.jpg" alt="john doe" className={styles.widgetImage} />
        <p className={styles.widgetBody}>I find life better, and I'm happier, when things are nice and simple.</p>
      </div>
      <div className={styles.widget}>
        <h2 className={styles.widgetTitle}>RECENT POSTS</h2>
        <div className={styles.recentPost}>
          <h3 className={styles.recentPostTitle}>Keeping cooking simple</h3>
          <img src="https://raw.githubusercontent.com/kevin-powell/reponsive-web-design-bootcamp/master/Module%202-%20A%20simple%20life/img/food.jpg" alt="two dumplings on a wood plate with chopsticks" className={styles.widgetImage} />
        </div>
        <div className={styles.recentPost}>
          <h3 className={styles.recentPostTitle}>Simplicity and work</h3>
          <img src="https://raw.githubusercontent.com/kevin-powell/reponsive-web-design-bootcamp/master/Module%202-%20A%20simple%20life/img/work.jpg" alt="a chair white chair at a white desk on a white wall" className={styles.widgetImage} />
        </div>
      </div>
    </aside>
  );
}
