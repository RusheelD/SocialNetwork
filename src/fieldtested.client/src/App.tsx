import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { get } from './proxies/proxy'
import './App.css';
import { SimpleObject } from './models/models';

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    get('/').then(r => r.json()).then(r => setMessage(r['message']));
    console.log(message);
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          {message?.toString()}
        </p>
      </header>
    </div>
  );
}

export default App;
