import AboutUs from "../../components/AboutUs/AboutUs"
import Banner from "../../components/Banner/Banner"
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
    </div>
  )
}

export default Home
