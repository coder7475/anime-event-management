import AboutUs from "../../components/AboutUs/AboutUs"
import Banner from "../../components/Banner/Banner"

function Home() {
  return (
    <div>
      <Banner></Banner> 
      <div id="about">
        <AboutUs></AboutUs>   
      </div>
    </div>
  )
}

export default Home
