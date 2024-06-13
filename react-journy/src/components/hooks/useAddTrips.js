import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useGetUserInfo } from "./useGetUserInfo";
export const useAddTrips = () => {

    const tripsCollectionRef = collection(db, "trips")
    const { email } = useGetUserInfo();
    const addTrips = async ({
        location, 
        description, 
        startDate,
        endDate
    }) => {
        await addDoc(tripsCollectionRef, {
            location,
            description,
            startDate,
            endDate,
            createdAt: serverTimestamp(),
            email
        });
    };
    return { addTrips };
};