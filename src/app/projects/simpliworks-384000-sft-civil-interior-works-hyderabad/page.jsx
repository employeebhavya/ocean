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
                Simpliworks – 3,84,000 SFT Civil & Interior Works, Hyderabad
              </p>
            </div>
            <h2 className="h2">
              Simpliworks
              {/* <span className="description">
                3,84,000 SFT Civil & Interior Works, Hyderabad
              </span> */}
            </h2>
          </div>
          <div className="row1ProjectsInner">
            <img
              src="/simpli/p1.png"
              alt="Simpliworks Civil & Interior Works"
            />
          </div>
          <div className="pageHeader">
            <ul>
              <li>
                <strong>Client:</strong> Simpliworks
              </li>
              <li>
                <strong>Location:</strong> Hyderabad, India
              </li>
              <li>
                <strong>Project Type:</strong> Civil & Interior Works
              </li>
              <li>
                <strong>Duration:</strong> Confidential
              </li>
              <li>
                <strong>Area:</strong> 3,84,000 sq. ft.
              </li>
              <li>
                <strong>Value:</strong> Confidential
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Project Overview:</h3>
            <p className="description">
              The Simpliworks project in Hyderabad, covering 3,84,000 sq. ft.,
              was a large-scale civil and interior works project aimed at
              creating a cutting-edge workspace. The project demanded meticulous
              planning, seamless execution, and the highest standards of quality
              to deliver a modern, efficient, and aesthetically refined
              environment.
            </p>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Objective:</h3>
            <ul>
              <li>
                Construct a world-class workspace that aligns with modern
                architectural and interior design standards.
              </li>
              <li>
                Ensure seamless integration of civil and interior works for a
                cohesive final outcome.
              </li>
              <li>
                Maximize space utilization and functionality, enhancing the
                efficiency of the workspace.
              </li>
              <li>
                Implement sustainable and ergonomic design elements to support
                long-term operational efficiency.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Approach:</h3>
            <ul>
              <li>
                <strong>Strategic Planning & Design:</strong> Conducted a
                thorough site analysis and developed a structured project
                roadmap. Designed an interior layout that optimizes space while
                maintaining a contemporary aesthetic.
              </li>
              <li>
                <strong>
                  Material Selection & Sustainability Integration:
                </strong>{" "}
                Utilized high-quality materials for durability and visual
                appeal. Incorporated eco-friendly elements such as
                energy-efficient lighting and ergonomic workspaces.
              </li>
              <li>
                <strong>Execution & Coordination:</strong> Adopted a phased
                construction approach for smooth and efficient execution.
                Managed multiple teams and coordinated with stakeholders for
                timely completion.
              </li>
              <li>
                <strong>Quality Assurance & Delivery:</strong> Conducted
                rigorous quality checks at every stage to ensure compliance with
                safety and industry standards. Delivered a state-of-the-art
                workspace ready for operations.
              </li>
            </ul>
          </div>
          <div className="row3ProjectsInner">
            <img src="/simpli/p2.png" alt="Simpliworks Interior Works" />
            <img src="/simpli/p3.png" alt="Simpliworks Civil Works" />
          </div>
          <div className="row4ProjectsInner">
            <img src="/simpli/p4.png" alt="Simpliworks Project" />
            <img src="/simpli/p5.png" alt="Simpliworks Office Space" />
          </div>
          <div className="row5ProjectsInner">
            <img src="/simpli/p6.png" alt="Simpliworks Project Interior" />
            <img src="/simpli/p7.png" alt="Simpliworks Workspace" />
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Result:</h3>
            <ul>
              <li>
                Successfully constructed and designed a 3,84,000 sq. ft.
                workspace with premium interiors.
              </li>
              <li>
                Optimized space utilization, ensuring a balance between
                functionality and aesthetics.
              </li>
              <li>
                Integrated sustainable elements, promoting long-term cost
                efficiency.
              </li>
              <li>
                Delivered the project on time and within budget, exceeding
                client expectations.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Key Takeaways:</h3>
            <ul>
              <li>
                Strategic planning and phased execution are critical for
                large-scale civil and interior projects.
              </li>
              <li>
                Quality materials and sustainability enhance the longevity and
                functionality of workspaces.
              </li>
              <li>
                Effective coordination and stakeholder collaboration ensure
                smooth project delivery.
              </li>
              <li>
                A well-designed workspace significantly impacts productivity and
                employee well-being.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Conclusion:</h3>
            <p className="description">
              The Simpliworks project in Hyderabad is a testament to Ocean
              Lifespaces expertise in civil and interior construction. By
              delivering a high-quality, functional, and sustainable workspace,
              this project reaffirms our commitment to excellence in commercial
              construction and interior design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
