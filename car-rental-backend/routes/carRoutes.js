const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const {
  getCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar
} = require('../controllers/carController');
const requireAdmin = require('../middleware/auth');

// configure multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, '..', 'uploads')),
  filename: (req, file, cb) => {
    const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${unique}${ext}`);
  }
});
const upload = multer({ storage });

// public read
router.get('/', getCars);
router.get('/:id', getCarById);

// admin-only routes
router.post('/', requireAdmin, upload.array('images', 3), createCar);
router.put('/:id', requireAdmin, upload.array('images', 3), updateCar);
router.delete('/:id', requireAdmin, deleteCar);

module.exports = router;
