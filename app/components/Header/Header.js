// components/Header.js
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.containerFlex}>
      <div className={styles.siteTitle}>
        <h1>Living The Social Life</h1>
        <p className={styles.subtitle}>A blog exploring minimalism in life.</p>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><a href="#" className={styles.currentPage}>Home</a></li>
          <li><a href="#">About Me</a></li>
          <li><a href="#">Recent Posts</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
