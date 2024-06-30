import HomeNav from "../HomeNav";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import "./DashBoard.css";
import AddTrips from "./AddTrips";
import Cards from "../Cards";
import { db } from "../../config/firebase";
import { useAddTrips } from "../hooks/useAddTrips";
import { useGetUserInfo } from "../hooks/useGetUserInfo";

const Dashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(false);
  const { email } = useGetUserInfo();
  useEffect(() => {
    fetchTrips();
  }, []);
  const fetchTrips = async () => {
    setLoading(true);
    try {
      const userDocRef = collection(db, "users", email, "trips");
      const querySnapshot = await getDocs(userDocRef);
      const tripsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTrips(tripsData);
    } catch (error) {
      console.error("Error fetching trips: ", error);
    }
    setLoading(false);
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

        {loading ? (
          <div className="loading-message">Loading trips...</div>
        ) : trips.length === 0 ? (
          <div className="no-trips-message">
            You do not have any trips planned yet.
          </div>
        ) : (
          <Cards trips={trips} onDelete={fetchTrips} />
        )}
        {showForm && (
          <>
            <div className="overlay" onClick={toggleForm}></div>
            <AddTrips
              className="add-trip-form"
              toggleForm={toggleForm}
              addNewTrip={fetchTrips}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
