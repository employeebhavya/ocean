import Image from "next/image";
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
                Civil Construction EPC Contract, Cochin
              </p>
            </div>
            <h2 className="h2">
              Civil Construction EPC Contract
              {/* <span className="description">Cochin</span> */}
            </h2>
          </div>
          <div className="row1ProjectsInner">
            <Image
              width={500}
              height={200}
              src="/projectsOcean/pi1.png"
              alt="Civil Construction Cochin"
            />
          </div>
          <div className="pageHeader">
            <ul>
              <li>
                <strong>Client:</strong> Ocean Lifespaces
              </li>
              <li>
                <strong>Location:</strong> Cochin, India
              </li>
              <li>
                <strong>Project Type:</strong> EPC (Engineering, Procurement,
                and Construction) Contract
              </li>
              <li>
                <strong>Duration:</strong> Confidential
              </li>
              <li>
                <strong>Area:</strong> Confidential
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Project Overview:</h3>
            <p className="description">
              The Civil Construction Project in Cochin was an extensive EPC
              (Engineering, Procurement, and Construction) contract, executed in
              three phases (Phase I, II, III). This large-scale development
              focused on delivering robust infrastructure with world-class
              construction standards, ensuring efficiency, safety, and
              sustainability throughout the project lifecycle.
            </p>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Objective:</h3>
            <p className="description">
              The primary goals of this EPC contract included:
            </p>
            <ul>
              <li>
                Executing large-scale civil construction with precision and
                adherence to high engineering standards.
              </li>
              <li>
                Delivering the project across multiple phases while ensuring
                seamless transitions.
              </li>
              <li>
                Implementing sustainable construction practices to enhance
                durability and environmental responsibility.
              </li>
              <li>
                Maintaining strict adherence to budget and timeline without
                compromising quality.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Approach:</h3>
            <ul>
              <li>
                <strong>Comprehensive Planning & Design:</strong> Conducted
                detailed feasibility studies, site assessments, and design
                optimization. Focused on structural integrity, load-bearing
                analysis, and compliance with safety regulations.
              </li>
              <li>
                <strong>Phased Execution Strategy:</strong> Divided the project
                into three distinct phases to ensure smooth progression and risk
                mitigation. Established clear milestones for each phase,
                allowing efficient resource allocation.
              </li>
              <li>
                <strong>Advanced Engineering & Procurement:</strong> Used
                state-of-the-art construction techniques and high-quality
                materials. Implemented EPC best practices, ensuring
                cost-effectiveness and sustainability.
              </li>
              <li>
                <strong>Quality Control & Safety Compliance:</strong> Maintained
                rigorous quality assurance checks at every stage. Adopted
                international safety protocols, ensuring worker and
                environmental safety.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Result:</h3>
            <ul>
              <li>
                Successful completion of all three phases within the stipulated
                budget and timeline.
              </li>
              <li>
                High-quality infrastructure that meets global construction
                standards.
              </li>
              <li>
                Sustainable and durable structures with long-term resilience.
              </li>
              <li>
                Enhanced operational efficiency through strategic planning and
                execution.
              </li>
            </ul>
          </div>
          <div className="row3ProjectsInner">
            <Image
              width={500}
              height={200}
              src="/projectsOcean/pi2.png"
              alt="Civil Construction Cochin 1"
            />
            <Image
              width={500}
              height={200}
              src="/projectsOcean/pi3.png"
              alt="Civil Construction Cochin 2"
            />
          </div>
          <div className="row4ProjectsInner">
            <Image
              width={500}
              height={200}
              src="/projectsOcean/pi4.png"
              alt="Civil Construction Cochin 3"
            />
            <Image
              width={500}
              height={200}
              src="/projectsOcean/pi5.png"
              alt="Civil Construction Cochin 4"
            />
          </div>
          <div className="row5ProjectsInner">
            <Image
              width={500}
              height={200}
              src="/projectsOcean/pi6.png"
              alt="Civil Construction Cochin 5"
            />
            <Image
              width={500}
              height={200}
              src="/projectsOcean/pi7.png"
              alt="Civil Construction Cochin 6"
            />
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Key Takeaways:</h3>
            <ul>
              <li>
                Phased execution ensures risk mitigation and smoother project
                flow.
              </li>
              <li>
                Advanced engineering and sustainable practices lead to long-term
                infrastructure value.
              </li>
              <li>
                Strong project management and EPC expertise are crucial for
                large-scale construction.
              </li>
              <li>
                Adherence to safety and quality standards ensures successful
                project outcomes.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Conclusion:</h3>
            <p className="description">
              The 450 Cr Civil Construction EPC Contract in Cochin is a landmark
              project that exemplifies Ocean Lifespaces’ ability to handle
              large-scale, high-value developments with precision and
              excellence. This project reinforces our reputation as a trusted
              leader in the construction industry, setting new benchmarks in
              quality, sustainability, and efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
