const demoCars = [
  {
    id: 1,
    name: 'BMW X5',
    price: 120,
    type: 'suv',
    images: [
      '/images/bmw1.jpg',
      '/images/bmw2.jpg',
      '/images/bmw3.jpg'
    ],
    description: 'Luxury SUV with powerful engine and spacious interior.',
    features: ['Navigation', 'Leather Seats', 'Sunroof', 'Parking Sensors'],
    details: {
      Make: 'BMW',
      Model: 'X5',
      Year: 2022,
      Transmission: 'Automatic',
      Condition: 'New',
      Color: 'Black',
      Mileage: '5,000 km',
      Fuel: 'Petrol',
      Doors: 4
    }
  },
  {
    id: 2,
    name: 'Toyota Corolla',
    price: 65,
    type: 'sedan',
    images: [
      '/images/corolla1.jpg',
      '/images/corolla2.jpg',
      '/images/corolla3.jpg'
    ],
    description: 'Reliable and fuel-efficient family sedan.',
    features: ['Bluetooth', 'Backup Camera', 'Air Conditioning'],
    details: {
      Make: 'Toyota',
      Model: 'Corolla',
      Year: 2021,
      Transmission: 'Manual',
      Condition: 'Used',
      Color: 'White',
      Mileage: '25,000 km',
      Fuel: 'Petrol',
      Doors: 4
    }
  }
  
];

export default demoCars;
