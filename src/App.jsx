import React, { useState } from 'react';
import RatingComponent from './components/RatingComponent';
import ThankYouComponent from './components/ThankYouComponent';
import './App.css';

function App() {
  const [rating, setRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (rating) {
      setSubmitted(true);
    }
  };

  return (
    <div className="App">
      {submitted ? (
        <ThankYouComponent rating={rating} />
      ) : (
        <RatingComponent rating={rating} setRating={setRating} handleSubmit={handleSubmit} />
      )}
    </div>
  );
}

export default App;
