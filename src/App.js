import React, { useState } from 'react';
import './style.css';

export default function App() {
  let [message, setMessage] = useState('HEllo world!');
  return (
    <>
      <div className="container">
        <h1>{message}</h1>
        <button onClick={() => setMessage((message = 'HELLO MY FRIEND!'))}>
          Click
        </button>
      </div>
    </>
  );
}
