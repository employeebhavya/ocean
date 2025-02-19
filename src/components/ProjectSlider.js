/* eslint-disable @next/next/no-img-element */
// Slider.js
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

  // useEffect(() => {
  //   const slider = sliderRef.current;
  //   const isMobile = window.innerWidth <= 768;

  //   const slideWidth = isMobile
  //     ? slider.children[0].offsetWidth
  //     : slider.children[0].offsetWidth; // Get the adjusted width

  //   const gap = isMobile ? 15 : 17; // Adjust for gap

  //   const moveDistance = currentIndex * (slideWidth + gap);

  //   gsap.to(slider, {
  //     x: -moveDistance,
  //     duration: 1,
  //     ease: "power2.inOut",
  //   });
  // }, [currentIndex]);

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
              portfolio is a testament to our dedication and craftsmanship in
              delivering high-quality projects. We take pride in our ability to
              handle every aspect of interior design and construction with
              precision. Our completed projects reflect our commitment to
              excellence and innovation. Ocean Lifespaces continues to build on
              its reputation for reliability and superior service. Each project
              we complete is a step towards furthering our legacy of excellence
              in the industry.
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
          {/* <div className={Styles.columnProjectSlider}>
            <div className={Styles.sliderWrapper}>
              <div className={Styles.slider} ref={sliderRef}>
                {images.map((image, index) => (
                  <div className={Styles.slide} key={index}>
                    <img src={image} alt={`Slide ${index}`} />
                  </div>
                ))}
              </div>

              <div className={Styles.navigation}>
                <button className={Styles.prevButton} onClick={handlePrev}>
                  <BsArrowLeft />
                </button>
                <button className={Styles.nextButton} onClick={handleNext}>
                  <BsArrowRight />
                </button>
              </div>
            </div>
          </div> */}

          <Slider />
        </div>
      </div>
    </section>
  );
};

export default ProjectSlider;
