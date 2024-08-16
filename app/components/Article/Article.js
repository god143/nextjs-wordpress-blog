import styles from './Article.module.css';

export default function Article({ increments, title, date, comments, image, alt, body, postslug }) {
    return (
        <>
          {increments === 1 && (
            <article className={styles.articleFeatured}>
              <h2 className={styles.articleTitle}>{title}</h2>
              <img
                src={image}
                alt={alt}
                className={styles.articleImage}
                id={increments}
              />
              <p className={styles.articleInfo}>
              {date} | {comments !== null && comments + ' Comments'} {comments == null && 'No Comments' }
              </p>
              <p className={styles.articleBody}>
                {body.replace(/<\/?[^>]+(>|$)/g, "")}
              </p>
              <a href={`/blog/${postslug}`} className={styles.articleReadMore}>
                CONTINUE READING
              </a>
            </article>
          )}
      
          {increments !== 1 && (
            <article className={styles.articleRecent}>
              <div className={styles.articleRecentMain}>
                <h2 className={styles.articleTitle}>{title}</h2>
                <p className={styles.articleBody}>
                  {body.replace(/<\/?[^>]+(>|$)/g, "")}
                </p>
                <a href={`/blog/${postslug}`} className={styles.articleReadMore}>
                CONTINUE READING
              </a>
              </div>
              <div className={styles.articleRecentSecondary}>
                <img
                  src={image}
                  alt={alt}
                  className={styles.articleImage}
                />
                <p className={styles.articleInfo}>
                {date} | {comments !== null && comments + ' Comments'} {comments == null && 'No Comments' }
                </p>
              </div>
            </article>
          )}
        </>
      );
      
}
