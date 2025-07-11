import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import FeedbackData from "./components/shared/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
function App() {

  let [feedback, setFeedback] = useState(FeedbackData)
  function deleteFeedback(id) {
    if (window.confirm("Are you sure to delete?")) {
     setFeedback(feedback.filter((item)=>item.id!==id))
   }
  }

  return (
    <div className="App">
      <Header />
      <FeedbackStats feedbacks={feedback}/>
      <FeedbackList feedbacks={feedback} handleDelete={deleteFeedback} />
    </div>
  );
}

export default App;
