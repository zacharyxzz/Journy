import React from "react";
import { useState } from "react";
import AddItineraryForm from "./AddItineraryForm";
import "./AddItineraryForm.css";

function DayPlan({ day }) {
  const [itinerary, setItinerary] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formatTime = (time) => {
    const date = new Date(time);
    return date.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };
  const handleAddItinerary = (newItinerary) => {
    // setItinerary([...itinerary, newItinerary]);
    setItinerary([...itinerary, { ...newItinerary }]);
    setIsModalOpen(false);
  };

  const handleDeleteItinerary = (indexToDelete) => {
    setItinerary(itinerary.filter((_, index) => index !== indexToDelete));
  };
  return (
    <div className="itinerary-list">
      {isModalOpen && (
        <div className="itinerary-modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsModalOpen(false)}>
              &times;
            </span>
            <AddItineraryForm onAdd={handleAddItinerary} />
          </div>
        </div>
      )}
      <div className="itinerary-header">
        <h2>{day}</h2>
        <button
          className="open-modal-button"
          onClick={() => setIsModalOpen(true)}
        >
          <i class="fa-solid fa-location-dot"></i>
          Add location
        </button>
      </div>
      {itinerary.length === 0 ? (
        <p>No places added yet.</p>
      ) : (
        <ul>
          {itinerary.map((item, index) => (
            <li key={index} className="itinerary-item">
              <div className="itinerary-content">
                <strong className="itinerary-location">
                  {item.location.toString()}
                </strong>
                <div className="itinerary-time">
                  {`${formatTime(item.startTime)} - ${formatTime(
                    item.endTime
                  )}`}
                </div>
                <div className="itinerary-details">{item.description}</div>

                <br />
                <button
                  className="delete"
                  onClick={() => handleDeleteItinerary(index)}
                >
                  <i class="fa-regular fa-trash-can"></i>
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DayPlan;
