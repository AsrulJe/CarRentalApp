import React, { useState } from 'react';
import '../dist/detail.css';
import { useLocation } from 'react-router-dom';
import Footer from "../components/Footer";

function CarDetails() {
  const location = useLocation();
  const { carDetails } = location.state || {};

  const [selected, setSelected] = useState('weekly');

  if (!carDetails) return <p>No car details available.</p>;

  const bulletPoints = carDetails.equipment || [
    "1.5 Litre CVT Automatic",
    "16-inch Alloy Rims",
    "6 Airbags",
    "7-inch CD/MP3 Player",
    "ABS & EBD",
    "Alarm & Immobiliser",
    "Automatic Climate Control",
    "Bluetooth",
    "Cruise Control",
    "Electronic Stability Control (ESC)",
    "Engine Push Start Button",
    "Folding Wing Mirrors",
    "Front Fog Lamps",
    "G-Design Shift CVT",
    "Halogen Reflector Headlamps",
    "Hill Start Assist",
    "ISOFIX",
    "Keyless Entry",
    "Parking Sensors - Rear Only",
    "Rear Air-Cond Vents",
    "Rear Seats with 60/40 folding",
    "Steering Wheel Audio Controls",
    "Telescopic & Tilt Adjustable Steering Wheel",
    "Wing Mirror Turn Indicators"
  ];

  const carDetailsList = [
    { details: "Body Type", description: "Sedan" },
    { details: "Engine", description: "1.599cc" },
    { details: "Year Make", description: "2018" },
    { details: "Seating Capacity", description: "5" },
    { details: "Fuel Type", description: "Petrol" },
    { details: "Transmission", description: "Automatic" },
    { details: "Location", description: "Damansara, Kuala Lumpur" },
    { details: "Plate Number", description: "ABC 1234" },
    { details: "Color", description: "Silver" },
    { details: "Mileage", description: "30,467 km" },
  ];

  return (
    <section>
            <header className="car-details-header">
        <h1>{carDetails.name}</h1>
      </header>

      <section className="car-details-image-section">
        <img src={carDetails.images.img1} alt={carDetails.name} />
        <p className="car-description">A stylish car to meet your urban needs</p>
      </section>
    <main className="car-details-page">


      <section className="car-specs-section">
        <h2>Specifications</h2>
        <table className="details-table">
          <thead>
            <tr>
              <th>Details</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {carDetailsList.map((item, index) => (
              <tr key={index}>
                <td>{item.details}</td>
                <td>{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="equipment-section">
        <h2>Equipment</h2>
        <div className="equipment-list">
          {bulletPoints.map((item, index) => (
            <div className="equipment-item" key={index}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="subscription-section">
        <h2>Subscription</h2>
        <p>
          Select the duration of your preferred subscription plan. You will enjoy lower monthly rates with longer term
          subscription. Or you can also choose a monthly plan for better flexibility.
          If you need longer terms, we also provide yearly package.
        </p>

        <div className="action-buttons-panel">
          {['weekly', 'monthly', 'yearly'].map(duration => (
            <button
              key={duration}
              className={`action-btn-panel ${selected === duration ? 'selected' : ''}`}
              onClick={() => setSelected(duration)}
            >
              <div className="action-header">{duration.charAt(0).toUpperCase() + duration.slice(1)}</div>
              <div className="action-title">
                {duration === 'weekly' && (
                  <>
                    <span className="rm">RM</span><span className="price">1,000</span>
                  </>
                )}
                {duration === 'monthly' && (
                  <>
                    <span className="rm">RM</span><span className="price">3,500</span>
                  </>
                )}
                {duration === 'yearly' && (
                  <>
                    <span className="rm">RM</span><span className="price">30,000</span>
                  </>
                )}
              </div>
              <div className="action-section">/{duration.charAt(0).toUpperCase() + duration.slice(1)}</div>
            </button>
          ))}
        </div>
      </section>

      <section className="mileage-section">
        <h2>Mileage</h2>
        <p>Enjoy greater discounts for mileage when you pre-purchase.</p>

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
        <p className="equipment-section-details">
          Excess mileage fee of RM1.22/km chargeable if mileage cap exceeded.
        </p>
      </section>

      <section className="inspection-section">
        <h2>Car Inspection</h2>
        <p>
          Our vehicles undergo a thorough inspection before being carefully selected for listing.
        </p>
      </section>


    </main>
    <Footer />
    </section>
    
  );
}

export default CarDetails;
