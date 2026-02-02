import React, { useState, useEffect } from 'react';
import API from '../api/api';
import { useNavigate, useParams } from 'react-router-dom';
import './UploadCar.scss';

const UploadCar = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('suv');
  const [description, setDescription] = useState('');
  const [features, setFeatures] = useState('');
  const [details, setDetails] = useState({
    Make: '', Model: '', Year: '', Transmission: '', Condition: '', Color: '', Mileage: '', Fuel: '', Doors: ''
  });
  const [images, setImages] = useState([]);
  const [existingImages, setExistingImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch existing car data if editing
  useEffect(() => {
    if (!id) return;

    const fetchCar = async () => {
      try {
        const res = await API.get(`/cars/${id}`);
        const car = res.data;

        setName(car.name || '');
        setPrice(car.price || '');
        setType(car.type || 'suv');
        setDescription(car.description || '');
        setFeatures((car.features || []).join(', '));
        setDetails(car.details || {});
        setExistingImages(car.images || []);
      } catch (err) {
        setError('Failed to load car data');
      }
    };

    fetchCar();
  }, [id]);

  const onFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setImages(prev => {
      const combined = [...prev, ...newFiles];
      return combined.slice(0, 3);
    });
  };

  // Optional: remove an existing image
  const removeExistingImage = (url) => {
    setExistingImages(prev => prev.filter(img => img !== url));
  };

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const form = new FormData();
      form.append('name', name);
      form.append('price', price);
      form.append('type', type);
      form.append('description', description);
      form.append('features', JSON.stringify(features.split(',').map(f => f.trim()).filter(Boolean)));
      form.append('details', JSON.stringify(details));

      // Append new uploaded images
      images.forEach(file => form.append('images', file));

      // Pass existingImages URLs as JSON string to backend, so backend can know which old images to keep
      form.append('existingImages', JSON.stringify(existingImages));

      if (id) {
        await API.put(`/cars/${id}`, form, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
      } else {
        await API.post('/cars', form, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
      }

      setLoading(false);
      navigate('/admin/manage-cars');
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.error || 'Upload failed');
    }
  };

  return (
    <div className="upload-car">
      <h2>{id ? 'Edit Car' : 'Upload Car'}</h2>
      <form onSubmit={submit}>
        <div>
          <label>Car Name</label>
          <input value={name} onChange={e => setName(e.target.value)} required />
        </div>

        <div>
          <label>Price per day (number)</label>
          <input type="number" value={price} onChange={e => setPrice(e.target.value)} required />
        </div>

        <div>
          <label>Type</label>
          <select value={type} onChange={e => setType(e.target.value)}>
            <option value="suv">SUV</option>
            <option value="sedan">Sedan</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label>Description</label>
          <textarea value={description} onChange={e => setDescription(e.target.value)} />
        </div>

        <div>
          <label>Features (comma separated)</label>
          <input value={features} onChange={e => setFeatures(e.target.value)} placeholder="Navigation, Leather seats, ..." />
        </div>

        <fieldset>
          <legend>Details</legend>
          {Object.keys(details).map(key => (
            <div key={key}>
              <label>{key}</label>
              <input
                value={details[key]}
                onChange={e => setDetails(prev => ({ ...prev, [key]: e.target.value }))}
              />
            </div>
          ))}
        </fieldset>

        <div>
          <label>Existing Images (click to remove)</label>
          <div className="existing-images">
            {existingImages.length === 0 && <p>No existing images.</p>}
            {existingImages.map((img, idx) => (
              <div key={idx} className="existing-image-item" onClick={() => removeExistingImage(img)} style={{ cursor: 'pointer', display: 'inline-block', marginRight: 10 }}>
                <img src={img} alt={`Existing ${idx}`} width="100" />
                <p style={{ textAlign: 'center' }}>Remove</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label>Upload New Images (max 3)</label>
          <input type="file" accept="image/*" multiple onChange={onFileChange} />
          {images.length > 0 && (
            <ul>
              {images.map((file, idx) => (
                <li key={idx}>{file.name}</li>
              ))}
            </ul>
          )}
        </div>

        {error && <p className="error">{error}</p>}
        <button type="submit" disabled={loading}>
          {loading ? (id ? 'Saving...' : 'Uploading...') : (id ? 'Save Changes' : 'Upload Car')}
        </button>
      </form>
    </div>
  );
};

export default UploadCar;
