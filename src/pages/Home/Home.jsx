import { useEffect } from "react";
import AboutUs from "../../components/AboutUs/AboutUs";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Services from "../../components/Services/Services";
import Team from "../../components/Team/Team";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <ToastContainer/>
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="10000"
      >
        <Banner></Banner>
      </div>
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="10000"
      >
        <AboutUs></AboutUs>
      </div>
      <div data-aos="fade-up">
        <Services></Services>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-back">
        <Team></Team>
      </div>
      <div data-aos="fade-down" data-aos-duration="1000" >
        <Footer></Footer>
      </div>
    </>
  );
}

export default Home;
