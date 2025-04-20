import React, { useState } from 'react';
import { Link } from "react-router-dom";
import CarDetails from '../components/CarDetails';
import { useNavigate } from 'react-router-dom';

function CarCard({ image, name, brand, price, transmission, fuelType }) {
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
        description: 'Damansara, Kuala Lumpur',
        cost: "1,499 cc",
        make: "Sedan",
        car_type: 'Petrol',
        speed: '2012',
        color: '5',
        images: {
            img1: image,
        },
        transmission: transmission,
        fuel: fuelType
    };

    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate('/car-details', { state: { carDetails: carInfo } });
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
                            <p>per month</p>
                        </div>
                    </div>
                    <div className="models-div__box__descr__name-price__details">
                        <span><i className="fa-solid fa-car-side"></i> &nbsp; {brand}</span>
                        <span style={{ textAlign: "right" }}>4/5 &nbsp; <i className="fa-solid fa-car-side"></i></span>
                        <span><i className="fa-solid fa-car-side"></i> &nbsp; {transmission}</span>
                        <span style={{ textAlign: "right" }}>{fuelType} &nbsp; <i className="fa-solid fa-car-side"></i></span>
                    </div>
                    <div className="model-content">
                        <div className="models-div__box__descr__name-price__btn" style={{ display: 'flex', gap: '10px' }}>
                            <Link onClick={() => window.scrollTo(0, 0)} to="/" className="btn-book">
                                Book Ride
                            </Link>

                        </div>
                        <div className="models-div__box__descr__name-price__btn" style={{ display: 'flex', gap: '10px' }}>
                            <button
                                onClick={() => {
                                    window.scrollTo(0, 0);
                                    handleViewDetails();
                                }}
                                className="detail-content"
                            >
                                Details
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default CarCard;
