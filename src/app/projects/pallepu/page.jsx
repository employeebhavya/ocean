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
              <p className="description">Pallepu</p>
            </div>
            <h2 className="h2">
              Pallepu
              {/* <span className="description">
                40,000 SQ FT General Contract Works, Chennai
              </span> */}
            </h2>
          </div>
          <div className="row1ProjectsInner">
            <Image
              width={500}
              height={200}
              src="/pallepu/p1.png"
              alt="VMware General Contract Works"
            />
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Project Overview:</h3>
            <p className="description">
              Having accumulated an expertise that is incomparable to any other
              player in the industry under the strong guidance and leadership of
              Mr. S.K. Peter, Ocean is a resourcefully structured organization
              backed by well-qualified and veteran professionals. Absorbing and
              translating dreams into winning projects and handing over
              deliverables with utmost quality standards and strict adherence to
              timelines make Ocean the most preferred turnkey contractor in the
              industry.
            </p>
            <p>
              With a firm commitment to enhancing the clients’ satisfaction,
              Ocean believes in transcending quality standards in its every
              initiative. The company lays emphasis on quality excellence and
              timely completion to the fullest satisfaction of the clients that
              bear testimony to this.
            </p>
            <p>
              Ocean has effectively contributed its expertise in providing
              exceptional interior turnkey solutions to plentiful commercial IT
              offices, property developers and many other projects for some of
              the top brasses in the clientele including Kone, Dell, TCS,
              Cognizant, FORD, Royal Bank of Scotland, HSBC, Franklin Templeton,
              eBay, iNautix, Logica, HP, Mahindra & Mahindra, Scope
              International, Tata Communications, First Source Ltd, IBM, Depuy -
              a Johnson & Johnson company, Nokia, Chrysler, Renault, TCS, MTS,
              Danfoss, Bridge i2i, Bharat Benz, Sutherland, ABN Amro, Elsevier,
              Australian Consulate, Convert team, Pfizer, MindTree, Foster
              Wheeler, Robert Bosch, Deutsche Bank, HCL, Cisco, Ajuba, Maersk,
              Fidelity, GE, Nokia Siemens, JFS, Estancia IT Parks, Hexaware,
              Getgo, Payoda, Olam, Phillips, Adobe, [24] 7, Wipro, Data Telesis,
              Alstom, E & Y, Fujitsu, Caterpillar, Olam, Honeywell, Athena
              Health, Cenduit, Groupon, Saint Gobain, Kone, Simpliworks,
              Britannia, Techno soft, XM Software, Amazon, Amadeus, Swiss Re,
              Synaptics, TEK systems and RMZ - Coworks among others.
            </p>
          </div>
          <div className="row3ProjectsInner">
            <Image width={500} height={200} src="/pallepu/p2.png" alt="image" />
            <Image width={500} height={200} src="/pallepu/p3.png" alt="image" />
          </div>
          <div className="row4ProjectsInner">
            <Image width={500} height={200} src="/pallepu/p4.png" alt="image" />
            <Image width={500} height={200} src="/pallepu/p5.png" alt="image" />
          </div>
          <div className="row5ProjectsInner">
            <Image
              width={500}
              height={200}
              src="/pallepu/p6.png"
              alt="Simpliworks Project Interior"
            />
            <Image
              width={500}
              height={200}
              src="/pallepu/p7.png"
              alt="Simpliworks Workspace"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
