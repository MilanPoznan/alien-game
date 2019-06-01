import React, { useState, useEffect } from 'react';
import World from './components/World/World';

import './App.css';
const App = () => {
  const [count, setCount] = useState(0);

  return (
    <World />
  )
   
}

export default App;
