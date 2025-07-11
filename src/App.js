import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import FeedbackData from "./components/shared/FeedbackData";
function App() {

  let[feedback, setFeedback]=useState(FeedbackData)
  return (
    <div className="App">
      <Header />
      <FeedbackList feedbacks={feedback} />
    </div>
  );
}

export default App;
