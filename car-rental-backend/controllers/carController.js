const Car = require('../models/car')

const path = require('path');

exports.getCars = async (req, res) => {
  try {
    const cars = await Car.find().sort({ createdAt: -1 });
    res.json(cars);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) return res.status(404).json({ error: 'Car not found' });
    res.json(car);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.createCar = async (req, res) => {
  try {
    // images are saved by multer - available in req.files
    const images = (req.files || []).map(file => `/uploads/${file.filename}`);

    const data = {
      ...req.body,
      images,
      features: req.body.features ? JSON.parse(req.body.features) : [],
      details: req.body.details ? JSON.parse(req.body.details) : {}
    };

    // ensure numeric fields
    if (data.price) data.price = Number(data.price);

    const car = new Car(data);
    await car.save();
    res.json({ ok: true, car });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create car' });
  }
};
exports.updateCar = async (req, res) => {
  try {
    // New images uploaded
    const newImages = (req.files || []).map(file => `/uploads/${file.filename}`);

    // existingImages from form data (JSON string)
    let existingImages = [];
    if (req.body.existingImages) {
      existingImages = JSON.parse(req.body.existingImages);
    }

    const update = {
      ...req.body,
      images: [...existingImages, ...newImages], // combine existing + new images
    };

    // Parse JSON strings
    if (req.body.features) update.features = JSON.parse(req.body.features);
    if (req.body.details) update.details = JSON.parse(req.body.details);
    if (req.body.price) update.price = Number(req.body.price);

    // Remove existingImages from update because we already added it to images
    delete update.existingImages;

    const car = await Car.findByIdAndUpdate(req.params.id, update, { new: true });
    res.json({ ok: true, car });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update car' });
  }
};

exports.deleteCar = async (req, res) => {
  try {
    await Car.findByIdAndDelete(req.params.id);
    res.json({ ok: true, message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete car' });
  }
};
