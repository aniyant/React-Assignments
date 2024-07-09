import { useState } from 'react'
import './App.css'
import useToggleItems from './useToggle';

function App() {
  const items = ["A","B","C","D","E","F","G","H","I"];
  const [currentItem, toggleItem] = useToggleItems(items, 1);

  return (
    <div>
      <h1>Current Item: {currentItem}</h1>
      <button onClick={toggleItem}>Toggle Item</button>
    </div>
  );
}

export default App;