/* eslint-disable no-unused-vars */
// src/App.jsx
import React from 'react';
import './index.css';
import Body from './components/Body';
import { Toaster } from 'react-hot-toast' 


function App() {
  return (
    <div>
      <Body/>
      <Toaster />
    </div>
  );
}

export default App;
