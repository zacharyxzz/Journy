import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DashBoard.css";
import { useAddTrips } from "../hooks/useAddTrips";

function AddTrips({ toggleForm }) {
  const { addTrips } = useAddTrips();
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const handleSubmit = (e) => {
    e.preventDefault();
    addTrips({
      location: location,
      description: description,
      startDate: startDate,
      endDate: endDate,
    });
    // Here you can handle form submission, e.g., save the itinerary data
    console.log("Location:", location);
    console.log("Description:", description);
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
    // Clear the form fields
    // setLocation("");
    // setDescription("");
    // setStartDate(new Date());
    // setEndDate(new Date());
    toggleForm();
  };
  return (
    <div className="modal">
      <div className="itinerary-form-container">
        <button className="close-button" onClick={toggleForm}>
          ✕
        </button>
        <form className="itinerary-form" onSubmit={handleSubmit}>
          <h2>Add Itinerary</h2>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
          <label htmlFor="start-date">Start Date:</label>
          <DatePicker
            className="date"
            showIcon
            id="start-date"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="yyyy/MM/dd"
            required
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
          />
          <label htmlFor="end-date">End Date:</label>
          <DatePicker
            className="date"
            showIcon
            id="end-date"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="yyyy/MM/dd"
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            required
          />
          <button type="submit" className="submit-button">
            Add trip
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTrips;
