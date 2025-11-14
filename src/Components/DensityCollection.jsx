import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const DensityCollection = () => {
  const [type, setType] = useState("oil");
  const [hydrometer, setHydrometer] = useState(812);
  const [temperature, setTemperature] = useState("");

  // Update hydrometer automatically when type changes
  useEffect(() => {
    setHydrometer(type === "oil" ? 812 : 734);
  }, [type]);

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      type,
      hydrometer,
      temperature,
    };

    try {
      const response = await axios.post("http://localhost:5000/api/density", data);
      alert(response.data.message || "Density data saved successfully!");
      setTemperature("");
    } catch (error) {
      console.error("Error saving density data:", error);
      alert("Failed to save data. Please try again.");
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(to bottom right, #007bff, #00aaff)",
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div className="container" style={{ maxWidth: "600px" }}>
        <div
          className="card p-4"
          style={{
            backgroundColor: "rgba(255,255,255,0.9)",
            borderRadius: "15px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "20px",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            Density Collection
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-bold">
                Hydrometer (Oil: 812, Petrol: 734)
              </label>
              <input
                type="text"
                className="form-control"
                value={hydrometer}
                readOnly
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Select Type</label>
              <select
                className="form-control"
                value={type}
                onChange={(e) => setType(e.target.value)}
                required
              >
                <option value="oil">Oil</option>
                <option value="petrol">Petrol</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Temperature (°C)</label>
              <input
                type="number"
                className="form-control"
                value={temperature}
                onChange={(e) => setTemperature(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100"
              style={{ borderRadius: "25px" }}
            >
              Calculate Density
            </button>

            <div className="text-center mt-3">
              <a
                href="/dashboard"
                className="btn btn-success w-100"
                style={{ borderRadius: "25px", textDecoration: "none", color: "white" }}
              >
                Dashboard
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DensityCollection;
