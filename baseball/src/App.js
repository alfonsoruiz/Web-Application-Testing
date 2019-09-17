import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

const App = () => {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);

  if (strikes > 2) setStrikes(0);
  if (balls > 3) setBalls(0);

  return (
    <div className="App">
      <Display strikes={strikes} balls={balls} />
      <Dashboard
        strikes={strikes}
        setStrikes={setStrikes}
        balls={balls}
        setBalls={setBalls}
      />
    </div>
  );
};

export default App;
