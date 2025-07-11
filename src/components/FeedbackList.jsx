import React from "react";
import FeedbackItem from "./FeedbackItem.jsx";
import Card from "./shared/Card";
function FeedbackList(props) {
    if (!props.feedbacks || props.feedbacks.length === 0) {
        return (
          <Card>
            <p>No feedback yet!</p>
          </Card>
        );
    } else {
        return (
            <div className="FeedbackList">
                {props.feedbacks.map((feedback, index) => {
                    return <FeedbackItem key={index} item={feedback} handleDelete={props.handleDelete} />;
                })}
            </div>
        );
    }
}

export default FeedbackList;
