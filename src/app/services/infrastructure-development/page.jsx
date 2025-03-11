import RecentProjects from "../../../componentsInnerServices/RecentProjects";
import HeaderInnerServices from "../../../componentsInnerServices/HeaderInnerServices";
import Newsletter from "../../../components/Newsletter";

function InfrastructureDevelopment() {
  // Define the dynamic content here
  const highlights = [
    { img: "/services/coins.png", text: "Transportation Infrastructure" },
    { img: "/services/waves.png", text: "Utilities & Water Management" },
    { img: "/services/zap.png", text: "Energy Infrastructure" },
    { img: "/services/train-front.png", text: "Urban Infrastructure" },
    { img: "/services/ship.png", text: "Marine Infrastructure Development" },
  ];

  const page5Projects = [
    {
      imgSrc: "/services/marine-slide-1.png",
      title: "Project One",
      location: "Chennai, India",
    },
    {
      imgSrc: "/services/marine-slide-2.png",
      title: "Project Two",
      location: "Chennai, India",
    },
    {
      imgSrc: "/services/marine-slide-1.png",
      title: "Project Three",
      location: "Chennai, India",
    },
  ];

  return (
    <>
      <HeaderInnerServices
        pageTitle="Infrastructure Development"
        serviceTitle="Infrastructure Development"
        mainDescription="Innovative Infrastructure Solutions for a Sustainable Future."
        highlights={highlights}
        rightImage1="/services/infra1.png"
        companyDescription1="Ocean leads the way in infrastructure development, offering cutting-edge solutions for both urban and rural projects. Our focus is on building sustainable, long-lasting infrastructure that supports growth, improves quality of life, and enhances economic development. We specialize in transportation, utilities, and energy infrastructure, ensuring that all projects contribute to a better future."
        // companyDescription2="Having achieved a dominant position in the industry and having won the heart of numerous clients, Ocean has gathered all its expertise and grabbed opportunities for innovation and faster project delivery as one unified flow of work from initial concept through completion."
        leftImage2="/services/infra2.png"
        rightImage2="/services/design3.png"
        clientsList="Our infrastructure solutions include everything from road construction and utilities to energy distribution and urban planning. We are committed to integrating sustainable practices in every project to minimize environmental impact while ensuring that the infrastructure we build is robust and future-ready."
        transformationText="We develop resilient infrastructure, from roads to large-scale public projects, ensuring innovation, sustainability, and excellence for a better future."
      />
      {/* <RecentProjects projects={page5Projects} /> */}
      <Newsletter />
    </>
  );
}

export default InfrastructureDevelopment;
