// NewYearCard.js

import React from "react";
import "./NewYearCard.css";

const NewYearCard = ({ partnerName }) => {
  return (
    <div className="new-year-card">
      <h1>Happy New Year, {partnerName}!</h1>
      <p>
        As we step into the new year together, I want to express my love and
        gratitude for having you by my side. May this year bring us joy,
        laughter, and countless beautiful moments. Cheers to our journey
        together!
      </p>
      <p>With all my love,</p>
      <p>Rohit</p>
    </div>
  );
};

export default NewYearCard;
