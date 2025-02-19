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
                Danfoss - 5,00,000 SFT Civil & Interior Works, Chennai
              </p>
            </div>
            <h2 className="h2">
              Danfoss
              {/* <span className="description">
                5,00,000 SFT Civil & Interior Works, Chennai
              </span> */}
            </h2>
          </div>
          <div className="row1ProjectsInner">
            <img src="/danfoss/p1.png" alt="Danfoss Civil & Interior Works" />
          </div>
          <div className="pageHeader">
            <ul>
              <li>
                <strong>Client:</strong> Danfoss
              </li>
              <li>
                <strong>Location:</strong> Chennai, India
              </li>
              <li>
                <strong>Project Type:</strong> Civil & Interior Works
              </li>
              <li>
                <strong>Duration:</strong> Confidential
              </li>
              <li>
                <strong>Area:</strong> 5,00,000 sq. ft.
              </li>
              <li>
                <strong>Value:</strong> ₹66 Crores
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Project Overview:</h3>
            <p className="description">
              The Danfoss project in Chennai, covering a Built-Up Area (BUA) of
              5,00,000 sq. ft., involved civil and interior works for a
              large-scale industrial and commercial facility. With a total
              project value of ₹66 Crores, this project required a
              well-coordinated approach to deliver high-quality infrastructure
              while maintaining efficiency and sustainability.
            </p>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Objective:</h3>
            <ul>
              <li>
                To construct and furnish a large-scale facility that aligns with
                Danfoss’s global standards.
              </li>
              <li>
                To ensure seamless execution of civil and interior works within
                a stringent timeline.
              </li>
              <li>
                To integrate modern infrastructure and sustainability measures
                into the project.
              </li>
              <li>
                To deliver a high-quality, functional, and aesthetically
                pleasing workspace.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Approach:</h3>
            <p className="description">
              <strong>Strategic Planning & Execution:</strong> Developed a
              detailed project roadmap for efficient resource allocation and
              execution. Ensured collaborative coordination between civil
              engineers, architects, and interior designers.
            </p>
            <p className="description">
              <strong>Civil Works Implementation:</strong> Executed structural,
              foundational, and MEP (Mechanical, Electrical, Plumbing) works
              with precision. Integrated high-strength materials to ensure
              durability and resilience.
            </p>
            <p className="description">
              <strong>Interior Works & Design Integration:</strong> Delivered
              premium-quality interiors, blending functionality with aesthetics.
              Installed advanced lighting, ventilation, and ergonomic designs
              for optimized workspace.
            </p>
            <p className="description">
              <strong>Sustainability & Safety Compliance:</strong> Adopted
              energy-efficient solutions, water conservation, and waste
              management practices. Ensured strict safety compliance to meet
              industrial and environmental regulations.
            </p>
            <p className="description">
              <strong>Quality Control & Timely Handover:</strong> Conducted
              rigorous inspections and testing to uphold high-quality standards.
              Implemented a phased execution strategy to meet project deadlines.
            </p>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Result:</h3>
            <ul>
              <li>
                Successfully delivered a state-of-the-art 5,00,000 sq. ft.
                facility, exceeding client expectations.
              </li>
              <li>
                Achieved seamless integration of civil and interior works with a
                high level of precision.
              </li>
              <li>
                Ensured sustainability, durability, and operational efficiency
                in the final structure.
              </li>
              <li>
                Completed within budget and timeline, ensuring maximum client
                satisfaction.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Key Takeaways:</h3>
            <ul>
              <li>
                Meticulous planning and execution are essential for large-scale
                projects.
              </li>
              <li>
                Combining structural strength with modern interiors creates a
                balanced, high-performance workspace.
              </li>
              <li>
                Sustainability and safety play a crucial role in industrial and
                corporate infrastructure.
              </li>
              <li>
                On-time and on-budget delivery strengthens client trust and
                project success.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Conclusion:</h3>
            <p className="description">
              The Danfoss project in Chennai stands as a testament to Ocean
              Lifespaces’ expertise in large-scale civil and interior works. The
              successful completion of this ₹66 Crore project highlights our
              commitment to precision, quality, and sustainability in
              infrastructure development.
            </p>
          </div>
          <div className="row3ProjectsInner">
            <img src="/danfoss/p2.png" alt="image" />
            <img src="/danfoss/p3.png" alt="image" />
          </div>
          <div className="row4ProjectsInner">
            <img src="/danfoss/p4.png" alt="image" />
            <img src="/danfoss/p5.png" alt="image" />
          </div>
          <div className="row5ProjectsInner">
            <img src="/danfoss/p6.png" alt="Simpliworks Project Interior" />
            <img src="/danfoss/p7.png" alt="Simpliworks Workspace" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
