import AboutUs from "../../components/AboutUs/AboutUs"
import Banner from "../../components/Banner/Banner"
import Services from "../../components/Services/Services"

function Home() {
  return (
    <div>
      <Banner></Banner> 
      <div id="about">
        <AboutUs></AboutUs>   
      </div>
      <Services></Services>
    </div>
  )
}

export default Home
