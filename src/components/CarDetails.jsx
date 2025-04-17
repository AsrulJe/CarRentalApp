import React,{ useState }from 'react';
import '../dist/detail.css';

const CarDetails = ({ carDetails }) => {
    const [selected, setSelected] = useState('weekly'); // default to first button
  if (!carDetails) return null;

  const bulletPoints = carDetails.equipment || [
    "Air Conditioning",
    "ABS Brakes",
    "Leather Seats",
    "Bluetooth",
    "Backup Camera",
    "Cruise Control",
    "Navigation System",
    "Heated Seats",
  ];



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
        <div className="cars-description">A stylish car to meet your urban needs</div>
        {/* <div className="car-props">
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
        </div> */}
        {/* Table with 3 Columns x 2 Rows */}
        <div className="car-table">
          {[
            {
              icon: '🚗',
              title: 'Body Type',
              desc: carDetails.make,
            },
            {
              icon: '💰',
              title: 'Engine',
              desc: carDetails.cost,
            },
            {
              icon: '⚡',
              title: 'Year Make',
              desc: carDetails.speed,
            },
            {
              icon: '🎨',
              title: 'Seating Capacity',
              desc: carDetails.color,
            },
            {
              icon: '🚘',
              title: 'Fuel Type',
              desc: carDetails.car_type,
            },
            {
              icon: '📄',
              title: 'Location',
              desc: carDetails.description,
            },
          ].map((item, index) => (
            <div className="car-table-item" key={index}>
              <div className="icon">{item.icon}</div>
              <div className="title">{item.title}</div>
              <div className="desc">{item.desc}</div>
            </div>
          ))}
        </div>

        {/* Equipment Section */}
        <div className="equipment-section">
          <h2>EQUIPMENT</h2>
          <div className="equipment-list">
            {bulletPoints.map((item, index) => (
              <div className="equipment-item" key={index}>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="equipment-section">
          <h2>SUBSCRIPTION</h2>
        </div>
        <div className="equipment-section-details">
          Select the duration of your preferred subscription plan. You will enjoy lower monthly rates with longer term
          subscription. Or you can also choose a monthly plan for better flexibility.
          If you need longer terms, we also provide yearly package.
        </div>

        <div className="action-buttons-panel">
          <button
            className={`action-btn-panel ${selected === 'weekly' ? 'selected' : ''}`}
            onClick={() => setSelected('weekly')}
          >
            <div className="action-header">Weekly</div>
            <div className="action-title">RM1,000</div>
            <div className="action-section">/week</div>
          </button>

          <button
            className={`action-btn-panel ${selected === 'monthly' ? 'selected' : ''}`}
            onClick={() => setSelected('monthly')}
          >
            <div className="action-header">Monthly</div>
            <div className="action-title">RM3,500</div>
            <div className="action-section">/Month</div>
          </button>

          <button
            className={`action-btn-panel ${selected === 'yearly' ? 'selected' : ''}`}
            onClick={() => setSelected('yearly')}
          >
            <div className="action-header">Yearly</div>
            <div className="action-title">RM30,000</div>
            <div className="action-section">/Year</div>
          </button>
        </div>

        <div className="equipment-section">
          <h2>MILEAGE</h2>
        </div>
        <div className="equipment-section-details">
          Enjoy greater discounts for mileage when you pre-purchase.
        </div>

        {/* Mileage package Buttons Section */}
        <div className="action-buttons">
          <button className="action-btn">
            <div className="action-header">🚀 3,000km</div>
            <div className="action-title">RM0</div>
            <div className="action-section">/month</div>
          </button>

          <button className="action-btn">
            <div className="action-header">🛠️ Unlimited</div>
            <div className="action-title">RM1,000</div>
            <div className="action-section">/Month</div>
          </button>
        </div>
        <div className="equipment-section-details">
          Excess mileage fee of RM1.22/km chargeable if mileage cap exceeded.
        </div>
        <div className="equipment-section">
          <h2>CAR INSPECTION</h2>
        </div>
        <div className="equipment-section-details">
          Our vehicles undergo a thorough inspection before being carefully selected for listing.
        </div>
      </div>
    </section>
  );
};

export default CarDetails;
