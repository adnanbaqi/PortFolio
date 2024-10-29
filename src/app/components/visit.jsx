import React, { useEffect, useState } from 'react';

const VisitCounter = () => {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    // Get the previous visit count from localStorage
    const visits = localStorage.getItem('visitCount');

    // If there's no previous visit, initialize it to 1; otherwise, increment the count
    const newCount = visits ? parseInt(visits, 10) + 1 : 1;
    setVisitCount(newCount);

    // Store the updated count back to localStorage
    localStorage.setItem('visitCount', newCount);
  }, []);

  return (
    <div>
      <h1>Welcome to Our Site!</h1>
      <p>You have visited this site {visitCount} time{visitCount > 1 ? 's' : ''}.</p>
    </div>
  );
};

export default VisitCounter;