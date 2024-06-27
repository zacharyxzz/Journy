import React from "react";
import { useState } from "react";
import HomeNav from "../HomeNav";
import AddItineraryForm from "../AddItineraryForm";
import "../AddItineraryForm.css";

function TripItinerary() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formatTime = (time) => {
    const date = new Date(time);
    return date.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };
  const [itinerary, setItinerary] = useState([]);

  // Function to handle adding new itinerary item
  const handleAddItinerary = (newItinerary) => {
    setItinerary([...itinerary, newItinerary]);
    setIsModalOpen(false);
  };

  const handleDeleteItinerary = (indexToDelete) => {
    setItinerary(itinerary.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div>
      <HomeNav />

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
      {/* <AddItineraryForm onAdd={handleAddItinerary} /> */}
      <div className="itinerary-list">
        <div className="itinerary-header">
          <h2>Places to visit</h2>
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
    </div>
  );
}

export default TripItinerary;
