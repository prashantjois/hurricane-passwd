import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    document.title = 'Hurricane Passwords';
  }, []); // The empty dependency array ensures this runs once when the component mounts.

  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}

export default App;
