"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

const images = [
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
  "/clients/1.png",
  "/clients/2.png",
  "/clients/3.png",
  "/clients/4.png",
  "/clients/5.png",
];

export default function LogoScroll() {
  const containerRef = useRef(null);
  const [logoWidth, setLogoWidth] = useState(163); // Default logo width

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        // Set logo width to half of its original size for mobile devices
        setLogoWidth(81.5);
      } else {
        // Reset to original width for larger screens
        setLogoWidth(163);
      }
    };

    handleResize(); // Check the initial screen size
    window.addEventListener("resize", handleResize); // Update on window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up event listener
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;

    const totalImages = images.length;
    const gap = 20;
    const totalWidth = (logoWidth + gap) * totalImages;

    gsap.set(container, {
      width: totalWidth * 2,
      display: "flex",
      gap: `${gap}px`,
    });
    gsap.set(container.querySelectorAll("img"), {
      width: `${logoWidth}px`,
      height: "auto",
      flexShrink: 0,
      margin: 0,
      padding: 0,
    });

    gsap.to(container.querySelectorAll("img"), {
      x: `-=${totalWidth}`,
      duration: 20,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
    });
  }, [logoWidth]); // Re-run animation when logoWidth changes

  return (
    <div
      className="img-container"
      ref={containerRef}
      style={{
        overflow: "hidden",
        display: "flex",
        whiteSpace: "nowrap",
        width: "100vw",
      }}
    >
      {images.concat(images).map((src, index) => (
        <Image
          width={184}
          height={104}
          key={index}
          alt={`logo-${index}`}
          src={src}
          style={{
            margin: 0,
            padding: 0,
          }}
        />
      ))}
    </div>
  );
}
