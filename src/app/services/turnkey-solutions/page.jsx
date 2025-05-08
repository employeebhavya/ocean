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
    { img: "/services/paintbrush.webp", text: "Design and Conceptualization" },
    { img: "/services/code.webp", text: "Procurement and Sourcing" },
    // { img: "/services/presentation.webp", text: "Project Management" },
    { img: "/services/receipt-text.webp", text: "General Contracting Works" },
    { img: "/services/lamp-desk.webp", text: "Interior Works" },
    { img: "/services/brick-wall.webp", text: "Construction & Execution" },
    { img: "/services/shield-check.webp", text: "Final Handover" },
  ];
  const page3Projects = [
    {
      imgSrc: "/services/danfoss.webp",
      title: "Danfoss",
    },
    {
      imgSrc: "/services/zoho.webp",
      title: "Zoho Estancia",
    },
    {
      imgSrc: "/services/ford.webp",
      title: "Ford",
    },
    {
      imgSrc: "/services/gecapital.webp",
      title: "GE Capital",
    },
    {
      imgSrc: "/services/hp.webp",
      title: "HP",
    },
    {
      imgSrc: "/services/hsbc.webp",
      title: "HSBC",
    },
    {
      imgSrc: "/services/kbr.webp",
      title: "KBR",
    },
    {
      imgSrc: "/services/kmpg.webp",
      title: "KPMG",
    },
    {
      imgSrc: "/services/nvidia.webp",
      title: "Nvidia",
    },
    {
      imgSrc: "/services/pharmed.webp",
      title: "Pharmed",
    },
    {
      imgSrc: "/services/pwc.webp",
      title: "PWC",
    },
    {
      imgSrc: "/services/shell.webp",
      title: "Shell",
    },
    {
      imgSrc: "/services/siliconlab.webp",
      title: "Silicon Lab",
    },
    {
      imgSrc: "/services/simpliworks.webp",
      title: "Simpliworks",
    },
    {
      imgSrc: "/services/247.webp",
      title: "24/7",
    },
    {
      imgSrc: "/services/dell.webp",
      title: "Dell",
    },
    {
      imgSrc: "/services/hdfc.webp",
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
        rightImage1="/services/turnkey1.webp"
        companyDescription1="Ocean provides comprehensive turnkey solutions, handling every aspect of your project from initial concept to final completion. Our team works closely with you to ensure that your project is executed seamlessly, meeting your specific requirements, timelines, and budget. Whether it's a new build or a renovation, we guarantee a hassle-free experience with a focus on high-quality results and effective project management."
        // companyDescription2="Having achieved a dominant position in the industry and having won the heart of numerous clients, Ocean has gathered all its expertise and grabbed opportunities for innovation and faster project delivery as one unified flow of work from initial concept through completion."
        leftImage2="/services/turnkey2.webp"
        rightImage2="/services/turnkey-float.webp"
        clientsList="Our turnkey approach takes the burden off your shoulders, managing everything from procurement to construction and final handover. This ensures that your project runs smoothly and delivers the expected results with minimal disruption to your operations. We prioritize safety, efficiency, and environmental sustainability in every project, ensuring that every detail is meticulously managed."
        transformationText="From concept to completion, our turnkey solutions handle every aspect of your project. We deliver end-to-end services, ensuring seamless execution and timely delivery, tailored to your specific requirements."
      />
      <RecentProjects projects={page3Projects} />
      <Newsletter />
    </>
  );
}

export default TurkneySolutions;
