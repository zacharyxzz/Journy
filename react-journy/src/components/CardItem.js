import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
function CardItem(props) {
  const handleDelete = async (event) => {
    try {
      event.preventDefault();
      event.stopPropagation();
      await deleteDoc(doc(db, "trips", props.key));
      console.log("Document successfully deleted!");
      props.onDelete();
      // Optionally, you can add a notification or update state
    } catch (error) {
      console.error("Error removing document: ", error);
      // Handle error, e.g., show an error message
    }
  };
  return (
    <>
      <li className="cards_item">
        <Link className="cards_item_link" to={props.path}>
          <figure className="cards_item_pic-wrap" data-category={props.label}>
            <img
              src={props.src}
              className="cards_item_img"
              alt="Travel Images"
            />
            <h1 className="cards_item_title">{props.location}</h1>
          </figure>

          <div className="cards_item_info">
            <h5 className="cards_item_text">{props.text}</h5>
          </div>
          <button className="delete-button" onClick={handleDelete}>
            Delete
          </button>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
