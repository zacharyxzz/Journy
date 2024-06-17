import HomeNav from "../HomeNav";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import "./DashBoard.css";
import AddTrips from "./AddTrips";
import Cards from "../Cards";
import { db } from "../../config/firebase";
import { useAddTrips } from "../hooks/useAddTrips";

const Dashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const [trips, setTrips] = useState([]);
  const { loading: addingTrip, addTrips } = useAddTrips();
  useEffect(() => {
    fetchTrips();
  }, []);
  const fetchTrips = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "trips"));
      const tripsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTrips(tripsData);
    } catch (error) {
      console.error("Error fetching trips: ", error);
    }
  };
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
        {trips.length === 0 ? (
          <div className="no-trips-message">
            You do not have any trips planned yet.
          </div>
        ) : (
          <Cards trips={trips} onDelete={fetchTrips} />
        )}
        {showForm && (
          <>
            <div className="overlay" onClick={toggleForm}></div>
            <AddTrips toggleForm={toggleForm} addNewTrip={fetchTrips} />
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
