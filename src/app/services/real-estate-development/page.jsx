import RecentProjects from "../../../componentsInnerServices/RecentProjects";
import HeaderInnerServices from "../../../componentsInnerServices/HeaderInnerServices";
import Newsletter from "../../../components/Newsletter";

function RealEstateDevelopment() {
  // Define the dynamic content here
  const highlights = [
    { img: "/services/land-plot.png", text: "Property Development" },
    { img: "/services/coins.png", text: "Real Estate Investment" },
    // { img: "/services/square-chart-gantt.png", text: "Property Management" },
    // { img: "/services/hand-coins.png", text: "Sales & Leasing" },
    {
      img: "/services/blocks.png",
      text: "Design & Build (Real Estate Projects)",
    },
  ];
  const page1Projects = [
    {
      imgSrc: "/services/slide-1.png",
      title: "Project One",
      location: "Chennai, India",
    },
    {
      imgSrc: "/services/slide-2.png",
      title: "Project Two",
      location: "Chennai, India",
    },
    {
      imgSrc: "/services/slide-1.png",
      title: "Project Three",
      location: "Chennai, India",
    },
  ];
  return (
    <>
      <HeaderInnerServices
        pageTitle="Real Estate Development"
        serviceTitle="Real Estate Development"
        mainDescription="Comprehensive Real Estate Solutions for Buyers and Sellers."
        highlights={highlights}
        rightImage1="/services/re1.png"
        companyDescription1="Ocean offers a full range of real estate services, from property development and investment advice to property management and sales. Our real estate experts guide you through every step of the process, ensuring you make informed decisions that maximize returns and minimize risk. We have extensive experience in both residential and commercial properties, allowing us to deliver tailored solutions that meet the needs of diverse clients."
        // companyDescription2="With a firm commitment to enhancing the clients’ satisfaction, Ocean believes in transcending quality standards in its every initiative. The company lays emphasis on quality excellence and timely completion to the fullest satisfaction of the clients that bear testimony to this."
        leftImage2="/services/re2.png"
        rightImage2="/services/re3.png"
        clientsList="We also specialize in property management services, ensuring your assets are well-maintained, tenants are satisfied, and your investment provides long-term value. Our team of professionals is committed to helping you achieve your real estate goals, whether you're looking to buy, sell, lease, or invest in properties."
        transformationText="We create exceptional residential and commercial spaces with strategic planning, innovative design, and superior construction."
      />
      {/* <RecentProjects projects={page1Projects} /> */}
      <Newsletter />
    </>
  );
}

export default RealEstateDevelopment;
