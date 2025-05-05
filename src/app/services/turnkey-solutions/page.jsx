import RecentProjects from "../../../componentsInnerServices/RecentProjects";
import HeaderInnerServices from "../../../componentsInnerServices/HeaderInnerServices";
import Newsletter from "../../../components/Newsletter";

export const metadata = {
  title: "Turnkey Construction Solutions in Chennai - Ocean Lifespaces Pvt Ltd",
  description:
    "Go turnkey! turnkey solutions in chennai by Ocean Lifespaces deliver full-cycle project success.",
  keywords: "Turnkey Solutions in Chennai",
};

function TurkneySolutions() {
  // Define the dynamic content here
  const highlights = [
    { img: "/services/paintbrush.png", text: "Design and Conceptualization" },
    { img: "/services/code.png", text: "Procurement and Sourcing" },
    // { img: "/services/presentation.png", text: "Project Management" },
    { img: "/services/receipt-text.png", text: "General Contracting Works" },
    { img: "/services/lamp-desk.png", text: "Interior Works" },
    { img: "/services/brick-wall.png", text: "Construction & Execution" },
    { img: "/services/shield-check.png", text: "Final Handover" },
  ];
  const page3Projects = [
    {
      imgSrc: "/services/danfoss.jpg",
      title: "Danfoss",
    },
    {
      imgSrc: "/services/zoho.jpg",
      title: "Zoho Estancia",
    },
    {
      imgSrc: "/services/ford.jpg",
      title: "Ford",
    },
    {
      imgSrc: "/services/gecapital.jpg",
      title: "GE Capital",
    },
    {
      imgSrc: "/services/hp.jpg",
      title: "HP",
    },
    {
      imgSrc: "/services/hsbc.jpg",
      title: "HSBC",
    },
    {
      imgSrc: "/services/kbr.jpg",
      title: "KBR",
    },
    {
      imgSrc: "/services/kmpg.jpg",
      title: "KPMG",
    },
    {
      imgSrc: "/services/nvidia.jpg",
      title: "Nvidia",
    },
    {
      imgSrc: "/services/pharmed.jpg",
      title: "Pharmed",
    },
    {
      imgSrc: "/services/pwc.jpg",
      title: "PWC",
    },
    {
      imgSrc: "/services/shell.jpg",
      title: "Shell",
    },
    {
      imgSrc: "/services/siliconlab.jpg",
      title: "Silicon Lab",
    },
    {
      imgSrc: "/services/simpliworks.jpg",
      title: "Simpliworks",
    },
    {
      imgSrc: "/services/247.jpg",
      title: "24/7",
    },
    {
      imgSrc: "/services/dell.jpg",
      title: "Dell",
    },
    {
      imgSrc: "/services/hdfc.jpg",
      title: "HDFC",
    },
  ];

  return (
    <>
      <HeaderInnerServices
        pageTitle="Turnkey Solutions"
        serviceTitle="Turnkey Solutions"
        mainDescription="Complete Turnkey Solutions for Seamless Project Execution"
        highlights={highlights}
        rightImage1="/services/turnkey1.png"
        companyDescription1="Ocean provides comprehensive turnkey solutions, handling every aspect of your project from initial concept to final completion. Our team works closely with you to ensure that your project is executed seamlessly, meeting your specific requirements, timelines, and budget. Whether it's a new build or a renovation, we guarantee a hassle-free experience with a focus on high-quality results and effective project management."
        // companyDescription2="Having achieved a dominant position in the industry and having won the heart of numerous clients, Ocean has gathered all its expertise and grabbed opportunities for innovation and faster project delivery as one unified flow of work from initial concept through completion."
        leftImage2="/services/turnkey2.png"
        rightImage2="/services/turnkey-float.png"
        clientsList="Our turnkey approach takes the burden off your shoulders, managing everything from procurement to construction and final handover. This ensures that your project runs smoothly and delivers the expected results with minimal disruption to your operations. We prioritize safety, efficiency, and environmental sustainability in every project, ensuring that every detail is meticulously managed."
        transformationText="From concept to completion, our turnkey solutions handle every aspect of your project. We deliver end-to-end services, ensuring seamless execution and timely delivery, tailored to your specific requirements."
      />
      <RecentProjects projects={page3Projects} />
      <Newsletter />
    </>
  );
}

export default TurkneySolutions;
