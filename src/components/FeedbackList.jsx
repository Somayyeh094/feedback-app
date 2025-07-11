import React from "react";
import FeedbackItem from "./FeedbackItem.jsx";

function FeedbackList(props) {
  return (
    <div className="FeedbackList">
      {props.feedbacks.map((feedback, index) => {
        return <FeedbackItem key={index} item={feedback} />;
      })}
    </div>
  );
}

export default FeedbackList;
