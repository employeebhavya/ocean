/* eslint-disable @next/next/no-img-element */
import styles from "./clients.module.css";

const Logos = [
  "/clients/1.png",
  "/clients/2.png",
  "/clients/3.png",
  "/clients/4.png",
  "/clients/5.png",
  "/clients/6.png",
  "/clients/7.png",
  "/clients/8.png",
  "/clients/9.png",
  "/clients/10.png",
  "/clients/11.png",
  "/clients/12.png",
  "/clients/13.png",
  "/clients/14.png",
  "/clients/15.png",
  "/clients/16.png",
  "/clients/17.png",
  "/clients/18.png",
  "/clients/19.png",
  "/clients/20.png",
  "/clients/21.png",
  "/clients/22.png",
  "/clients/23.png",
  "/clients/24.png",
  "/clients/25.png",
  "/clients/26.png",
  "/clients/27.png",
  "/clients/28.png",
  "/clients/29.png",
  "/clients/30.png",
  "/clients/31.png",
  "/clients/32.png",
  "/clients/33.png",
  "/clients/34.png",
  "/clients/35.png",
];
const OngoingLogos = [
  "/clients/on1.png",
  "/clients/on2.png",
  "/clients/on3.png",
  "/clients/on4.png",
  "/clients/on5.png",
  "/clients/on6.png",
  "/clients/on7.png",
  "/clients/on8.png",
  "/clients/on9.png",
  "/clients/on10.png",
  "/clients/on11.png",
  "/clients/on12.png",
  "/clients/on13.png",
  "/clients/on14.png",
  "/clients/on15.png",
  "/clients/on16.png",
];

function Clients() {
  return (
    <section className={styles.clients}>
      <div className="container">
        <div className={styles.rowMainClients}>
          <h2 className="h2">Fitout Corporate Clients</h2>
          <div className={styles.rowClients}>
            {Logos.map((logo) => (
              <div key={logo} className={styles.columnClients}>
                <img src={logo} alt="image" />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.rowMainClients} style={{ marginTop: "50px" }}>
          <h2 className="h2">Ongoing Projects</h2>
          <div className={`${styles.rowClients} ${styles.rowClientsOngoing}`}>
            {OngoingLogos.map((logo) => (
              <div key={logo} className={styles.columnClients}>
                <img src={logo} alt="image" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;
