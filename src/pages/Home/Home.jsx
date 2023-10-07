import AboutUs from "../../components/AboutUs/AboutUs"
import Banner from "../../components/Banner/Banner"
import Footer from "../../components/Footer/Footer"
import Services from "../../components/Services/Services"
import Team from "../../components/Team/Team"

function Home() {
  return (
    <div>
      <Banner></Banner> 
      <div id="about">
        <AboutUs></AboutUs>   
      </div>
      <Services></Services>
      <Team></Team>
      <Footer></Footer>
    </div>
  )
}

export default Home
