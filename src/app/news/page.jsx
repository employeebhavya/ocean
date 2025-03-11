/* eslint-disable @next/next/no-img-element */
import styles from "./news.module.css";
import NewsAndEvents from "@/components/NewsAndEvents";

function News() {
  return (
    <>
      <section className={styles.news}>
        <div className="container">
          <div className={styles.rowNews}>
            <div className={styles.columnNews}>
              <h2 className="h3">News & Events</h2>
              <p className="description">
                Stay updated with our latest trends, projects, and achievements.
              </p>
              <div className={styles.innerColumnNews}>
                <img
                  style={{ borderRadius: "15px" }}
                  src="/news/Background.png"
                  alt="image"
                />
                <img src="/news/Link-1.png" alt="image" />
                <img src="/news/Link-2.png" alt="image" />
              </div>
            </div>
            <div className={styles.columnNews}>
              <img src="/news/Link.png" alt="image" />
              <h4 className="h4">
                Ocean Lifespaces Secures Landmark Headquarters Redesign Project
              </h4>
              <p className="description">
                We are proud to transform a leading tech giant’s headquarters
                with innovative design and seamless functionality, setting new
                benchmarks in workspace excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.pbottom}>
        <NewsAndEvents list={7} />
      </div>
    </>
  );
}

export default News;
