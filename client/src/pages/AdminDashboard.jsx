import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.scss';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('admin_token');
    navigate('/');
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="actions">
        <button onClick={() => navigate('/admin/upload-car')}>Upload Car</button>
        <button onClick={() => navigate('/admin/manage-cars')}>Manage Cars</button>
        <button onClick={logout}>Logout</button>
      </div>

      <p>
        Use <strong>Upload Car</strong> to add a new car. Manage Cars will be used for edit/delete (you can implement it next).
      </p>
    </div>
  );
};

export default AdminDashboard;
