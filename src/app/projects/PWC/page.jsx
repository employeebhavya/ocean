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
                PWC 30,000 SQ FT General Contract, Chennai
              </p>
            </div>
            <h2 className="h2">
              PWC
              {/* <span className="description">
                30,000 SQ FT General Contract, Chennai
              </span> */}
            </h2>
          </div>
          <div className="row1ProjectsInner">
            <img src="/pwc/p1.png" alt="PWC General Contract" />
          </div>
          <div className="pageHeader">
            <ul>
              <li>
                <strong>Client:</strong> PricewaterhouseCoopers (PWC)
              </li>
              <li>
                <strong>Location:</strong> Chennai, India
              </li>
              <li>
                <strong>Project Type:</strong> General Contract
              </li>
              <li>
                <strong>Area:</strong> 30,000 sq. ft.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Project Overview:</h3>
            <p className="description">
              Ocean Lifespaces successfully delivered the PWC office space
              project in Chennai, focused on providing a modern and functional
              workplace. As a general contractor, the scope included managing
              all aspects of construction, ensuring a streamlined process from
              start to finish. The objective was to create a space that
              encourages productivity while aligning with PWCs global brand
              standards.
            </p>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Objective:</h3>
            <ul>
              <li>
                Design and build an office space that enhances employee
                collaboration.
              </li>
              <li>
                Support PWC’s business operations and incorporate modern
                infrastructure to reflect the company’s global image.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Approach:</h3>
            <ul>
              <li>
                <strong>Client Collaboration:</strong> Close collaboration with
                PWC ensured that the design and execution were aligned with
                their brand values and operational needs.
              </li>
              <li>
                <strong>General Contracting:</strong> As the general contractor,
                Ocean Lifespaces managed all aspects of the construction
                process, ensuring timely execution and quality control.
              </li>
              <li>
                <strong>Efficient Space Planning:</strong> A thoughtful design
                layout was implemented to maximize space utilization and enhance
                workplace functionality.
              </li>
              <li>
                <strong>Seamless Execution:</strong> The project was managed
                efficiently, with attention to detail, to deliver a high-quality
                workspace within the specified timeline.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Result:</h3>
            <ul>
              <li>
                <strong>Functional Workspaces:</strong> The facility features a
                modern design that maximizes efficiency and supports
                collaboration among employees.
              </li>
              <li>
                <strong>Enhanced Work Environment:</strong> The layout enhances
                workflow, providing a comfortable and professional environment
                for employees and clients.
              </li>
              <li>
                <strong>Client Satisfaction:</strong> PWC was pleased with the
                smooth execution and the high-quality finished product,
                highlighting the team’s ability to deliver on schedule.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Key Takeaways:</h3>
            <ul>
              <li>
                Successfully delivered a high-quality office space as a general
                contractor.
              </li>
              <li>
                Focused on efficient space utilization and modern office design.
              </li>
              <li>
                Client satisfaction was achieved through timely execution and
                attention to quality.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Conclusion:</h3>
            <p className="description">
              This project highlights Ocean Lifespaces expertise in managing
              general contracting projects and delivering functional, modern
              workspaces that align with client needs and global standards.
            </p>
          </div>
          <div className="row3ProjectsInner">
            <img src="/pwc/p2.png" alt="PWC General Contract" />
            <img src="/pwc/p3.png" alt="PWC General Contract" />
          </div>
          <div className="row4ProjectsInner">
            <img src="/pwc/p4.png" alt="PWC General Contract" />
            <img src="/pwc/p5.png" alt="PWC General Contract" />
          </div>
          <div className="row5ProjectsInner">
            <img src="/pwc/p6.png" alt="PWC General Contract" />
            <img src="/pwc/p7.png" alt="PWC General Contract" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
