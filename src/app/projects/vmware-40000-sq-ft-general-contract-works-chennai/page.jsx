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
                <span className="description">Our Recent Projects</span>
              </Link>
              <LuChevronRight />
              <p className="description">
                VMware – 40,000 SQ FT General Contract Works, Chennai
              </p>
            </div>
            <h2 className="h2">
              VMware
              {/* <span className="description">
                40,000 SQ FT General Contract Works, Chennai
              </span> */}
            </h2>
          </div>
          <div className="row1ProjectsInner">
            <img
              src="/projectsOcean/pi1.png"
              alt="VMware General Contract Works"
            />
          </div>
          <div className="pageHeader">
            <ul>
              <li>
                <strong>Client:</strong> VMware
              </li>
              <li>
                <strong>Location:</strong> Chennai, India
              </li>
              <li>
                <strong>Project Type:</strong> General Contract Works
              </li>
              <li>
                <strong>Duration:</strong> Confidential
              </li>
              <li>
                <strong>Area:</strong> 40,000 sq. ft.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Project Overview:</h3>
            <p className="description">
              The VMware project in Chennai, spanning 40,000 sq. ft., involved
              General Contract Works to develop a cutting-edge corporate
              workspace. The project, valued at ₹13 Crores, required
              high-quality execution, meticulous planning, and adherence to
              strict timelines to meet VMware’s global standards for
              functionality, sustainability, and aesthetics.
            </p>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Objective:</h3>
            <ul>
              <li>
                Deliver a high-quality corporate workspace with best-in-class
                infrastructure.
              </li>
              <li>
                Ensure seamless execution of general contract works with a focus
                on efficiency.
              </li>
              <li>
                Maintain strict compliance with safety, sustainability, and
                industry standards.
              </li>
              <li>
                Complete the project within budget and timeline while exceeding
                client expectations.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Approach:</h3>
            <ul>
              <li>
                <strong>Strategic Planning & Coordination:</strong> Developed a
                detailed project plan ensuring smooth workflow and execution.
                Established collaborative coordination between architects,
                engineers, and contractors.
              </li>
              <li>
                <strong>Efficient Execution of General Contract Works:</strong>{" "}
                Managed structural, electrical, HVAC, and finishing works with
                precision. Implemented high-quality materials to ensure
                durability and aesthetic appeal.
              </li>
              <li>
                <strong>Sustainability & Safety Compliance:</strong> Adopted
                eco-friendly materials and energy-efficient solutions. Ensured
                strict adherence to safety protocols and regulatory
                requirements.
              </li>
              <li>
                <strong>Quality Control & Timely Delivery:</strong> Conducted
                regular inspections to maintain superior quality standards.
                Executed phased delivery approach to meet deadlines effectively.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Result:</h3>
            <ul>
              <li>
                Successfully delivered the 40,000 sq. ft. project as per
                VMware’s specifications.
              </li>
              <li>
                Achieved seamless integration of all general contract works with
                top-tier execution.
              </li>
              <li>
                Ensured sustainability, safety, and long-term durability in
                construction.
              </li>
              <li>
                Met budget and timeline commitments, ensuring client
                satisfaction.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Key Takeaways:</h3>
            <ul>
              <li>
                Effective project management and coordination drive successful
                execution.
              </li>
              <li>
                High-quality materials and sustainability enhance long-term
                value.
              </li>
              <li>
                Attention to detail in safety and compliance ensures a reliable
                workspace.
              </li>
              <li>
                Timely delivery and budget control are key to exceeding client
                expectations.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Conclusion:</h3>
            <p className="description">
              The VMware project in Chennai showcases Ocean Lifespaces expertise
              in delivering high-quality corporate infrastructure. The
              successful completion of this ₹13 Crore project underscores our
              commitment to precision, sustainability, and excellence in the
              construction and interior sector.
            </p>
          </div>
          <div className="row3ProjectsInner">
            <img src="/projectsOcean/pi2.png" alt="image" />
            <img src="/projectsOcean/pi3.png" alt="image" />
          </div>
          <div className="row4ProjectsInner">
            <img src="/projectsOcean/pi4.png" alt="image" />
            <img src="/projectsOcean/pi5.png" alt="image" />
          </div>
          <div className="row5ProjectsInner">
            <img
              src="/projectsOcean/pi6.png"
              alt="Simpliworks Project Interior"
            />
            <img src="/projectsOcean/pi7.png" alt="Simpliworks Workspace" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
