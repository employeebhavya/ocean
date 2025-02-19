/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Styles from "./Footer.module.css";
import Link from "next/link";

function Footer() {
  return (
    <footer className={Styles.sectionFooter}>
      <div className="container">
        <div className={Styles.rowFooter}>
          <div className={Styles.columnFooter}>
            <img src="/foot-logo.png" alt="image" />
          </div>
          <div className={Styles.columnFooter}>
            <div className={Styles.columnFooterRow}>
              <div className={Styles.columnFooterColumn}>
                <Link href="/">General Information</Link>
                <Link href="/">Privacy Policy</Link>
                <Link href="/">Legal Advisory</Link>
                <Link href="/">Company Overview</Link>
              </div>
              <hr style={{ height: "1px", color: "white" }} />
              <div className={Styles.columnFooterColumnLink}>
                <p>
                  Ocean Lifespaces India Pvt Ltd<br></br>
                  MF-1, Industrial Estate,<br></br>
                  CIPET Hostel Road, Guindy,<br></br>
                  Chennai – 600 032, Tamil Nadu, India.
                </p>

                <p style={{ display: "flex", flexDirection: "column" }}>
                  <span>Call Us: +91-98410 22110</span>
                  <span>Tel: +91-44-6919 9900</span>
                </p>

                <p>info@ocean.net.in</p>
              </div>
            </div>
            <div className={Styles.columnFooterRow}>
              <p>
                Copyright © 2024 Ocean Lifespaces. All Rights Reserved. Designed
                by Tectra Technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
