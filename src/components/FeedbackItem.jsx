import React from "react";
import Card from "./shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";

function FeedbackItem(props) {
  return (
    <Card>
      <div className="num-display">{props.item.rating}</div>
      <button className="edit">
        {" "}
        <FaEdit color="purple" />
      </button>
      <button className="close">
        {" "}
        <FaTimes color="purple" />
      </button>
      {props.item.text}
    </Card>
  );
}

export default FeedbackItem;
