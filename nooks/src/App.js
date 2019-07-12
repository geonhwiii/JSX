import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000)
  return (
    <>
      <h1>Hi</h1>
    </>
  );
}

export default App;
