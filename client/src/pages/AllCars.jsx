import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CarCard from "../components/FeaturedCars/CarCard";
import './AllCars.scss';

const AllCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  useEffect(() => {
    axios.get('http://localhost:5000/api/cars')
      .then(res => {
        setCars(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load cars');
        setLoading(false);
      });
  }, []);

  const filteredCars =
    selectedType === 'all'
      ? cars
      : cars.filter((car) => car.type === selectedType);

  if (loading) return <p>Loading cars...</p>;
  if (error) return <p className="error">{error}</p>;
  if (cars.length === 0) return <p>No cars available.</p>;

  return (
    <section className="all-cars">
      <h2 className="page-title">All Available Cars</h2>
      <p className='page-description'>Browse our complete collection of rental cars from compact sedans to spacious SUVs all ready for your next journey</p>

      {/* Filter Buttons */}
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

      {/* Cars Grid */}
      <div className="car-grid">
        {filteredCars.map((car) => (
          <CarCard key={car._id} car={car} />
        ))}
      </div>
    </section>
  );
};

export default AllCars;
