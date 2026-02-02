// car-rental-backend/models/Car.js
const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  type: { type: String, required: true }, // SUV, Sedan, etc.
  images: [{ type: String }], // image URLs
  description: { type: String, required: true },
  features: [{ type: String }],
  details: {
    Make: String,
    Model: String,
    Year: Number,
    Transmission: String,
    Condition: String,
    Color: String,
    Mileage: String,
    Fuel: String,
    Doors: Number
  }
}, { timestamps: true });

module.exports = mongoose.model('Car', carSchema);
