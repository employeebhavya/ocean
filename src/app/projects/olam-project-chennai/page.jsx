/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { LuChevronRight } from "react-icons/lu";

function Page() {
  return (
    <section className="projectsInner">
      <div className="container">
        <div className="rowMainProjectsInner">
          <div className="rowProjectsInner">
            <div className="headerProjectsInner">
              <Link href="/projects">
                <span className="description">Our Projects</span>
              </Link>
              <LuChevronRight />
              <p className="description">Olam Project, Chennai</p>
            </div>
            <h2 className="h2">
              Olam Project
              {/* <span className="description">Chennai</span> */}
            </h2>
          </div>
          <div className="row1ProjectsInner">
            <img src="/olam/p1.png" alt="Olam Project Interior" />
          </div>
          <div className="pageHeader">
            <ul>
              <li>
                <strong>Client:</strong> Olam
              </li>
              <li>
                <strong>Location:</strong> Chennai, India
              </li>
              <li>
                <strong>Project Type:</strong> Commercial Interior Development
              </li>
              <li>
                <strong>Duration:</strong> Confidential
              </li>
              <li>
                <strong>Area:</strong> Confidential
              </li>
              <li>
                <strong>Value:</strong> Confidential
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Project Overview:</h3>
            <p className="description">
              The Olam Project in Chennai stands as a testament to Ocean
              Lifespaces’ commitment to excellence in construction and interior
              design. More than just a development, Olam was envisioned as a
              modern, future-ready space that embodies innovation,
              functionality, and aesthetic appeal. This project was a blend of
              meticulous planning, seamless execution, and a dedication to
              quality, setting new benchmarks in the industry.
            </p>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Objective:</h3>
            <p className="description">
              The primary goal of the Olam Project was to create a space that
              aligns with contemporary architectural and interior trends while
              ensuring durability, efficiency, and sustainability. The project
              aimed to:
            </p>
            <ul>
              <li>Develop a space that reflects modern design principles.</li>
              <li>
                Integrate high-quality materials and precision engineering.
              </li>
              <li>
                Address functional and aesthetic needs to enhance user
                experience.
              </li>
              <li>
                Overcome construction challenges while maintaining efficiency.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Approach:</h3>
            <ul>
              <li>
                <strong>Concept & Planning:</strong> Conducted detailed research
                and collaborated with stakeholders to define project goals,
                functional requirements, and design aspirations.
              </li>
              <li>
                <strong>Design & Material Selection:</strong> Ensured a balance
                between aesthetics and durability, choosing high-quality
                materials and sustainable design solutions.
              </li>
              <li>
                <strong>Execution & Precision Engineering:</strong> Focused on
                seamless execution, overcoming site-specific challenges, and
                maintaining project timelines.
              </li>
              <li>
                <strong>Quality Assurance & Finishing:</strong> Ensured every
                detail was perfected, from structural integrity to interior
                finesse, aligning with the highest industry standards.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Results:</h3>
            <ul>
              <li>A visually striking and functionally efficient space.</li>
              <li>
                High-quality construction that met both structural and aesthetic
                expectations.
              </li>
              <li>
                Positive client and stakeholder feedback, reinforcing Ocean
                Lifespaces reputation.
              </li>
              <li>
                A project that now serves as a benchmark for future
                developments.
              </li>
            </ul>
          </div>

          <div className="row3ProjectsInner">
            <img src="/olam/p2.png" alt="image" />
            <img src="/olam/p3.png" alt="image" />
          </div>
          <div className="row4ProjectsInner">
            <img src="/olam/p4.png" alt="image" />
            <img src="/olam/p5.png" alt="image" />
          </div>
          <div className="row5ProjectsInner">
            <img src="/olam/p6.png" alt="image" />
            <img src="/olam/p7.png" alt="image" />
          </div>

          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Key Takeaways:</h3>
            <ul>
              <li>
                Collaboration and precision are critical in delivering
                high-quality spaces.
              </li>
              <li>
                Adaptability to challenges ensures smooth project execution.
              </li>
              <li>
                Sustainability and innovation enhance long-term project value.
              </li>
              <li>
                Client trust and engagement play a key role in successful
                project outcomes.
              </li>
            </ul>
          </div>

          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Conclusion:</h3>
            <p className="description">
              The Olam Project in Chennai is a milestone achievement for Ocean
              Lifespaces, reflecting our passion for creating meaningful,
              well-crafted spaces. This project not only reinforced our
              expertise in construction and interior design but also
              strengthened our commitment to excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
