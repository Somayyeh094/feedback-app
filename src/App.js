import { useState } from "react";
import { v4 as uuid4 } from "uuid";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import FeedbackData from "./components/shared/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";


function App() {

  let [feedback, setFeedback] = useState(FeedbackData)
  function deleteFeedback(id) {
    if (window.confirm("Are you sure to delete?")) {
     setFeedback(feedback.filter((item)=>item.id!==id))
   }
  }
  function addFeedback(newFeedback) {
    newFeedback.id = uuid4();
    setFeedback([newFeedback,...feedback])
  }

  return (
    <div className="App">
      <Header />
      <FeedbackForm handleAdd={ addFeedback} />
      <FeedbackStats feedbacks={feedback}/>
      <FeedbackList feedbacks={feedback} handleDelete={deleteFeedback} />
    </div>
  );
}

export default App;
