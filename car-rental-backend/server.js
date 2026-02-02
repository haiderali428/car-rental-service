const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const path = require('path');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json()); // for json bodies

// serve uploaded files statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// routes
app.use('/api/admin', require('./routes/adminRoutes'));
app.use('/api/cars', require('./routes/carRoutes'));

// health
app.get('/', (req, res) => res.send('Car rental backend running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server started on ${PORT}`));
