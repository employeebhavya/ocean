/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "./ServicesGrid.module.css";
import Button from "../components/Button";

const ServicesItems = [
  {
    image: "/services/Link.png",
    title: "Turnkey Solutions",
    description: `From concept to completion, our turnkey solutions handle every aspect of your project. We deliver end-to-end services, ensuring seamless execution and timely delivery, tailored to your specific requirements.`,
    link: "/services/turnkey-solutions",
  },
  {
    image: "/services/Link-3.png",
    title: "Interior Fit-Out Services",
    description: `Transform spaces into functional and aesthetically pleasing environments with our specialized Interior Fit-Out Services. We provide customized interior solutions that blend design innovation with practicality.`,
    link: "/services/interior-fit-out-services",
  },
  {
    image: "/services/Link-1.png",
    title: "Civil Construction",
    description: `With expertise in civil construction, we deliver high-quality projects ranging from residential buildings to commercial complexes. Our team ensures robust engineering, adherence to timelines, and sustainable practices.`,
    link: "/services/civil-construction",
  },
  {
    image: "/services/Link-2.png",
    title: "Real Estate Development",
    description: `Our real estate development services focus on creating exceptional residential and commercial properties. We combine strategic planning, innovative designs, and world-class construction for unmatched results.`,
    link: "/services/real-estate-development",
  },
  {
    image: "/services/Link-4.png",
    title: "Infrastructure Development",
    description: `We contribute to infrastructure development with state-of-the-art solutions for urban and rural projects. From roads and bridges to large-scale public structures, we focus on building a better future.`,
    link: "/services/infrastructure-development",
  },
];

function ServicesGrid() {
  return (
    <section className={styles.servicesGrid}>
      <div className="container">
        <div className={styles.rowMainServicesGrid}>
          <div className={styles.rowServicesGrid}>
            {ServicesItems.map((item) => (
              <div key={item.title} className={styles.columnServicesGrid}>
                <img src={item.image} alt="image" />
                <div className={styles.contentBoxSg}>
                  <h3 className="h4">{item.title}</h3>
                  <p className="description">{item.description}</p>
                  <Link href={item.link}>
                    <button class="inner-blue-button">
                      <span>Read More</span>
                      <svg width="15px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesGrid;
