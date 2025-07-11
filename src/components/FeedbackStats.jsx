import React from "react";

function FeedbackStats(props) {
  let average =
    props.feedbacks.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / props.feedbacks.length;
  average = average.toFixed(1);
  return (
    <div className="FeedbackStats">
      <div>Reviews({props.feedbacks.length})</div>
      <div>
        Average Rating: {""}
        {isNaN(average) ? 0 : average}
      </div>
    </div>
  );
}

export default FeedbackStats;
