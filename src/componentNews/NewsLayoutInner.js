/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "./NewsLayoutInner.module.css";
import { LuChevronRight } from "react-icons/lu";
import SocialShare from "./SocialShare";

function NewsLayoutInner({
  breadcrumbLink,
  breadcrumbText,
  title,
  date,
  authorName,
  authorImage,
  mainImage,
  content,
  content1,
  content2,
  content3,
  content4,
}) {
  return (
    <section className={styles.newsLayoutInner}>
      <div className="container">
        <div className={styles.rowMainNewsLayoutInnerInner}>
          <div className={styles.rowNewsLayoutInnerInner}>
            <div className={styles.breadcrumbNewsLayoutInner}>
              <Link href={breadcrumbLink}>
                <span className="description">{breadcrumbText}</span>{" "}
                <LuChevronRight />
              </Link>

              <p className="description">{title}</p>
            </div>
            <h3 className="h3">{title}</h3>
          </div>
          <div className={styles.row2NewsLayoutInnerInner}>
            <div className={styles.author}>
              <img src={authorImage} alt="author" />
              <div className={styles.contentAuthor}>
                <p className="description">
                  <strong>{authorName}</strong>
                </p>
                <p className="description">{date}</p>
              </div>
            </div>
            <img
              className={styles.divider}
              src="/news/divider.png"
              alt="divider"
            />
            <SocialShare />
          </div>
          <div className={styles.row3NewsLayoutInnerInner}>
            <img src={mainImage} alt="main image" />
          </div>
          <div className={styles.row4NewsLayoutInnerInner}>
            <p className="description">{content}</p>
            <p className="description">{content1}</p>
            <p className="description">{content2}</p>
            <p className="description">{content3}</p>
            <p className="description">{content4}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsLayoutInner;
