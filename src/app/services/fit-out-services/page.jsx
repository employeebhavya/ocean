import RecentProjects from "../../../componentsInnerServices/RecentProjects";
import HeaderInnerServices from "../../../componentsInnerServices/HeaderInnerServices";
import Newsletter from "../../../components/Newsletter";

function FitOuts() {
  // Define the dynamic content here
  const highlights = [
    { img: "/services/lamp-desk.png", text: "Office Fit-Outs" },
    { img: "/services/store.png", text: "Retail Fit-Outs" },
    { img: "/services/hospital.png", text: "Hospitality Fit-Outs" },
    { img: "/services/lamp.png", text: "Interior Refurbishments" },
    { img: "/services/blocks.png", text: "Design & Build Services" },
  ];

  const page4Projects = [
    {
      imgSrc: "/serviceinner/HDFC.png",
      title: "HDFC",
      location: "Chennai, India",
    },
    {
      imgSrc: "/serviceinner/Ajuba.png",
      title: "Ajuba",
      location: "Chennai, India",
    },
    {
      imgSrc: "/serviceinner/Bray-Controls.png",
      title: "Bray Control",
      location: "Chennai, India",
    },
    {
      imgSrc: "/serviceinner/olam.png",
      title: "Olam",
      location: "Chennai, India",
    },
    {
      imgSrc: "/serviceinner/Maesrk.png",
      title: "Maesrk",
      location: "Chennai, India",
    },
    {
      imgSrc: "/serviceinner/Swiss-Re.png",
      title: "Swiss Re",
      location: "Chennai, India",
    },
    {
      imgSrc: "/serviceinner/PWC.png",
      title: "PWC",
      location: "Chennai, India",
    },
    {
      imgSrc: "/serviceinner/Pharmed.png",
      title: "Pharmed",
      location: "Chennai, India",
    },
    {
      imgSrc: "/serviceinner/Shell.png",
      title: "Shell",
      location: "Chennai, India",
    },
  ];

  return (
    <>
      <HeaderInnerServices
        pageTitle="Fit Outs"
        serviceTitle="Fit Outs"
        mainDescription="Tailored Fit-Out Solutions to Transform Your Space."
        highlights={highlights}
        rightImage1="/services/fitout1.png"
        companyDescription1="Ocean specializes in delivering high-quality fit-out solutions that are customized to your specific needs. Whether you are renovating an office, retail space, or hospitality venue, our fit-out services ensure that every space is functional, stylish, and built to suit your business’s goals. We collaborate with you throughout the design and build process to ensure your vision is realized."
        // companyDescription2="Having achieved a dominant position in the industry and having won the heart of numerous clients, Ocean has gathered all its expertise and grabbed opportunities for innovation and faster project delivery as one unified flow of work from initial concept through completion."
        leftImage2="/services/fitout2.png"
        rightImage2="/services/design3.png"
        clientsList="From creating modern and ergonomic office spaces to refreshing retail environments, our fit-out services prioritize both aesthetics and practicality. We combine our expertise in interior design and construction to deliver solutions that meet your needs while also promoting operational efficiency and brand alignment. Whether it's a small refurbishment or a large-scale fit-out, we deliver exceptional results."
        transformationText="Transform your area with our design and accessory services, which combine expert advice and carefully chosen options to create a home that reflects your own style and personality."
      />
      <RecentProjects projects={page4Projects} />
      <Newsletter />
    </>
  );
}

export default FitOuts;
