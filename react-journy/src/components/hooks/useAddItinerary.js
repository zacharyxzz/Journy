import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../config/firebase";
import { doc } from "firebase/firestore";
import { useGetUserInfo } from "./useGetUserInfo";

export const useAddItinerary = (tripId) => {
  const { email } = useGetUserInfo();
  const userDocRef = doc(db, "users", email);
  const tripsCollectionRef = collection(userDocRef, "trips");
  const specificTripRef = doc(tripsCollectionRef, tripId);
  const itineraryCollectionRef = collection(specificTripRef, "itinerary");
  const addItinerary = async ({
    location,
    description,
    startTime,
    endTime,
    date,
  }) => {
    try {
      const formattedStartTime = startTime;
      const formattedEndTime = endTime;
      await addDoc(itineraryCollectionRef, {
        location,
        description,
        startTime: formattedStartTime,
        endTime: formattedEndTime,
        createdAt: serverTimestamp(),
        createdBy: email,
        date,
      });
    } catch (error) {
      console.error("Error adding trip: ", error);
    }
  };
  return { addItinerary };
};
