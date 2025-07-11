import React from "react";
import Card from "./shared/Card";
import ButtonCustom from "./shared/ButtonCustom";
function FeedbackForm() {
  return (
    <Card>
      <h4 className="text-center">How would you rate the service with us?</h4>
      <form className="input-group">
        <input type="text" placeholder="Write a review..." />
        <ButtonCustom>Send</ButtonCustom>
      </form>
    </Card>
  );
}

export default FeedbackForm;
