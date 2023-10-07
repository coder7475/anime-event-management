import { useEffect, useState } from "react"

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('/src/assets/data/services.json')
      .then(res => res.json())
      .then(data => setServices(data));
  }, [])

  return (
    <div >
      <h2 className="text-5xl font-bold mt-20 text-center">
        Our Services: {services.length}
      </h2>
    </div>
  )
}

export default Services;
