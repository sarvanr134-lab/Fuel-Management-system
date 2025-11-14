import React, { useState } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../Styles/DailyCollection.css";

const DailyCollection = () => {
  const [formData, setFormData] = useState({
    date: "",
    oil_liter_used: "",
    petrol_liter_used: "",
    price_per_liter: "",
    tanker: "",
  });

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/daily-collection", formData);
      alert("Daily Collection submitted successfully!");
      setFormData({
        date: "",
        oil_liter_used: "",
        petrol_liter_used: "",
        price_per_liter: "",
        tanker: "",
      });
      console.log(res.data);
    } catch (err) {
      console.error(err);
      alert("Error submitting form!");
    }
  };

  return (
    <div className="container">
      <h1>Daily Collection</h1>
      <div className="card p-4">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              className="form-control"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Oil Liter Used</label>
            <input
              type="number"
              className="form-control"
              name="oil_liter_used"
              value={formData.oil_liter_used}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Petrol Liter Used</label>
            <input
              type="number"
              className="form-control"
              name="petrol_liter_used"
              value={formData.petrol_liter_used}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Price per Liter</label>
            <input
              type="number"
              className="form-control"
              name="price_per_liter"
              value={formData.price_per_liter}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Tanker</label>
            <input
              type="text"
              className="form-control"
              name="tanker"
              value={formData.tanker}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-custom btn-block">
            Submit
          </button>
        </form>

        <div className="text-center mt-3">
          <Link to="/dashboard" className="btn btn-dashboard">
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DailyCollection;
