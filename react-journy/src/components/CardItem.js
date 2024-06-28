import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Cards.css";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
function CardItem({ id, label, onDelete, text, location, src }) {
  const navigate = useNavigate();
  const [deleting, setDeleting] = useState(false);
  const handleDelete = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDeleting(true);
    try {
      await deleteDoc(doc(db, "trips", id));
      console.log("Document successfully deleted!");
      onDelete();
    } catch (error) {
      console.error("Error removing document: ", error);
      setDeleting(false);
    }
  };
  const handleClick = () => {
    navigate(`/trip/${id}`, {
      state: {
        id,
        label,
        text,
        location,
        src,
      },
    });
  };
  return (
    <>
      <li className="cards_item">
        <div className="cards_item_link" onClick={handleClick}>
          <figure className="cards_item_pic-wrap" data-category={label}>
            <img src={src} className="cards_item_img" alt="Travel Images" />
            <h1 className="cards_item_title">{location}</h1>
          </figure>

          <div className="cards_item_info">
            <h5 className="cards_item_text">{text}</h5>
          </div>
          <button
            className="delete-button"
            disabled={deleting}
            onClick={handleDelete}
          >
            {deleting ? "Deleting..." : "Delete"}
          </button>
        </div>
      </li>
    </>
  );
}

export default CardItem;
