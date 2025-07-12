import React from "react";
import { AnimatePresence, motion } from "framer-motion";
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
        <AnimatePresence>
                {props.feedbacks.map((feedback, index) => {
              return(
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0}}
            >
              <FeedbackItem
                key={index}
                item={feedback}
                handleDelete={props.handleDelete}
              />
            </motion.div>)
          })}
        </AnimatePresence>
      </div>
    );
  }
}

export default FeedbackList;
