import React from 'react';
import './RatingComponent.css';

function RatingComponent({ rating, setRating, handleSubmit }) {
  return (
    <div className="rating-container">
      <h2>How did we do?</h2>
      <p>Please let us know how we did with your support request.</p>
      <div className="rating-buttons">
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            className={`rating-button ${rating === num ? 'selected' : ''}`}
            onClick={() => setRating(num)}
          >
            {num}
          </button>
        ))}
      </div>
      <button
        className="submit-button"
        onClick={handleSubmit}
        disabled={!rating}
      >
        Submit
      </button>
    </div>
  );
}

export default RatingComponent;
