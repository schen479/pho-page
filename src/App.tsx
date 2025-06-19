import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [index, setIndex] = useState(0);
  const phoImages = ['/pho1.jpg', '/pho2.jpg', '/pho3.jpg', '/pho4.jpg'];

  useEffect(() => {
    const interval = setInterval(() => { setIndex((prev) => (prev + 1) % phoImages.length);}, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title"> Pho: My One and Only </h1>
        <img src={phoImages[index]} alt="Pho" className = "rounded-image" />
        <p className="description">
          Pho is a Vietnamese soup that's made with broth, noodles, beef (or other protein) 
          and lots of toppings like cilantro, lemon, jalapenos. The best thing about pho is that it's savory and rich
          while still feeling clean and refreshing at the same time.
      </p>
      </header>
    </div>
  );
}

export default App;
