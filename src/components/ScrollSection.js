import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Styles from "./ScrollSection.module.css";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import { useGSAP } from "@gsap/react";

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const linkRef = useRef(null);
  const contentRef = useRef(null);
  const mainSectionRef = useRef(null);
  const circleContainerRef = useRef(null);
  const circleRefs = useRef([]);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(contentRef.current, {
      opacity: 0,
      y: 200,
      duration: 1,
      scrollTrigger: {
        trigger: mainSectionRef.current,
        start: "top 80%",
        end: "bottom bottom",
        scrub: 3,
      },
    })
      .from(headingRef.current, {
        opacity: 0,
        y: 200,
        duration: 1,
        scrollTrigger: {
          trigger: mainSectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 3,
        },
      })
      .from(descriptionRef.current, {
        opacity: 0,
        y: 200,
        duration: 1,
        scrollTrigger: {
          trigger: mainSectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 3,
        },
      })
      .from(linkRef.current, {
        opacity: 0,
        y: 200,
        duration: 1,
        scrollTrigger: {
          trigger: mainSectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 3,
        },
      });
  }, []);

  useEffect(() => {
    // Set up Intersection Observer for circles
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate circle when it comes into view
          gsap.to(entry.target, {
            opacity: 1,
            y: 0,
            duration: 1,
          });
        } else {
          // Reverse animation when exiting
          gsap.to(entry.target, {
            opacity: 0,
            y: 200,
            duration: 1,
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Observe each circle
    circleRefs.current.forEach((circleRef) => {
      if (circleRef) {
        observer.observe(circleRef);
      }
    });

    return () => {
      observer.disconnect(); // Clean up observer on unmount
    };
  }, []);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-100vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className={Styles.scrollSectionOuter}>
      <div ref={triggerRef}>
        <div ref={sectionRef} className={Styles.scrollSectionInner}>
          <div className={Styles.scrollSection} ref={mainSectionRef}>
            <div className={Styles.sectionAbout}>
              <div className={Styles.aboutContent} ref={contentRef}>
                <h2 className={Styles.aboutHeading} ref={headingRef}>
                  About Us
                </h2>
                <p className={Styles.aboutDescription} ref={descriptionRef}>
                  Ocean Lifespaces India Private Limited, formerly Ocean
                  Interiors Limited, was found in the year 1996. Under the
                  visionary leadership of Mr. S.K. Peter, MD & CEO, today the
                  company has expanded to become one of the best in the field of
                  General Contracting Works including all MEP, Design & Build,
                  Civil Construction & Facade works.
                </p>
                <Link href={"/about"} ref={linkRef}>
                  <button class={Styles.cta}>
                    <span>Learn More</span>
                    <svg width="15px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className={Styles.scrollSection} ref={circleContainerRef}>
            <div className={Styles.sectionAboutTwo}>
              <div className={Styles.circlesContainer}>
                <div className={Styles.circlesRow}>
                  <Link href={"/services/turnkey-solutions"}>
                    <div
                      className={Styles.circle}
                      ref={(el) => (circleRefs.current[0] = el)}
                    >
                      <div className={Styles.circleText}>Turnkey Solutions</div>
                    </div>
                  </Link>
                  <Link href={"/services/fit-out-services"}>
                    <div
                      className={Styles.circle}
                      ref={(el) => (circleRefs.current[1] = el)}
                    >
                      <div className={Styles.circleText}>Fit-Out Services</div>
                    </div>
                  </Link>
                  <Link href={"/services/civil-construction"}>
                    <div
                      className={Styles.circle}
                      ref={(el) => (circleRefs.current[2] = el)}
                    >
                      <div className={Styles.circleText}>
                        Civil Construction
                      </div>
                    </div>
                  </Link>
                </div>
                <div
                  className={Styles.circlesRow}
                  style={{ marginTop: "clamp(-40px, -6vh, -6vh)" }}
                >
                  <Link href={"/services/real-estate-development"}>
                    <div
                      className={Styles.circle}
                      ref={(el) => (circleRefs.current[3] = el)}
                    >
                      <div className={Styles.circleText}>
                        Real Estate <br></br>Development
                      </div>
                    </div>
                  </Link>
                  <Link href={"/services/infrastructure-development"}>
                    <div
                      className={Styles.circle}
                      ref={(el) => (circleRefs.current[4] = el)}
                    >
                      <div className={Styles.circleText}>
                        Infrastructure<br></br> Development
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
