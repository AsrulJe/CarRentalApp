import React, { useState } from 'react';
import { Link } from "react-router-dom";
import CarDetails from '../components/CarDetails';

function CarCard({ image, name, brand, price }) {
    const [showDetails, setShowDetails] = useState(false);
    

    const handleDetailsClick = () => {
        setShowDetails(true);
    };

    const closePopup = () => {
        setShowDetails(false);
    };

    const carInfo = {
        id: Math.floor(Math.random() * 1000), // You can replace this with real ID if available
        name,
        description: 'A stylish and high-performance car that meets all your travel needs.',
        cost: price,
        make: brand,
        car_type: 'Manual',
        speed: '220 km/h',
        color: 'Black',
        images: {
            img1: image,
        },
    };

    return (
        <div className="models-div__box">
            <div className="models-div__box__img">
                <img src={image} alt="car_img" />
                <div className="models-div__box__descr">
                    <div className="models-div__box__descr__name-price">
                        <div className="models-div__box__descr__name-price__name">
                            <p>{name}</p>
                            <span>
                                {[...Array(5)].map((_, i) => (
                                    <i key={i} className="fa-solid fa-star"></i>
                                ))}
                            </span>
                        </div>
                        <div className="models-div__box__descr__name-price__price">
                            <h4>{price}</h4>
                            <p>per day</p>
                        </div>
                    </div>
                    <div className="models-div__box__descr__name-price__details">
                        <span><i className="fa-solid fa-car-side"></i> &nbsp; {brand}</span>
                        <span style={{ textAlign: "right" }}>4/5 &nbsp; <i className="fa-solid fa-car-side"></i></span>
                        <span><i className="fa-solid fa-car-side"></i> &nbsp; Manual</span>
                        <span style={{ textAlign: "right" }}>Diesel &nbsp; <i className="fa-solid fa-car-side"></i></span>
                    </div>
                    <div className="models-div__box__descr__name-price__btn" style={{ display: 'flex', gap: '10px' }}>
                        <Link onClick={() => window.scrollTo(0, 0)} to="/" className="btn-book">
                            Book Ride
                        </Link>
                        <button onClick={handleDetailsClick} className="book">
                            Details
                        </button>
          
                    </div>
                    {showDetails && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <button onClick={closePopup} className="close-popup">X</button>
                        <CarDetails carDetails={carInfo} />
                    </div>
                </div>
            )}
                </div>
            </div>
        </div>
        
    );
}

export default CarCard;
