import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CarDetails from './pages/CarDetails';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import UploadCar from './pages/UploadCar';
import ProtectedRoute from './routes/ProtectedRoute';
import ManageCar from './pages/ManageCar';    
import AllCars from './pages/AllCars';
import ScrollToTop from "./components/ScrollToTop";
import FAQPage from "./pages/FAQPage";
import ContactUsPage from './pages/ContactUsPage';
import ContactUs from './components/ContactUs';
import AboutUs from './pages/AboutUs';
import BookingSummary from './pages/BookingSummary';

const Layout = () => {
  const location = useLocation();

  // Hide ContactUs on contact + all admin pages
  const hideContactUs =
    location.pathname === "/contact" ||
    location.pathname.startsWith("/admin");

  // Hide Footer on all admin pages
  const hideFooter = location.pathname.startsWith("/admin");

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars/:id" element={<CarDetails />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/upload-car"
          element={
            <ProtectedRoute>
              <UploadCar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/manage-cars"
          element={
            <ProtectedRoute>
              <ManageCar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/edit-car/:id"
          element={
            <ProtectedRoute>
              <UploadCar />
            </ProtectedRoute>
          }
        />
        <Route path="/cars" element={<AllCars />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/booking-summary" element={<BookingSummary />} />

      </Routes>

      {/* ✅ Show Contact Us only on client-facing pages */}
      {!hideContactUs && <ContactUs />}

      {/* ✅ Show Footer only if not on admin */}
      {!hideFooter && <Footer />}
    </>
  );
};


const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout />
    </BrowserRouter>
  );
};

export default App;
