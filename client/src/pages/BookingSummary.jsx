import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BookingSummary.scss";

const BookingSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { car, start, end } = location.state || {};

  if (!car) return <h2>No booking data</h2>;

  const startDate = new Date(start);
  const endDate = new Date(end);
  const diffDays =
    Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) || 1;
  const totalRent = diffDays * car.price;

  const handlePayment = () => {
    navigate("/payment", { state: { car, start, end, totalRent } });
  };

  const getImageUrl = (imagePath) => {
    if (!imagePath) return "";
    return imagePath.startsWith("http")
      ? imagePath
      : `http://localhost:5000${imagePath}`;
  };

  return (
    <div className="booking-summary">
      <h1>Booking Summary</h1>

      <div className="summary-container">
        {/* LEFT COLUMN: Car Info */}
        <div className="car-info">
          <img
            src={getImageUrl(car.images?.[0])}
            alt={car.name}
            className="car-image"
          />
          <h2>{car.name}</h2>
          <p className="car-description">{car.description}</p>
        </div>

        {/* RIGHT COLUMN: Booking Details */}
        <div className="summary-details">
          <p>
            <strong>Start Date:</strong>
            <span>{startDate.toDateString()}</span>
          </p>
          <p>
            <strong>End Date:</strong>
            <span>{endDate.toDateString()}</span>
          </p>
          <p>
            <strong>Total Days:</strong>
            <span>{diffDays}</span>
          </p>
          <p className="total">
            <strong>Total Rent:</strong> £{totalRent}
          </p>

          <button className="payment-btn" onClick={handlePayment}>
            Pay to reserve
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;
