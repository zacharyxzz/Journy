import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useGetUserInfo } from "./useGetUserInfo";
export const useAddTrips = () => {
  const tripsCollectionRef = collection(db, "trips");
  const { email } = useGetUserInfo();
  const addTrips = async ({ location, description, startDate, endDate }) => {
    const formattedStartDate = startDate.toISOString().split("T")[0];
    const formattedEndDate = endDate.toISOString().split("T")[0];
    await addDoc(tripsCollectionRef, {
      location,
      description,
      startDate: formattedStartDate,
      endDate: formattedEndDate,
      createdAt: serverTimestamp(),
      email,
    });
  };
  return { addTrips };
};
