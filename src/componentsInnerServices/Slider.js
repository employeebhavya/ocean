import React, { useState } from "react";
import styles from "./Slider.module.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Image from "next/image";

const Slider = () => {
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

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className={styles.sliderContainer}>
      <button className={styles.prevButton} onClick={prevSlide}>
        <BsArrowLeft />
      </button>
      <div className={styles.slider}>
        <div className={styles.imageWrapper}>
          <Image
            width={1000}
            height={1000}
            src={images[currentIndex]}
            alt="Slide"
            className={styles.sliderImage}
          />
          <Image
            width={1000}
            height={1000}
            src={images[(currentIndex + 1) % images.length]}
            alt="Next Slide"
            className={styles.sliderImage}
          />
        </div>
      </div>
      <button className={styles.nextButton} onClick={nextSlide}>
        <BsArrowRight />
      </button>
    </div>
  );
};

export default Slider;
