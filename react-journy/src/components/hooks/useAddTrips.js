import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../config/firebase";
import { doc } from "firebase/firestore";
import { useGetUserInfo } from "./useGetUserInfo";
export const useAddTrips = () => {
  const { email } = useGetUserInfo();
  const userDocRef = doc(db, "users", email);
  const tripsCollectionRef = collection(userDocRef, "trips");
  const addTrips = async ({ location, description, startDate, endDate }) => {
    try {
      const formattedStartDate = startDate.toISOString().split("T")[0];
      const formattedEndDate = endDate.toISOString().split("T")[0];
      await addDoc(tripsCollectionRef, {
        location,
        description,
        startDate: formattedStartDate,
        endDate: formattedEndDate,
        createdAt: serverTimestamp(),
        createdBy: email,
      });
    } catch (error) {
      console.error("Error adding trip: ", error);
    }
  };
  return { addTrips };
};
