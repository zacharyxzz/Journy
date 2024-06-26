import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
function Cards({ trips, onDelete }) {
  return (
    <div className="cards">
      <div className="cards_container">
        <div className="cards_wrapper">
          <ul className="cards_items">
            {trips.map((trip) => (
              <CardItem
                key={trip.id}
                id={trip.id}
                src={trip.image || "images/img-home.jpg"}
                location={trip.location}
                text={trip.description}
                label={`${trip.startDate} to ${trip.endDate}`}
                path="/trip"
                onDelete={onDelete}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
