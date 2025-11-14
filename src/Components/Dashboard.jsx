import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../Styles/Dashboard.css"; // external styles moved here

const Dashboard = () => {
  const cards = [
    { icon: "fa-user-plus", title: "Register Employee", link: "/register-employee", bg: "bg-register" },
    { icon: "fa-users", title: "View Employees", link: "/view-employees", bg: "bg-view-employees" },
    { icon: "fa-clock", title: "Register Shift", link: "/register-shift", bg: "bg-register-shift" },
    { icon: "fa-calendar-day", title: "Daily Collection", link: "/daily-collection", bg: "bg-daily-collection" },
    { icon: "fa-eye", title: "View Shift", link: "/view-shift", bg: "bg-view-shift" },
    { icon: "fa-calendar-week", title: "Week Collection", link: "/week-collection", bg: "bg-week-collection" },
    { icon: "fa-calendar", title: "Year Collection", link: "/year-collection", bg: "bg-year-collection" },
    { icon: "fa-tint", title: "Tanker Form", link: "/tanker-form", bg: "bg-tanker-form" },
    { icon: "fa-truck-droplet", title: "View Tankers", link: "/view-tankers", bg: "bg-view-tankers" },
    { icon: "fa-gas-pump", title: "Petrol", link: "/petrol", bg: "bg-petrol" },
    { icon: "fa-list", title: "View Daily Collection", link: "/view-daily-collection", bg: "bg-view-daily-collection" },
    { icon: "fa-database", title: "Density Collection", link: "/density-collection", bg: "bg-density-collection" },
    { icon: "fa-shield-alt", title: "Safety Prescription", link: "/safety-prescription", bg: "bg-safety-prescription" },
    { icon: "fa-eye", title: "View Safety Prescription", link: "/view-safety-prescription", bg: "bg-view-safety-prescription" },
    { icon: "fa-eye", title: "View Density", link: "/view-density", bg: "bg-view-density" },
    { icon: "fa-sign-out-alt", title: "Logout", link: "/logout", bg: "bg-logout" },
  ];

  return (
    <div className="overlay">
      <h1>Admin Dashboard</h1>
      <div className="container">
        <div className="row justify-content-center">
          {cards.map((card, index) => (
            <div key={index} className="col-md-3">
              <div className={`card ${card.bg}`}>
                <div className="card-body text-center">
                  <i className={`fas ${card.icon} fa-3x mb-3`}></i>
                  <h5 className="card-title">{card.title}</h5>
                  <Link to={card.link} className="btn btn-light">
                    Go
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
