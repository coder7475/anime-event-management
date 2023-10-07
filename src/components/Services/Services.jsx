import { useEffect, useState } from "react"
import ServiceCard from "../ServiceCard/ServiceCard";

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('/src/assets/data/services.json')
      .then(res => res.json())
      .then(data => setServices(data));
  }, [])

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-5xl font-bold mt-20 text-center">
        Our Services: {services.length}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)}
      </div>
    </div>
  )
}

export default Services;
