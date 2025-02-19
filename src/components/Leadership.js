/* eslint-disable @next/next/no-img-element */
import styles from "./Leadership.module.css";

function Leadership() {
  return (
    <section className={styles.Leadership}>
      <div className={styles.mainRowLeadership}>
        <div className={styles.columnLeadership}>
          <img src="/leader.png" alt="Leader" />
          <div className={styles.floatRow}>
            <h3 className="h4">Mr S.K. Peter</h3>
            <p className="description">Managing Director & CEO</p>
          </div>
        </div>
        <div className={styles.columnLeadership}>
          <h4>leadership</h4>
          <h2>Meet our Managing Director & CEO</h2>
          <p>
            The organization is led by the most dynamic and highly visioned Mr.
            SK Peter. With Fiery instinct, futuristic outlook, indomitable will
            and a burning passion he has taken the company to the highest level.
          </p>
          <p>
            His strength in delivering projects on time with superior quality
            won projects of larger magnitude and Ocean paced forward with great
            success. He built great alliances with architects and moved on from
            turnkey general contracting company to design, build and handing
            over superior model to clients.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Leadership;
