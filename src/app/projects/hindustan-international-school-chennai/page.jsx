import Image from "next/image";
import Link from "next/link";
import { LuChevronRight } from "react-icons/lu";

export const metadata = {
  title: "Hindustan International School chennai - Ocean Lifespaces Pvt Ltd",
  description:
    "Build for learning! hindustan international school chennai project reflects quality educational construction.",
  keywords: "Hindustan International School chennai",
};

function HindustanInternationalSchool() {
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
                Hindustan International School, Chennai
              </p>
            </div>
            <h2 className="h2">
              Hindustan International School
              {/* <span className="description">Chennai</span> */}
            </h2>
          </div>
          <div className="row1ProjectsInner">
            <Image
              width={500}
              height={200}
              src="/hindustan/p1.png"
              alt="image"
            />
          </div>
          <div className="pageHeader">
            <ul>
              <li>
                <strong>Client:</strong> Hindustan International School
              </li>
              <li>
                <strong>Location:</strong> Chennai, India
              </li>
              <li>
                <strong>Project Type:</strong> Educational Facility
              </li>
              <li>
                <strong>Duration:</strong> 6 Months
              </li>
              <li>
                <strong>Area:</strong> 80,000 sq. ft.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Overview:</h3>
            <p className="description">
              Ocean Lifespaces successfully completed the Hindustan
              International School project, creating a state-of-the-art
              educational facility that fosters innovation and future-ready
              learning.
            </p>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Objective:</h3>
            <p className="description">
              Design a modern, sustainable, and functional learning space with
              efficient infrastructure.
            </p>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Challenges:</h3>
            <ul>
              <li>Strict 6-month timeline</li>
              <li>
                Optimal space utilization for classrooms, offices, and
                recreational areas
              </li>
              <li>
                Incorporating energy-efficient solutions without compromising
                aesthetics
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Approach:</h3>
            <ul>
              <li>
                Collaboration: Worked closely with stakeholders to align with
                the school&apos;s vision
              </li>
              <li>
                Innovative Design: Created an open, flexible layout with natural
                lighting and ventilation
              </li>
              <li>Timely Execution: Ensured on-time delivery within budget</li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Results:</h3>
            <ul>
              <li>
                Modern infrastructure with advanced labs, classrooms, and
                recreational areas
              </li>
              <li>
                High client satisfaction and alignment with educational goals
              </li>
              <li>
                Sustainable features promoting energy efficiency and student
                well-being
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Key Takeaways:</h3>
            <ul>
              <li>
                Delivered high-quality results within time and budget
                constraints
              </li>
              <li>Focused on client collaboration for optimal outcomes</li>
              <li>
                Blended functionality, aesthetics, and sustainability seamlessly
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Conclusion:</h3>
            <p className="description">
              This project showcases Ocean Lifespaces’ expertise in transforming
              educational environments. Stay tuned for more impactful projects!
            </p>
          </div>
          <div className="row3ProjectsInner">
            <Image
              width={500}
              height={200}
              src="/hindustan/p2.png"
              alt="image"
            />
            <Image
              width={500}
              height={200}
              src="/hindustan/p3.png"
              alt="image"
            />
          </div>
          <div className="row4ProjectsInner">
            <Image
              width={500}
              height={200}
              src="/hindustan/p4.png"
              alt="image"
            />
            <Image
              width={500}
              height={200}
              src="/hindustan/p5.png"
              alt="image"
            />
          </div>
          <div className="row5ProjectsInner">
            <Image
              width={500}
              height={200}
              src="/hindustan/p6.png"
              alt="image"
            />
            <Image
              width={500}
              height={200}
              src="/hindustan/p7.png"
              alt="image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HindustanInternationalSchool;
