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
                Autodesk - 1,50,000 SQ FT General Contract Works, Bangalore
              </p>
            </div>
            <h2 className="h2">
              Autodesk
              {/* <span className="description">
                1,50,000 SQ FT General Contract Works, Bangalore
              </span> */}
            </h2>
          </div>
          <div className="row1ProjectsInner">
            <Image
              width={500}
              height={200}
              src="/projectsOcean/pi1.webp"
              alt="Autodesk General Contract Works"
            />
          </div>
          <div className="pageHeader">
            <ul>
              <li>
                <strong>Client:</strong> Autodesk
              </li>
              <li>
                <strong>Location:</strong> Bangalore, India
              </li>
              <li>
                <strong>Project Type:</strong> General Contract Works
              </li>
              <li>
                <strong>Duration:</strong> Confidential
              </li>
              <li>
                <strong>Area:</strong> 1,50,000 sq. ft.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Project Overview:</h3>
            <p className="description">
              The Autodesk project in Bangalore, spanning 1,50,000 sq. ft.,
              involved general contract works to develop a cutting-edge
              workspace that aligned with modern corporate standards. The
              project required a comprehensive approach to construction,
              infrastructure enhancement, and space optimization to create a
              highly functional and visually appealing workspace.
            </p>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Objective:</h3>
            <ul>
              <li>
                Deliver a state-of-the-art workspace that meets Autodesk&apos;s
                corporate requirements.
              </li>
              <li>
                Ensure seamless execution of general contract works, including
                civil, electrical, and finishing aspects.
              </li>
              <li>
                Optimize space utilization for maximum efficiency and
                productivity.
              </li>
              <li>
                Maintain high-quality standards while ensuring timely project
                completion.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Approach:</h3>
            <ul>
              <li>
                Developed a structured execution plan to manage all aspects of
                general contract works.
              </li>
              <li>
                Ensured seamless coordination among different teams, including
                civil, electrical, and interior specialists.
              </li>
              <li>
                Used high-quality materials to ensure durability and aesthetic
                appeal.
              </li>
              <li>
                Implemented advanced construction techniques to enhance
                efficiency.
              </li>
              <li>
                Conducted periodic quality checks to ensure compliance with
                safety and industry standards.
              </li>
              <li>
                Executed the project in a phased manner to meet deadlines and
                delivered a fully functional workspace.
              </li>
            </ul>
          </div>
          <div className="row3ProjectsInner">
            <Image
              width={500}
              height={200}
              src="/projectsOcean/pi2.webp"
              alt="Autodesk General Contract Works Image 1"
            />
            <Image
              width={500}
              height={200}
              src="/projectsOcean/pi3.webp"
              alt="Autodesk General Contract Works Image 2"
            />
          </div>
          <div className="row4ProjectsInner">
            <Image
              width={500}
              height={200}
              src="/projectsOcean/pi4.webp"
              alt="Autodesk General Contract Works Image 3"
            />
            <Image
              width={500}
              height={200}
              src="/projectsOcean/pi5.webp"
              alt="Autodesk General Contract Works Image 4"
            />
          </div>
          <div className="row5ProjectsInner">
            <Image
              width={500}
              height={200}
              src="/projectsOcean/pi6.webp"
              alt="Autodesk General Contract Works Image 5"
            />
            <Image
              width={500}
              height={200}
              src="/projectsOcean/pi7.webp"
              alt="Autodesk General Contract Works Image 6"
            />
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Result:</h3>
            <ul>
              <li>
                Successfully completed the 1,50,000 sq. ft. workspace, meeting
                Autodesk’s corporate standards.
              </li>
              <li>
                Enhanced space utilization with a smart and efficient layout.
              </li>
              <li>
                Achieved high-quality finishes and compliance with safety
                regulations.
              </li>
              <li>
                Delivered the project on time and within budget, ensuring client
                satisfaction.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Key Takeaways:</h3>
            <ul>
              <li>
                Efficient project planning and execution are essential for
                large-scale general contract works.
              </li>
              <li>
                Coordination between multiple teams ensures smooth workflow and
                timely completion.
              </li>
              <li>
                High-quality materials and compliance standards contribute to
                long-term project sustainability.
              </li>
              <li>
                Strategic space utilization enhances employee productivity and
                workplace efficiency.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Conclusion:</h3>
            <p className="description">
              The Autodesk project in Bangalore is a reflection of Ocean
              Lifespaces expertise in executing large-scale general contract
              works. The successful completion of this project reinforces our
              commitment to delivering high-quality, functional, and sustainable
              workspaces tailored to client needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
