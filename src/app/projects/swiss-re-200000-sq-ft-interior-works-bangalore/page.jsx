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
              <p className="description">
                Swiss RE – 2,00,000 SQ FT Interior Works, Bangalore
              </p>
            </div>
            <h2 className="h2">
              Swiss RE
              {/* <span className="description">
                2,00,000 SQ FT Interior Works, Bangalore
              </span> */}
            </h2>
          </div>
          <div className="row1ProjectsInner">
            <img src="/swiss/p1.png" alt="Swiss RE Interior Works" />
          </div>
          <div className="pageHeader">
            <ul>
              <li>
                <strong>Client:</strong> Swiss RE
              </li>
              <li>
                <strong>Location:</strong> Bangalore, India
              </li>
              <li>
                <strong>Project Type:</strong> Interior Fit-Out
              </li>
              <li>
                <strong>Duration:</strong> Confidential
              </li>
              <li>
                <strong>Area:</strong> 2,00,000 sq. ft.
              </li>
              <li>
                <strong>Value:</strong> ₹60 Crores
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Project Overview:</h3>
            <p className="description">
              The Swiss RE interior works project in Bangalore, valued at ₹60
              Crores, focused on delivering a high-end workspace covering
              2,00,000 sq. ft. The project aimed to create a functional,
              aesthetically appealing, and sustainable environment that enhances
              productivity and reflects modern design excellence.
            </p>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Objective:</h3>
            <ul>
              <li>
                Design and execute a world-class interior space with a seamless
                blend of style and functionality.
              </li>
              <li>
                Maximize space efficiency while maintaining a premium look and
                feel.
              </li>
              <li>
                Ensure sustainable and ergonomic designs for long-term
                usability.
              </li>
              <li>
                Deliver the project within the set timeline and budget while
                adhering to high-quality standards.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Approach:</h3>
            <ul>
              <li>
                <strong>Strategic Planning & Concept Development:</strong>{" "}
                Conducted in-depth consultations to align the design with the
                client’s vision. Developed a layout that optimizes space usage,
                comfort, and efficiency.
              </li>
              <li>
                <strong>Material Selection & Sustainability Focus:</strong> Used
                premium materials ensuring durability and visual appeal.
                Integrated eco-friendly solutions, including energy-efficient
                lighting and sustainable furnishings.
              </li>
              <li>
                <strong>Execution & Project Management:</strong> Implemented a
                phased execution plan to streamline workflow. Coordinated with
                multiple teams for seamless integration of interior elements.
              </li>
              <li>
                <strong>Quality Assurance & Final Handover:</strong> Conducted
                rigorous quality checks to ensure the highest standards.
                Delivered a modern, sophisticated interior space ready for use.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Result:</h3>
            <ul>
              <li>
                Successfully completed a state-of-the-art 2,00,000 sq. ft.
                workspace with modern interiors.
              </li>
              <li>
                Enhanced functionality and aesthetics, creating an inspiring and
                efficient work environment.
              </li>
              <li>
                Achieved project completion within the budget and timeline,
                ensuring client satisfaction.
              </li>
              <li>
                Integrated sustainability features for long-term operational
                efficiency.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Key Takeaways:</h3>
            <ul>
              <li>
                Strategic planning and execution are essential for large-scale
                interior projects.
              </li>
              <li>
                Material selection and sustainability significantly impact
                long-term usability.
              </li>
              <li>
                Collaboration and project management play a key role in
                successful delivery.
              </li>
              <li>
                A well-designed workspace enhances productivity and employee
                experience.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Conclusion:</h3>
            <p className="description">
              The Swiss RE interior project in Bangalore stands as a testament
              to Ocean Lifespaces’ expertise in creating world-class work
              environments. With a focus on design, efficiency, and
              sustainability, this project redefines modern workspace interiors,
              setting a new benchmark for future developments.
            </p>
          </div>
          <div className="row3ProjectsInner">
            <img src="/swiss/p2.png" alt="Swiss RE Interior" />
            <img src="/swiss/p3.png" alt="Swiss RE Workspace" />
          </div>
          <div className="row4ProjectsInner">
            <img src="/swiss/p4.png" alt="Office Interiors" />
            <img src="/swiss/p5.png" alt="Interior Workspaces" />
          </div>
          <div className="row5ProjectsInner">
            <img src="/swiss/p6.png" alt="Workspace Design" />
            <img src="/swiss/p7.png" alt="Modern Office Interiors" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
