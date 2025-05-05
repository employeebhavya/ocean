"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import Styles from "./ServiceSlider.module.css";
import Link from "next/link";

// Register GSAP Plugins only on the client-side
if (typeof window !== "undefined") {
  gsap.registerPlugin(Draggable, ScrollTrigger);
}

const services = [
  {
    id: 1,
    title: "Turnkey Solutions",
    imgSrc: "/interior.png",
    link: "/services/turnkey-solutions",
  },
  {
    id: 2,
    title: "Interior Fit-Out Services",
    imgSrc: "/fitOuts.png",
    link: "/services/interior-fit-out-services",
  },
  {
    id: 3,
    title: "Civil Construction",
    imgSrc: "/civil.png",
    link: "/services/civil-construction",
  },
  {
    id: 4,
    title: "Real Estate Development",
    imgSrc: "/designBuild.png",
    link: "/services/real-estate-development",
  },
  {
    id: 5,
    title: "Infrastructure Development",
    imgSrc: "/marine.png",
    link: "/services/infrastructure-development",
  },
];

const ServiceSlider = () => {
  const sliderRef = useRef(null);
  const wrapRef = useRef(null);
  const serviceSectionRef = useRef(null);
  const headingRef = useRef(null);
  const buttonRef = useRef(null);
  const serviceRefs = useRef([]); // Array of refs for the services
  const sliderContainerRef = useRef(null); // New container ref
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  const numClones = 2; // Number of clones for looping effect

  // ScrollTrigger Animation Setup for the container
  useEffect(() => {
    const context = gsap.context(() => {
      // Create a GSAP timeline with ScrollTrigger for heading, button, and container
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: serviceSectionRef.current,
          start: "top 80%", // Trigger when the section is 80% in the viewport
          end: "bottom top", // End when the bottom of the section reaches the top
          once: true, // Ensure it triggers only once
        },
      });

      // Animate headings and button sequentially
      tl.from(headingRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
      })
        .from(
          buttonRef.current,
          {
            opacity: 0,
            y: 50,
            duration: 1,
          },
          "-=0.5" // Overlap animations slightly
        )
        // Apply animation to the slider container
        .from(
          sliderContainerRef.current,
          {
            opacity: 0,
            y: 50,
            duration: 1,
          },
          "-=0.5"
        );
    }, serviceSectionRef);

    return () => {
      // Clean up ScrollTrigger and GSAP context
      context.revert();
    };
  }, []);

  // Draggable Slider Effect Setup
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
    <section
      className={Styles.serviceSliderSection}
      ref={serviceSectionRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container">
        <div className={Styles.rowServiceSlider}>
          <div className={Styles.columnServiceSlider} ref={headingRef}>
            <h4>Redefining Excellence, Delivering Perfection</h4>
            <h2>Our Services</h2>
          </div>
          <div className={Styles.columnServiceSlider} ref={buttonRef}>
            <Link href="/services">
              <button className={Styles.cta}>
                <span>Learn More</span>
                <svg width="15px" height="10px" viewBox="0 0 13 10">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </button>
            </Link>
          </div>
        </div>

        {/* Show the Drag circle only when hovered */}
        {isHovered && (
          <div className={Styles.dragCircle}>
            <span>Drag</span>
          </div>
        )}

        {/* Wrap the draggable slider in a container */}
        <div
          ref={sliderContainerRef}
          style={{ overflow: "hidden", width: "100%" }}
        >
          <div ref={wrapRef} style={{ overflow: "hidden", width: "100%" }}>
            <div
              ref={sliderRef}
              style={{ display: "flex", width: "max-content" }}
            >
              {services.map((service, index) => (
                <div
                  key={service.id}
                  style={{
                    flex: "0 0 auto",
                    width: "30vw",
                    marginRight: "2vw",
                  }}
                  className={Styles.cardServiceSlider}
                  ref={(el) => (serviceRefs.current[index] = el)} // Store refs in array
                >
                  <Link href={service.link}>
                    <img
                      src={service.imgSrc}
                      alt={service.title}
                      style={{ width: "100%" }}
                    />
                    <h3 style={{ textAlign: "left" }}>{service.title}</h3>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSlider;
