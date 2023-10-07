import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

function ServiceCard({ service }) {
  console.log(typeof service);
  const { id, name, image, price, description } = service;
  return (
    <div className="card justify-center items-center shadow-xl ">
      <figure className="px-10 pt-10 w-full">
        <img src={image} alt="Shoes" className="rounded-xl h-44 w-full" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl text-persianGreen font-bold h-16">{name}</h2>
        <h6 className="text-2xl text-saffron">
          <span className="font-semibold text-sandyBrown h-10">Price</span>: {price}
        </h6>
        <p className="text-xl font-medium h-28">{description}</p>
        <div className="card-actions">
          <button className="btn bg-burntSienna text-white text-lg font-semibold">
            <NavLink to={`/${id}`}>View Details</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}

ServiceCard.propTypes = {
  service: PropTypes.object,
}


export default ServiceCard;

