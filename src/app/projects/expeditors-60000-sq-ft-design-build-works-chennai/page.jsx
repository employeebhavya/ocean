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
                Expeditors – 60,000 SQ FT Design & Build Works, Chennai
              </p>
            </div>
            <h2 className="h2">
              Expeditors
              {/* <span className="description">
                60,000 SQ FT Design & Build Works, Chennai
              </span> */}
            </h2>
          </div>
          <div className="row1ProjectsInner">
            <Image
              width={500}
              height={200}
              src="/projectsOcean/pi1.png"
              alt="Expeditors Design & Build Works"
            />
          </div>
          <div className="pageHeader">
            <ul>
              <li>
                <strong>Client:</strong> Expeditors
              </li>
              <li>
                <strong>Location:</strong> Chennai, India
              </li>
              <li>
                <strong>Project Type:</strong> Design & Build Works
              </li>
              <li>
                <strong>Duration:</strong> Confidential
              </li>
              <li>
                <strong>Area:</strong> 60,000 sq. ft.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Project Overview:</h3>
            <p className="description">
              The Expeditors project in Chennai, spanning 60,000 sq. ft.,
              involved design and build works to create a state-of-the-art
              workspace that reflects innovation, functionality, and efficiency.
              The project, required an integrated approach, combining
              architecture, engineering, and construction to deliver a turnkey
              solution that aligns with modern corporate requirements.
            </p>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Objective:</h3>
            <ul>
              <li>
                Design and construct a modern workspace that enhances
                productivity and reflects the Expeditors brand.
              </li>
              <li>
                Deliver a high-quality, functional, and aesthetically appealing
                environment.
              </li>
              <li>
                Ensure space optimization to accommodate current and future
                operational needs.
              </li>
              <li>
                Adopt sustainable and cost-effective solutions within the
                allocated budget.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Approach:</h3>
            <ul>
              <li>
                <strong>Strategic Planning & Conceptualization:</strong>{" "}
                Developed an innovative design blueprint to maximize space
                utilization and focus on ergonomic, functional workspace
                designs.
              </li>
              <li>
                <strong>Seamless Integration of Design & Build:</strong>{" "}
                Implemented turnkey construction solutions for efficiency,
                integrated modular interiors, and smart technology for enhanced
                functionality.
              </li>
              <li>
                <strong>Quality Assurance & Sustainability:</strong> Used
                premium materials and finishes, adopted eco-friendly
                construction practices for sustainability compliance.
              </li>
              <li>
                <strong>Timely Execution & Delivery:</strong> Ensured strict
                project timelines and phased execution, maintaining continuous
                coordination between teams.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Result:</h3>
            <ul>
              <li>
                Successfully delivered the 60,000 sq. ft. workspace as per
                client specifications.
              </li>
              <li>
                Optimized space planning for seamless workflow and future
                expansion.
              </li>
              <li>
                Enhanced sustainability with energy-efficient designs and
                eco-friendly materials.
              </li>
              <li>
                Completed the project within budget while maintaining
                high-quality standards.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Key Takeaways:</h3>
            <ul>
              <li>
                Integrated design and build solutions ensure efficiency and
                cost-effectiveness.
              </li>
              <li>
                Sustainable and modern designs enhance workspace functionality.
              </li>
              <li>
                Project management and coordination play a crucial role in
                timely execution.
              </li>
              <li>
                Quality control and attention to detail lead to long-term client
                satisfaction.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Conclusion:</h3>
            <p className="description">
              The Expeditors project in Chennai is a testament to Ocean
              Lifespaces expertise in delivering high-quality design and build
              solutions. The successful completion of this ₹13 Crore project
              highlights our commitment to innovation, sustainability, and
              excellence in corporate infrastructure development.
            </p>
          </div>
          <div className="row3ProjectsInner">
            <Image
              width={500}
              height={200}
              src="/projectsOcean/pi2.png"
              alt="Expeditors Design & Build Works"
            />
            <Image
              width={500}
              height={200}
              src="/projectsOcean/pi3.png"
              alt="Expeditors Design & Build Works"
            />
          </div>
          <div className="row4ProjectsInner">
            <Image
              width={500}
              height={200}
              src="/projectsOcean/pi4.png"
              alt="Expeditors Design & Build Works"
            />
            <Image
              width={500}
              height={200}
              src="/projectsOcean/pi5.png"
              alt="Expeditors Design & Build Works"
            />
          </div>
          <div className="row5ProjectsInner">
            <Image
              width={500}
              height={200}
              src="/projectsOcean/pi6.png"
              alt="Expeditors Design & Build Works"
            />
            <Image
              width={500}
              height={200}
              src="/projectsOcean/pi7.png"
              alt="Expeditors Design & Build Works"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
