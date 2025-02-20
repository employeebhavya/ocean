"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { BsArrowLeft, BsArrowRight, BsArrowUpRight } from "react-icons/bs";
import Styles from "./ProjectSlider.module.css";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Slider from "@/componentsInnerServices/Slider";

// Sample images array
const images = [
  "/project1.png",
  "/project2.png",
  "/project3.png",
  "/project4.png",
  "/project5.png",
  "/project6.png",
  "/project7.png",
  "/project8.png",
  "/project9.png",
  "/project10.png",
  "/project11.png",
  "/project12.png",
  "/project13.png",
  "/project14.png",
  "/project15.png",
  "/project16.png",
  "/project17.png",
  "/project18.png",
  "/project19.png",
  "/project20.png",
  "/project21.png",
];

const ProjectSlider = () => {
  const projectSliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  gsap.registerPlugin(ScrollTrigger);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: projectSliderRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(projectSliderRef.current.querySelectorAll("a, h2, p, img"), {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, []);

  return (
    <section className={Styles.sectionProjectSlider} ref={projectSliderRef}>
      <div className="container">
        <div className={Styles.rowProjectSlider}>
          <div className={Styles.columnProjectSlider}>
            <h2>Projects</h2>
            <p>
              Since its inception, Ocean Lifespaces has consistently showcased
              its expertise in Turnkey Interiors and Civil Construction. Our
              portfolio stands as a testament to our dedication, craftsmanship,
              and commitment to delivering high-quality projects.
            </p>
            <p>
              We take pride in our ability to manage every aspect of interior
              design and construction with precision, ensuring that each space
              is both functional and visually appealing. Our attention to
              detail, innovative approach, and client-centric focus allow us to
              create environments that inspire and endure.
            </p>
            <p>
              With a reputation for reliability and superior service, Ocean
              Lifespaces continues to push the boundaries of excellence. Every
              project we complete reinforces our legacy of quality, innovation,
              and trust, driving us to set new industry standards with each
              endeavor.
            </p>
            <Link href="/projects">
              <button class={Styles.cta}>
                <span>View All</span>
                <svg width="15px" height="10px" viewBox="0 0 13 10">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </button>
            </Link>
          </div>
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default ProjectSlider;
