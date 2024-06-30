import React from "react";
import { useState, useEffect } from "react";
import AddItineraryForm from "./AddItineraryForm";
import "./AddItineraryForm.css";
import { db } from "../config/firebase";
import { useGetUserInfo } from "./hooks/useGetUserInfo";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

function DayPlan({ tripId, day }) {
  const [itinerary, setItinerary] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const { email } = useGetUserInfo();
  useEffect(() => {
    fetchItinerary();
  }, []);
  const fetchItinerary = async () => {
    setLoading(true);
    try {
      const userDocRef = collection(
        db,
        "users",
        email,
        "trips",
        tripId,
        "itinerary"
      );
      const querySnapshot = await getDocs(userDocRef);
      const itineraryData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setItinerary(itineraryData.filter((x) => x.date === day));
    } catch (error) {
      console.error("Error fetching trips: ", error);
    }
    setLoading(false);
  };
  const formatTime = (time) => {
    const date = new Date(time);
    return date.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };
  const handleAddItinerary = (newItinerary) => {
    fetchItinerary();
    setIsModalOpen(false);
  };

  const handleDeleteItinerary = async (tripIdToDelete) => {
    // setItinerary(itinerary.filter((_, index) => index !== indexToDelete));
    try {
      setDeleting(true);
      await deleteDoc(
        doc(db, "users", email, "trips", tripId, "itinerary", tripIdToDelete)
      );
      fetchItinerary();
      console.log("Document successfully deleted!");
    } catch (error) {
      console.error("Error removing document: ", error);
    }
    setDeleting(false);
  };
  return (
    <div className="itinerary-list">
      {isModalOpen && (
        <div className="itinerary-modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsModalOpen(false)}>
              &times;
            </span>
            <AddItineraryForm
              date={day}
              tripId={tripId}
              onAdd={handleAddItinerary}
            />
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
      {loading ? (
        <div className="loading-message">Loading itinerary...</div>
      ) : itinerary.length === 0 ? (
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
                  onClick={() => handleDeleteItinerary(item.id)}
                >
                  {deleting ? (
                    "Deleting..."
                  ) : (
                    <i class="fa-regular fa-trash-can"></i>
                  )}
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
