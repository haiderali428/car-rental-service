import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api/api';
import './AdminLogin.scss';
const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setErr('');
    try {
      const res = await API.post('/admin/login', { username, password });
      localStorage.setItem('admin_token', res.data.token);
      navigate('/admin/dashboard');
    } catch (err) {
      setErr(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="admin-login" style={{ maxWidth: 420, margin: '40px auto' }}>
      <h2>Admin Login</h2>
      <form onSubmit={submit}>
        <div>
          <label>Username</label>
          <input value={username} onChange={e => setUsername(e.target.value)} required />
        </div>
        <div>
          <label>Password</label>
          <input value={password} onChange={e => setPassword(e.target.value)} type="password" required />
        </div>
        {err && <p style={{color:'red'}}>{err}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
