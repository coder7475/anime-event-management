import { useLoaderData, useParams } from "react-router-dom";

function ServiceDetails() {
  const services = useLoaderData();
  const Id = useParams();
  const service = services.find((service) => service.id === Id.serviceId);
  // console.log(service);
  const { name, image, price, description } = service;
  console.log(name);
  return (
    <div className="relative flex w-full max-w-5xl mx-auto flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mb-20 mt-10 ">
      <div className="relative shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
        <figure className="h-2/3">
          <img src={image} alt="image" className="w-full h-[650px]" />
        </figure>
      </div>
      <div className="p-6">
        <h6 className="mb-4 block  text-2xl font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
          {price}
        </h6>
        <h4 className="mb-2 block  text-3xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {name}
        </h4>
        <p className="mb-8 block  text-xl font-normal leading-relaxed text-gray-700 antialiased">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ServiceDetails;
