import HomeNav from "../HomeNav";
import { useState } from "react";
import "./DashBoard.css";
import AddTrips from "./AddTrips";

const Dashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => {
    setShowForm(!showForm);
  };
  return (
    <div>
      <HomeNav />
      <div className="body-container">
        <div className="add-trips-container">
          <div className="upcoming-trips">Upcoming trips</div>
          <button className="add-trip-button" onClick={toggleForm}>
            <i class="fa-solid fa-plus"></i>
            Add a trip
          </button>
        </div>
        <div className="no-trips-message">
          You do not have any trips planned yet.
        </div>
        {showForm && (
          <>
            <div className="overlay" onClick={toggleForm}></div>
            <AddTrips toggleForm={toggleForm} />
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
