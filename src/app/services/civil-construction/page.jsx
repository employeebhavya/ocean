import RecentProjects from "../../../componentsInnerServices/RecentProjects";
import HeaderInnerServices from "../../../componentsInnerServices/HeaderInnerServices";
import Newsletter from "../../../components/Newsletter";

function CivilConstruction() {
  // Define the dynamic content here
  const highlights = [
    { img: "/services/house.png", text: "Residential Construction" },
    { img: "/services/hotel.png", text: "Commercial Construction" },
    { img: "/services/factory.png", text: "Industrial Construction" },
    { img: "/services/pickaxe.png", text: "Earthworks & Excavation" },
    { img: "/services/ship.png", text: "Marine Infrastructure Construction" },
  ];

  const page2Projects = [
    {
      imgSrc: "/services/civil-slide-1.png",
      title: "Project One",
      location: "Chennai, India",
    },
    {
      imgSrc: "/services/civil-slide-2.png",
      title: "Project Two",
      location: "Chennai, India",
    },
    {
      imgSrc: "/services/civil-slide-1.png",
      title: "Project Three",
      location: "Chennai, India",
    },
  ];

  return (
    <>
      <HeaderInnerServices
        pageTitle="Civil Construction"
        serviceTitle="Civil Construction"
        mainDescription="Reliable Civil Construction Services for Every Project."
        highlights={highlights}
        rightImage1="/services/civilinner1.png"
        companyDescription1="Ocean’s civil construction services cover a wide range of projects, from residential buildings to commercial and industrial developments. Our team combines technical expertise with innovative solutions to deliver high-quality infrastructure that stands the test of time. We manage each project with a focus on safety, sustainability, and adherence to all regulatory standards."
        // companyDescription2="Having achieved a dominant position in the industry and having won the heart of numerous clients, Ocean has gathered all its expertise and grabbed opportunities for innovation and faster project delivery as one unified flow of work from initial concept through completion."
        leftImage2="/services/civilinner2.png"
        rightImage2="/services/design3.png"
        clientsList="Whether it’s building homes, offices, or specialized industrial facilities, we ensure that each project is completed to the highest standards. Our civil construction services extend to site preparation, foundation work, and beyond, ensuring that every phase of the construction process is completed with precision. We also provide tailored solutions for unique project requirements."
        transformationText="We bring excellence to civil construction, delivering durable and innovative structures, from commercial complexes to large-scale developments. Our commitment to precision engineering, timely execution, and sustainability ensures superior quality in every project."
      />
      {/* <RecentProjects projects={page2Projects} /> */}
      <Newsletter />
    </>
  );
}

export default CivilConstruction;
