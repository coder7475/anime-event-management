function ServiceCard({ service }) {
  const { name, image, price, description} = service;
  return (
    <div className="card bg-base-100 border-2 justify-center items-center">
      <figure className="px-10 pt-10 w-full">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl h-44 w-full"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
