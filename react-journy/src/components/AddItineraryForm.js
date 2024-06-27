// AddItineraryForm.js

import React, { useState } from "react";
import "./AddItineraryForm.css";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const AddItineraryForm = ({ onAdd }) => {
  const [startTime, setStartTime] = useState("10:00");

  const [endTime, setEndTime] = useState("10:00");

  const [location, setLocation] = useState("");

  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // // Basic validation, you can add more validation as needed
    // if (!activities.trim()) {
    //   alert("Please add location fields.");
    //   return;
    // }

    // Create a new itinerary item
    const newItinerary = {
      startTime,
      endTime,
      description,
      location: location.split(",").map((activity) => activity.trim()),
    };

    // Call the onAdd function passed from parent component
    onAdd(newItinerary);

    // Clear form fields after submission
    setStartTime("");
    setEndTime("");
    setLocation("");
    setDescription("");
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <form className="add-itinerary-form" onSubmit={handleSubmit}>
        <label htmlFor="activities">Add Location:</label>
        <input
          className="location-input"
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <label htmlFor="activities">Description:</label>
        <input
          className="description-input"
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Start Time:</label>
        <TimePicker
          className="start-time"
          onChange={(newStart) => setStartTime(newStart)}
        />
        <label>End Time:</label>
        <TimePicker
          className="end-time"
          onChange={(newEnd) => setEndTime(newEnd)}
          componentsProps={{
            actionBar: {
              actions: ["clear"],
            },
          }}
        />
        <button className="submit-button" type="submit">
          Add Location
        </button>
      </form>
    </LocalizationProvider>
  );
};

export default AddItineraryForm;
