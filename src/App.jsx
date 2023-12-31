import "./App.css";

import React, { useEffect, useState } from "react";
import NewYearCard from "./NewYearCard";

const calculateCountdown = () => {
  const now = new Date();
  const newYear = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0, 0); // Assuming New Year is at midnight on January 1st
  const timeDifference = newYear - now;
  return Math.max(0, Math.floor(timeDifference / 1000));
};
function App() {
  const [showCard, setShowCard] = useState(false);
  const [countdown, setCountdown] = useState(calculateCountdown());

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setCountdown(calculateCountdown());
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  const handleTap = () => {
    setShowCard(true);
  };

  return (
    <div className="App">
      <h1>Ready For New Year!!!!</h1>
      {countdown > 0 && <p>{formatCountdown(countdown)}</p>}
      {!showCard && <button onClick={handleTap}>Tap</button>}
      {showCard && <NewYearCard partnerName="Charis" />}
    </div>
  );
}
const formatCountdown = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formatTimeUnit = (unit) => String(unit).padStart(2, "0");

  return `Time until New Year: ${formatTimeUnit(hours)}:${formatTimeUnit(
    minutes
  )}:${formatTimeUnit(remainingSeconds)}`;
};

export default App;
