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
                Boardridge - 2,00,000 SQ FT Interior Works, Bangalore
              </p>
            </div>
            <h2 className="h2">
              Boardridge
              {/* <span className="description">
                2,00,000 SQ FT Interior Works, Bangalore
              </span> */}
            </h2>
          </div>
          <div className="row1ProjectsInner">
            <Image
              width={500}
              height={200}
              src="/projectsOcean/pi1.webp"
              alt="Boardridge Interior Works"
            />
          </div>
          <div className="pageHeader">
            <ul>
              <li>
                <strong>Client:</strong> Boardridge
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
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Project Overview:</h3>
            <p className="description">
              The Boardridge interior works project in Bangalore, spanning
              2,00,000 sq. ft., was designed to create a modern, efficient, and
              visually appealing workspace. With a focus on seamless
              functionality, aesthetic excellence, and sustainability, the
              project aimed to redefine contemporary office interiors.
            </p>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Objective:</h3>
            <ul>
              <li>
                Deliver a world-class interior environment that enhances
                productivity and employee experience.
              </li>
              <li>
                Optimize space utilization while ensuring a modern and premium
                look.
              </li>
              <li>
                Integrate sustainable and ergonomic design solutions for
                long-term efficiency.
              </li>
              <li>
                Complete the project within the stipulated timeline and budget
                without compromising quality.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Approach:</h3>
            <ul>
              <li>
                <strong>Design & Planning:</strong> Conducted an in-depth
                analysis of client requirements and workspace needs. Developed a
                layout ensuring maximum space efficiency, comfort, and
                flexibility.
              </li>
              <li>
                <strong>
                  Material Selection & Sustainability Integration:
                </strong>{" "}
                Curated high-quality, durable materials for aesthetics and
                functionality. Implemented energy-efficient lighting,
                eco-friendly furnishings, and smart workspace solutions.
              </li>
              <li>
                <strong>Execution & Project Management:</strong> Adopted a
                phased execution strategy for streamlined workflow and
                efficiency. Coordinated with multiple stakeholders for smooth
                project execution.
              </li>
              <li>
                <strong>Final Delivery & Quality Assurance:</strong> Conducted
                rigorous inspections to ensure compliance with the highest
                quality standards. Delivered a refined, high-performance
                workspace ready for operations.
              </li>
            </ul>
          </div>
          <div className="row3ProjectsInner">
            <Image
              width={500}
              height={200}
              src="/projectsOcean/pi2.webp"
              alt="image"
            />
            <Image
              width={500}
              height={200}
              src="/projectsOcean/pi3.webp"
              alt="image"
            />
          </div>
          <div className="row4ProjectsInner">
            <Image
              width={500}
              height={200}
              src="/projectsOcean/pi4.webp"
              alt="image"
            />
            <Image
              width={500}
              height={200}
              src="/projectsOcean/pi5.webp"
              alt="image"
            />
          </div>
          <div className="row5ProjectsInner">
            <Image
              width={500}
              height={200}
              src="/projectsOcean/pi6.webp"
              alt="image"
            />
            <Image
              width={500}
              height={200}
              src="/projectsOcean/pi7.webp"
              alt="image"
            />
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Result:</h3>
            <ul>
              <li>
                Successfully completed a cutting-edge 2,00,000 sq. ft. office
                space with modern interiors.
              </li>
              <li>
                Enhanced the workspace experience, balancing aesthetics and
                functionality.
              </li>
              <li>
                Integrated sustainable solutions, ensuring long-term operational
                efficiency.
              </li>
              <li>
                Completed the project within budget and timeline, achieving high
                client satisfaction.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Key Takeaways:</h3>
            <ul>
              <li>
                Effective space planning is essential for high-performance
                office environments.
              </li>
              <li>
                Material selection and sustainability play a crucial role in
                modern interior design.
              </li>
              <li>
                Collaboration and project management are key to delivering
                large-scale interiors successfully.
              </li>
              <li>
                A well-designed workspace positively impacts productivity and
                employee well-being.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Conclusion:</h3>
            <p className="description">
              The Boardridge interior project in Bangalore exemplifies Ocean
              Lifespaces’ expertise in delivering high-quality, efficient, and
              sustainable workspace solutions. This project sets a new benchmark
              in corporate interior design, showcasing our commitment to
              excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
