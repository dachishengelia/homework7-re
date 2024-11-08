import React, { useState } from 'react';
import './ThankYouComponent.css';
import thankYouIcon from '../thankYouIcon.png';

function ThankYouComponent({ rating }) {
  const [feedback, setFeedback] = useState('');
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmitFeedback = () => {
    if (feedback.trim()) {
      setFeedbackSubmitted(true);
    }
  };

  return (
    <div className="thank-you-container">
      <img src={thankYouIcon} alt="Thank you" className="thank-you-icon" />
      <p className="selected-rating">You selected {rating} out of 5</p>
      <h2>Thank you!</h2>
      <p>We appreciate you taking the time to give a rating.</p>

      {/* Display improvement message and feedback input only if rating is below 4 */}
      {rating < 4 && (
        <>
          <p className="improvement-message">Tell us what to do to improve!</p>

          <div className="feedback-container">
            <textarea
              value={feedback}
              onChange={handleFeedbackChange}
              placeholder="Your feedback..."
              className={`feedback-input ${feedbackSubmitted ? 'submitted' : ''}`}
            />
            <button
              onClick={handleSubmitFeedback}
              className={`feedback-submit-button ${feedbackSubmitted ? 'submitted' : ''}`}
            >
              Submit Feedback
            </button>
          </div>

          {feedbackSubmitted && (
            <p className="thank-you-feedback">Your feedback was submitted!</p>
          )}
        </>
      )}
    </div>
  );
}

export default ThankYouComponent;
