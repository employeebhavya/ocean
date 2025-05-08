/* eslint-disable @next/next/no-Image width={500} height={200}-element */
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
                T2 Tower, Innovation Campus – Chennai
              </p>
            </div>
            <h2 className="h2">
              T2 Tower, Innovation Campus
              {/* <span className="description">Chennai</span> */}
            </h2>
          </div>
          <div className="row1ProjectsInner">
            <Image
              width={500}
              height={200}
              src="/projectsOcean/pi1.webp"
              alt="image"
            />
          </div>
          <div className="pageHeader">
            <ul>
              <li>
                <strong>Client:</strong> Vestian Global Workplace Services Pvt
                Ltd
              </li>
              <li>
                <strong>End User:</strong> LTI Mindtree
              </li>
              <li>
                <strong>Location:</strong> Chennai, India
              </li>
              <li>
                <strong>Project Type:</strong> Interior & Finishing Works
              </li>
              <li>
                <strong>Duration:</strong> Ongoing
              </li>
              <li>
                <strong>Area:</strong> Approx. 5,80,000 sq. ft.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Project Overview:</h3>
            <p className="description">
              Ocean Lifespaces is proud to be delivering the interior and
              finishing works for the G+12 T2 Tower at the Innovation Campus,
              Chennai, a flagship workplace for LTI Mindtree. This large-scale
              corporate project represents a fusion of cutting-edge design,
              functionality, and premium finishes, creating an environment that
              fosters productivity and innovation.
            </p>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Objective:</h3>
            <p className="description">
              To execute a world-class interior and finishing project that meets
              the high standards of a leading global IT workspace while ensuring
              efficiency, sustainability, and aesthetic excellence.
            </p>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Approach:</h3>
            <ul>
              <li>
                Collaborative Execution: Working closely with Vestian and
                project stakeholders to ensure seamless delivery.
              </li>
              <li>
                High-Quality Interiors: Implementing premium materials and
                modern design principles.
              </li>
              <li>
                Precision & Efficiency: Managing large-scale execution with
                meticulous planning and project management.
              </li>
              <li>
                Sustainability & Innovation: Integrating eco-friendly solutions
                and cutting-edge technology.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Expected Results:</h3>
            <ul>
              <li>A state-of-the-art flagship workplace for LTI Mindtree.</li>
              <li>Aesthetic, functional, and future-ready interiors.</li>
              <li>Efficient execution within project timelines.</li>
              <li>
                A high-performance work environment promoting innovation and
                collaboration.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Key Takeaways:</h3>
            <ul>
              <li>
                One of the largest interior fit-out projects undertaken by Ocean
                Lifespaces.
              </li>
              <li>
                Excellence in execution through collaboration and precise
                planning.
              </li>
              <li>
                A milestone project reflecting innovation, quality, and
                expertise.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Conclusion:</h3>
            <p className="description">
              This prestigious project underscores Ocean Lifespaces ability to
              deliver large-scale corporate interiors with innovation,
              precision, and excellence. We are excited to shape the future of
              workplace design and set new benchmarks in the industry. Stay
              tuned for more updates!
            </p>
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
        </div>
      </div>
    </section>
  );
}

export default Page;
