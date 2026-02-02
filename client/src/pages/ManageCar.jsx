import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ManageCar.scss";

const ManageCar = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("admin_token");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/cars");
        setCars(res.data);
      } catch (err) {
        console.error("Error fetching cars:", err);
        setError("Failed to load cars.");
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this car?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/cars/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCars((prev) => prev.filter((car) => car._id !== id));
    } catch (err) {
      console.error("Error deleting car:", err);
      if (err.response?.status === 401) {
        alert("Unauthorized. Please log in as admin again.");
      } else {
        alert("Failed to delete car.");
      }
    }
  };

  if (loading) return <p>Loading cars...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="manage-car">
      <h2>Manage Cars</h2>
      {cars.length === 0 ? (
        <p>No cars available.</p>
      ) : (
        <table className="car-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Price/Day</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <tr key={car._id}>
                <td>
                  <img
                    src={car.images && car.images.length > 0 ? car.images[0] : "/placeholder-car.jpg"}
                    alt={car.name}
                    width="100"
                  />
                </td>
                <td>{car.name}</td>
                <td>{car.brand}</td>
                <td>${car.price}</td>
                <td>
                  <button onClick={() => handleDelete(car._id)}>Delete</button>
                  <button onClick={() => navigate(`/admin/edit-car/${car._id}`)}>
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageCar;
