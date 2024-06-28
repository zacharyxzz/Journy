import React from "react";
import HomeNav from "../HomeNav";
import "../AddItineraryForm.css";
import { useLocation } from "react-router-dom";
import DayPlan from "../DayPlan";

function TripItinerary() {
  const { location, text, label } = useLocation().state || {};

  function calculateDays(dateRangeStr) {
    const [startDateStr, endDateStr] = dateRangeStr.split(" to ");
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);
    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      console.error("Invalid date format!");
      return;
    }
    const diffInMs = endDate - startDate;
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    const days = [];
    const currentDate = new Date(startDate);
    currentDate.setDate(currentDate.getDate() + 1);

    for (let i = 0; i <= diffInDays; i++) {
      days.push(currentDate.toDateString());
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return days;
  }

  return (
    <div>
      <HomeNav />
      <div className="trip-header">
        <h1 className="trip-title">{`Trip to ${location}`}</h1>
        <h2 className="trip-date-range">
          <i class="fa-regular fa-calendar-days"></i>
          {label}
        </h2>
      </div>
      {calculateDays(label).map((day) => (
        <DayPlan day={day} />
      ))}
    </div>
  );
}

export default TripItinerary;
