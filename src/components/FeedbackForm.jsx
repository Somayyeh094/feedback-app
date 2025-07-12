import React from "react";
import { useState } from "react";
import Card from "./shared/Card";
import ButtonCustom from "./shared/ButtonCustom";
function FeedbackForm() {
  let [btnDisabled, setBtnDisabled] = useState(true);
  let [text, setText] = useState("");
  let [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (text.trim().length > 10) {
      let newFeedback = text;
       
    }
    setBtnDisabled(true);
    setText("");
   
  }

  function handleText({ target: { value } }) {
    if (value === "") {
      setMessage("");
      setBtnDisabled(true);
    } else if (value.trim().length <= 10) {
      setMessage("Text must be at least 10 characters!");
      setBtnDisabled(true);
    } else {
      setMessage("");
      setBtnDisabled(false);
    }
    setText(value);
  }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h4 className="text-center">How would you rate the service with us?</h4>
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review..."
            onChange={handleText}
            value={text}
          />

          <ButtonCustom type="submit" isDisabled={btnDisabled}>
            Send
          </ButtonCustom>
        </div>
          {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
