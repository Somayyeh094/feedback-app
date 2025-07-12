import { useState } from "react";
import { v4 as uuid4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import FeedbackData from "./components/shared/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./components/pages/AboutPage";


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
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />;
                <FeedbackStats feedbacks={feedback} />;
                <FeedbackList
                  feedbacks={feedback}
                  handleDelete={deleteFeedback}
                />
              </>
            }
          />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
