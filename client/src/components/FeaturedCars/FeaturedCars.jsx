import React, { useState, useEffect } from 'react';
import './FeaturedCars.scss';
import CarCard from './CarCard';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FeaturedCars = () => {
  const [selectedType, setSelectedType] = useState('all');
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/api/cars')
      .then((res) => setCars(res.data))
      .catch((err) => console.error(err));
  }, []);

  const filteredCars =
    selectedType === 'all'
      ? cars
      : cars.filter((car) => car.type === selectedType);

  // Slice first 4 cars for featured
  const displayedCars = filteredCars.slice(0, 4);

  return (
    <section className="featured-cars">
      <h2 className="typewriter-title">Featured Listings</h2>

      <div className="text-filter-buttons">
        <button
          className={selectedType === 'all' ? 'active' : ''}
          onClick={() => setSelectedType('all')}
        >
          All
        </button>
        <button
          className={selectedType === 'suv' ? 'active' : ''}
          onClick={() => setSelectedType('suv')}
        >
          SUV
        </button>
        <button
          className={selectedType === 'sedan' ? 'active' : ''}
          onClick={() => setSelectedType('sedan')}
        >
          Sedan
        </button>
      </div>

      <div className="car-list">
        {displayedCars.map((car) => (
          <CarCard key={car._id} car={car} />
        ))}
      </div>

      {/* Show See All Cars button only if more than 4 cars available */}
      {filteredCars.length > 4 && (
        <div className="see-all-cars" style={{ marginTop: '1rem', textAlign: 'right' }}>
          <button 
            onClick={() => navigate('/cars')} 
            className="see-all-button"
            style={{ background: 'none', border: 'none', color: '#007BFF', cursor: 'pointer', fontWeight: 'bold' }}
          >
            See All Cars &rarr;
          </button>
        </div>
      )}
    </section>
  );
};

export default FeaturedCars;
