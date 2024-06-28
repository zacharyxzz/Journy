import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Cards.css";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import { useGetUserInfo } from "./hooks/useGetUserInfo";

function CardItem(props) {
  const [deleting, setDeleting] = useState(false);
  const { email } = useGetUserInfo();
  const handleDelete = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDeleting(true);
    try {
      await deleteDoc(doc(db, "users", email, "trips", props.id));
      console.log("Document successfully deleted!");
      props.onDelete();
    } catch (error) {
      console.log(props.key);
      console.error("Error removing document: ", error);
      setDeleting(false);
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
          <button
            className="delete-button"
            disabled={deleting}
            onClick={handleDelete}
          >
            {deleting ? "Deleting..." : "Delete"}
          </button>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
