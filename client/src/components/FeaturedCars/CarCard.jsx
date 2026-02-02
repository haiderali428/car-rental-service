import React from "react";
import { useNavigate } from "react-router-dom";
import "./CarCard.scss";

const CarCard = ({ car }) => {
  const navigate = useNavigate();

  // If image is relative, prepend backend URL
  const getImageUrl = (imagePath) => {
    if (!imagePath) return "";
    return imagePath.startsWith("http")
      ? imagePath
      : `http://localhost:5000${imagePath}`;
  };

  return (
    <div className="car-card" onClick={() => navigate(`/cars/${car._id}`)}>
      <div className="image-wrapper">
        <img src={getImageUrl(car.images[0])} alt={car.name} />
        <div className="hover-overlay">Click for more info</div>
      </div>

      <div className="card-body">
        <h3>{car.name}</h3>
        <p className="price">£{car.price} / day</p>
        <p className="description">{car.description}</p>

        <button
          className="reserve-btn"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/cars/${car._id}`);
          }}
        >
          Reserve Now
        </button>
      </div>
    </div>
  );
};

export default CarCard;
