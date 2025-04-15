import React from 'react';
import '../dist/detail.css';

const CarDetails = ({ carDetails }) => {
  if (!carDetails) return null;

  return (
    <section>
      <div key={carDetails.id} className="card">
      <div className="cars-name">
            <h1> {carDetails.name} </h1>
          </div>
        <div className="cars-image">
          <img
            src={carDetails.images[Object.keys(carDetails.images)[0]]}
            alt={carDetails.name}
          />
          {/* <div className="configure">
            <button type="button">
              Configure
            </button>
          </div> */}
        </div>
        <div className="cars-description">{carDetails.description}</div>
        <div className="car-props">
        <span>
              <i>
                $-{carDetails.cost} upon reservations!
              </i>
            </span>
          <div className="cars-make">
            <span>Make: {carDetails.make}</span>
          </div>
          <div className="cars-type">
            <span>Type: {carDetails.car_type}</span>
          </div>
          <div className="cars-cost">
            <span>Cost: {carDetails.cost}</span>
          </div>
          <div className="cars-speed">
            <span>Speed: {carDetails.speed}</span>
          </div>
          <div className="cars-color">
            <span>Color: {carDetails.color}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarDetails;
