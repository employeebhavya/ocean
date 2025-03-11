"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from "react";
import styles from "./Team.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Members = [
  {
    image: "/about/team1.png",
    title: "Mr. S. K. Peter",
    description: "Managing Director & CEO",
  },
  {
    image: "/about/team4.png",
    title: "Mrs. Anitha Peter",
    description: "Director I Operations",
  },
  {
    image: "/about/sankar.png",
    title: "Sankar",
    description: "Director I Global",
  },
  {
    image: "/about/team2.png",
    title: "Mr. Arul Arumugam",
    description: "Director I North",
  },
  {
    image: "/about/team3.png",
    title: "Sabapathy",
    description: "Director I Civil",
  },
  {
    image: "/about/vinod.png",
    title: "Vinod",
    description: "Director I Marine",
  },
  {
    image: "/about/salai.png",
    title: "Salai Dhavamani",
    description: "Chief Finance Officer",
  },
];

function Team() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const decRef = useRef(null);
  const memberRefs = useRef([]);

  useEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 100%",
          scrub: 1,
        },
      });

      // Animate heading
      tl.from(headingRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
      });

      tl.from(decRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
      });
      // Staggered animation for team member boxes
      tl.from(
        memberRefs.current,
        {
          opacity: 0,
          y: 50,
          duration: 0.5,
          stagger: 0.2,
        },
        "-=0.5"
      ); // Start member animation just after heading
    }, sectionRef);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.team}>
      <div className="container">
        <div className={styles.mainRowTeam}>
          <div className={styles.rowTeam}>
            <h3 ref={headingRef} className="h3">
              Management Team
            </h3>
            <p className="description" ref={decRef}>
              Meet the visionary leaders behind our success. Our management team
              brings a wealth of experience, innovation, and dedication to every
              project, ensuring excellence in execution and client satisfaction.
            </p>
          </div>
          <div className={styles.rowTeam}>
            {Members.map((member, index) => (
              <div
                key={index}
                className={styles.teamBox}
                ref={(el) => (memberRefs.current[index] = el)}
              >
                <img src={member.image} alt="image" />
                <div className={styles.contentTeamBox}>
                  <h3 className="h4">{member.title}</h3>
                  <p className="description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
