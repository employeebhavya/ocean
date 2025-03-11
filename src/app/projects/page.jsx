/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "./projects.module.css";
import { MdOutlineArrowRightAlt } from "react-icons/md";

function Projects() {
  return (
    <section className={styles.projects}>
      <div className="container">
        <div className={styles.rowMainProjects}>
          <h2 className="h2">Our Recent Projects</h2>
          <div className={styles.row1Projects}>
            <div className={styles.columnProjects}>
              <img src="/projectsOcean/p1.png" alt="image" />
              <div className={styles.content}>
                <h3 className="h3">Dell Project, Bangalore</h3>
                <p className="description">
                  Bangalore | Area - 2,00,000 sq. ft.
                </p>
                <Link href="/projects/dell-project-bangalore">
                  <span> Learn More</span> <MdOutlineArrowRightAlt />
                </Link>
              </div>
            </div>
            <div className={styles.columnProjects}>
              <img src="/projectsOcean/p2.png" alt="image" />
              <div className={styles.content}>
                <h3 className="h3">HDFC Office, Chennai</h3>
                <p className="description">Chennai | Area - 2,50,000 sq. ft.</p>
                <Link href="/projects/hdfc-office-chennai">
                  <span> Learn More</span> <MdOutlineArrowRightAlt />
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.row2Projects}>
            <div className={styles.columnProjects}>
              <img src="/projectsOcean/p3.png" alt="image" />
              <div className={styles.content}>
                <h3 className="h3">Nvidia Office, Bangalore</h3>
                <p className="description">
                  Bangalore | Area - 2,50,000 sq. ft.
                </p>
                <Link href="/projects/nvidia-office-bangalore">
                  <span> Learn More</span> <MdOutlineArrowRightAlt />
                </Link>
              </div>
            </div>
            <div className={styles.columnProjects}>
              <img src="/projectsOcean/p4.png" alt="image" />
              <div className={styles.content}>
                <h3 className="h3">Bray Controls India Pvt. Ltd</h3>
                <p className="description">Chennai | Area - 30,000 sq. ft.</p>
                <Link href="/projects/bray-controls-india-chennai">
                  <span> Learn More</span> <MdOutlineArrowRightAlt />
                </Link>
              </div>
            </div>
            <div className={styles.columnProjects}>
              <img src="/projectsOcean/p5.png" alt="image" />
              <div className={styles.content}>
                <h3 className="h3">Hindustan International School</h3>
                <p className="description">Chennai | Area - 80,000 sq. ft.</p>
                <Link href="/projects/hindustan-international-school-chennai">
                  <span> Learn More</span> <MdOutlineArrowRightAlt />
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.row3Projects}>
            <div className={styles.columnProjects}>
              <img src="/projectsOcean/p6.png" alt="image" />
              <div className={styles.content}>
                <h3 className="h3">Swiss RE</h3>
                <p className="description">
                  Bangalore | Area - 2,00,000 sq. ft.
                </p>
                <Link href="/projects/swiss-re-200000-sq-ft-interior-works-bangalore">
                  <span> Learn More</span> <MdOutlineArrowRightAlt />
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.row4Projects}>
            <div className={styles.columnProjects}>
              <img src="/projectsOcean/p7.png" alt="image" />
              <div className={styles.content}>
                <h3 className="h3">Tek Systems</h3>
                <p className="description">Bangalore | Area - 42,000 sq. ft.</p>
                <Link href="/projects/tek-systems-bangalore">
                  <span> Learn More</span> <MdOutlineArrowRightAlt />
                </Link>
              </div>
            </div>
            <div className={styles.columnProjects}>
              <img src="/projectsOcean/p8.png" alt="image" />
              <div className={styles.content}>
                <h3 className="h3">Silicon Lab</h3>
                <p className="description">
                  Hyderabad | Area - 1,00,000 sq. ft.
                </p>
                <Link href="/projects/silicon-lab-hyderabad">
                  <span> Learn More</span> <MdOutlineArrowRightAlt />
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.row1Projects}>
            <div className={styles.columnProjects}>
              <img src="/projectsOcean/p9.png" alt="image" />
              <div className={styles.content}>
                <h3 className="h3">Maersk Office</h3>
                <p className="description">Chennai | Area - 1,65,000 sq. ft.</p>
                <Link href="/projects/maersk-office-chennai">
                  <span> Learn More</span> <MdOutlineArrowRightAlt />
                </Link>
              </div>
            </div>
            <div className={styles.columnProjects}>
              <img src="/projectsOcean/p10.png" alt="image" />
              <div className={styles.content}>
                <h3 className="h3">Ajuba</h3>
                <p className="description">Chennai | Area - 40,000 sq. ft.</p>
                <Link href="/projects/ajuba">
                  <span> Learn More</span> <MdOutlineArrowRightAlt />
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.row2Projects}>
            <div className={styles.columnProjects}>
              <img src="/projectsOcean/p11.png" alt="image" />
              <div className={styles.content}>
                <h3 className="h3">Shell</h3>
                <p className="description">
                  Bangalore | Area - 2,50,000 sq. ft.
                </p>
                <Link href="/projects/shell">
                  <span> Learn More</span> <MdOutlineArrowRightAlt />
                </Link>
              </div>
            </div>
            <div className={styles.columnProjects}>
              <img src="/projectsOcean/p12.png" alt="image" />
              <div className={styles.content}>
                <h3 className="h3">Olam Project</h3>
                <p className="description">Bangalore | Area - Confidential</p>
                <Link href="/projects/tek-systems-bangalore">
                  <span> Learn More</span> <MdOutlineArrowRightAlt />
                </Link>
              </div>
            </div>
            <div className={styles.columnProjects}>
              <img src="/projectsOcean/p13.png" alt="image" />
              <div className={styles.content}>
                <h3 className="h3">R1RCM</h3>
                <p className="description">Chennai | Area - 51,000 sq. ft.</p>
                <Link href="/projects/RIRCM">
                  <span> Learn More</span> <MdOutlineArrowRightAlt />
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.row3Projects}>
            <div className={styles.columnProjects}>
              <img src="/projectsOcean/p14.png" alt="image" />
              <div className={styles.content}>
                <h3 className="h3">PWC</h3>
                <p className="description">Chennai | Area - 30,000 sq. ft.</p>
                <Link href="/projects/PWC">
                  <span> Learn More</span> <MdOutlineArrowRightAlt />
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.row1Projects}>
            <div className={styles.columnProjects}>
              <img src="/projectsOcean/p15.png" alt="image" />
              <div className={styles.content}>
                <h3 className="h3">Danfoss</h3>
                <p className="description">Chennai | Area - 5,00,000 sq. ft.</p>
                <Link href="/projects/danfoss-500000-sft-civil-interior-works-chennai">
                  <span> Learn More</span> <MdOutlineArrowRightAlt />
                </Link>
              </div>
            </div>
            <div className={styles.columnProjects}>
              <img src="/projectsOcean/p16.png" alt="image" />
              <div className={styles.content}>
                <h3 className="h3">Simpliworks</h3>
                <p className="description">
                  Hyderabad | Area - 3,84,000 sq. ft.
                </p>
                <Link href="/projects/simpliworks-384000-sft-civil-interior-works-hyderabad">
                  <span> Learn More</span> <MdOutlineArrowRightAlt />
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.row2Projects}>
            <div className={styles.columnProjects}>
              <img src="/projectsOcean/p17.png" alt="image" />
              <div className={styles.content}>
                <h3 className="h3">Emerson</h3>
                <p className="description">
                  Bangalore | Area - 2,50,000 sq. ft.
                </p>
                <Link href="/projects/emersion">
                  <span> Learn More</span> <MdOutlineArrowRightAlt />
                </Link>
              </div>
            </div>
            <div className={styles.columnProjects}>
              <img src="/projectsOcean/p18.png" alt="image" />
              <div className={styles.content}>
                <h3 className="h3">Taramani</h3>
                <p className="description">Chennai | Area - 30,000 sq. ft.</p>
                <Link href="/projects/ground-floor-lobby-works-taramani-chennai">
                  <span> Learn More</span> <MdOutlineArrowRightAlt />
                </Link>
              </div>
            </div>
            <div className={styles.columnProjects}>
              <img src="/projectsOcean/p19.png" alt="image" />
              <div className={styles.content}>
                <h3 className="h3">KONE Project</h3>
                <p className="description">Chennai | Area - 7,00,000 sq. ft.</p>
                <Link href="/projects/kone-project-chennai">
                  <span> Learn More</span> <MdOutlineArrowRightAlt />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
