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
                R1 RCM – 51,000 SQ FT Design & Build Works, Chennai
              </p>
            </div>
            <h2 className="h2">
              R1 RCM
              {/* <span className="description">
                51,000 SQ FT Design & Build Works, Chennai
              </span> */}
            </h2>
          </div>
          <div className="row1ProjectsInner">
            <img src="/rircm/p1.png" alt="R1 RCM Design & Build Works" />
          </div>
          <div className="pageHeader">
            <ul>
              <li>
                <strong>Client:</strong> R1 RCM
              </li>
              <li>
                <strong>Location:</strong> Chennai, India
              </li>
              <li>
                <strong>Project Type:</strong> Design & Build Works
              </li>
              <li>
                <strong>Area:</strong> 51,000 sq. ft.
              </li>
              <li>
                <strong>Value:</strong> ₹10 Crore
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Project Overview:</h3>
            <p className="description">
              Ocean Lifespaces successfully completed the R1 RCM facility in
              Chennai, a project that focused on creating a dynamic and
              collaborative workspace. The goal was to design and build a modern
              office environment that fosters productivity, collaboration, and
              innovation, aligned with R1 RCMs business needs and vision.
            </p>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Objective:</h3>
            <ul>
              <li>
                Create an office that enhances employee efficiency and supports
                R1 RCM’s operational requirements.
              </li>
              <li>Maintain aesthetic appeal and a sustainable environment.</li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Approach:</h3>
            <ul>
              <li>
                <strong>Client Collaboration:</strong> Worked closely with R1
                RCM to understand their needs and culture, ensuring the design
                reflected their values and business processes.
              </li>
              <li>
                <strong>Innovative Design:</strong> Developed a creative and
                flexible office layout with an emphasis on open spaces,
                collaboration zones, and private workstations.
              </li>
              <li>
                <strong>Sustainable Practices:</strong> Integrated eco-friendly
                elements, energy-efficient systems, and materials to create a
                green, sustainable environment.
              </li>
              <li>
                <strong>Timely Execution:</strong> Managed the entire project
                within the ₹10 Crore budget and a strict timeline to ensure
                on-time delivery.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Result:</h3>
            <ul>
              <li>
                <strong>Modern Workspace:</strong> The facility now boasts a
                contemporary office design with flexible workspaces that enhance
                collaboration and productivity.
              </li>
              <li>
                <strong>Increased Employee Engagement:</strong> The design
                encourages interaction, creativity, and a sense of community
                among employees.
              </li>
              <li>
                <strong>Client Satisfaction:</strong> R1 RCM was impressed with
                the seamless execution of the project, within budget and
                timeline, reflecting Ocean Lifespaces’ commitment to quality and
                client satisfaction.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Key Takeaways:</h3>
            <ul>
              <li>
                Successful execution of a large-scale office design & build
                project.
              </li>
              <li>
                Focused on creating a flexible, collaborative workspace for
                improved employee engagement.
              </li>
              <li>Delivered within the stipulated budget and timeline.</li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Conclusion:</h3>
            <p className="description">
              This project underscores Ocean Lifespaces expertise in delivering
              innovative and functional office spaces that align with client
              goals, fostering creativity, collaboration, and operational
              efficiency.
            </p>
          </div>
          <div className="row3ProjectsInner">
            <img src="/rircm/p2.png" alt="R1 RCM Design & Build Works" />
            <img src="/rircm/p3.png" alt="R1 RCM Design & Build Works" />
          </div>
          <div className="row4ProjectsInner">
            <img src="/rircm/p4.png" alt="R1 RCM Design & Build Works" />
            <img src="/rircm/p5.png" alt="R1 RCM Design & Build Works" />
          </div>
          <div className="row5ProjectsInner">
            <img src="/rircm/p6.png" alt="R1 RCM Design & Build Works" />
            <img src="/rircm/p7.png" alt="R1 RCM Design & Build Works" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
