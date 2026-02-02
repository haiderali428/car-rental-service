import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css"; 
import "./CarDetails.scss";

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [car, setCar] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const [showCalendar, setShowCalendar] = useState(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // Fetch car data
  useEffect(() => {
    const fetchCar = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/cars/${id}`);
        const data = await res.json();
        setCar(data);
      } catch (error) {
        console.error("Error fetching car:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCar();
  }, [id]);

  if (loading) return <h2>Loading...</h2>;
  if (!car) return <h2>Car not found</h2>;

  const nextImg = () =>
    setCurrentIndex((prev) => (prev + 1) % car.images.length);

  const prevImg = () =>
    setCurrentIndex((prev) => (prev - 1 + car.images.length) % car.images.length);

  const getImageUrl = (imagePath) => {
    if (!imagePath) return "";
    return imagePath.startsWith("http")
      ? imagePath
      : `http://localhost:5000${imagePath}`;
  };

  const handleContinue = () => {
    const start = dateRange[0].startDate.toISOString();
    const end = dateRange[0].endDate.toISOString();
    navigate("/booking-summary", { state: { car, start, end } });
  };

  return (
    <div className="car-details">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="content-wrapper">
        {/* LEFT COLUMN */}
        <div className="left-column">
          <div className="image-slider">
            <img src={getImageUrl(car.images[currentIndex])} alt={car.name} />

            {car.images.length > 1 && (
              <div className="slider-controls">
                <button onClick={prevImg}>‹</button>
                <button onClick={nextImg}>›</button>
              </div>
            )}

            <div className="image-count">
              {currentIndex + 1} / {car.images.length}
            </div>
          </div>

          <h2 className="section-heading">Description</h2>
          <div className="description">{car.description}</div>

          {car.features?.length > 0 && (
            <>
              <h2 className="section-heading">Features</h2>
              <ul className="features-list">
                {car.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* RIGHT COLUMN */}
        <div className="right-column">
          <h1>{car.name}</h1>
          <div className="price">£{car.price} / day</div>

          <div className="info-box">
            <ul>
              {Object.entries(car.details || {}).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>

          {!showCalendar ? (
            <button className="book-btn" onClick={() => setShowCalendar(true)}>
              Book This Car
            </button>
          ) : (
            <div className="calendar-box">
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDateRange([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={dateRange}
              />
              <button className="continue-btn" onClick={handleContinue}>
                Continue
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
