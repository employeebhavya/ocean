/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import Link from "next/link";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(Draggable);
}

const services = [
  {
    id: 1,
    title: "Turnkey Solutions",
    imgSrc: "/interior.webp",
    link: "/services/turnkey-solutions",
  },
  {
    id: 2,
    title: "Interior Fit-Out Services",
    imgSrc: "/fitOuts.webp",
    link: "/services/interior-fit-out-services",
  },
  {
    id: 3,
    title: "Civil Construction",
    imgSrc: "/civil.webp",
    link: "/services/civil-construction",
  },
  {
    id: 4,
    title: "Real Estate Development",
    imgSrc: "/designBuild.webp",
    link: "/services/real-estate-development",
  },
  {
    id: 5,
    title: "Infrastructure Development",
    imgSrc: "/marine.webp",
    link: "/services/infrastructure-development",
  },
];

const DraggableSlider = () => {
  const sliderRef = useRef(null);
  const wrapRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false); // Track hover state
  const numClones = 2; // Number of clones for looping effect

  useEffect(() => {
    const slider = sliderRef.current;
    const wrap = wrapRef.current;

    // Clone elements to create infinite scroll effect
    const cloneElements = () => {
      const children = Array.from(slider.children);
      for (let i = 0; i < numClones; i++) {
        children.forEach((child) => {
          const clone = child.cloneNode(true);
          clone.style.opacity = 1; // Ensure the clones are visible
          slider.appendChild(clone); // Append cloned elements
        });
      }
    };

    cloneElements();

    const totalWidth = slider.scrollWidth / (1 + numClones); // Adjust width after cloning
    const visibleWidth = wrap.clientWidth; // Width of the visible container

    const draggableInstance = Draggable.create(slider, {
      type: "x",
      bounds: { minX: -totalWidth + visibleWidth, maxX: 0 }, // Adjust bounds for smooth scroll
      inertia: true, // Smooth drag
      onDrag: wrapElements,
      onThrowUpdate: wrapElements,
    });

    function wrapElements() {
      const currentX = gsap.getProperty(slider, "x");

      // Wrap the slider back when it reaches the end
      if (currentX <= -totalWidth + visibleWidth) {
        gsap.set(slider, { x: 0 });
      } else if (currentX >= 0) {
        gsap.set(slider, { x: -totalWidth + visibleWidth });
      }
    }

    return () => {
      // Cleanup Draggable instance on unmount
      draggableInstance[0].kill();
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      style={{
        overflow: "hidden",
        width: "100%",
        position: "relative", // Allow absolute positioning of "Drag" circle
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Show the Drag circle only when hovered */}
      {isHovered && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "60px",
            height: "60px",
            backgroundColor: "#f5831f",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            fontSize: "16px",
            fontWeight: "bold",
            pointerEvents: "none", // Make sure it doesn't interfere with dragging
            opacity: 0.8,
            zIndex: 10,
          }}
        >
          <span>Drag</span>
        </div>
      )}

      <div ref={sliderRef} style={{ display: "flex", width: "max-content" }}>
        {services.map((service) => (
          <div
            key={service.id}
            style={{
              flex: "0 0 auto",
              width: "30vw",
              marginRight: "2vw",
            }}
          >
            <Link href={service.link}>
              <img
                src={service.imgSrc}
                alt={service.title}
                style={{ width: "100%", marginBottom: "12px" }}
              />
              <h3 className="h4" style={{ textAlign: "left" }}>
                {service.title}
              </h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DraggableSlider;
