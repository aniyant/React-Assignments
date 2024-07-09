import { useState } from 'react';

function useToggleItems(initialValue, initialPosition = 0) {
  const [position, setPosition] = useState(initialPosition);

  const toggleItem = () => {
    setPosition((prevPosition) => (prevPosition + 1) % initialValue.length);
  };

  return [initialValue[position], toggleItem];
}

export default useToggleItems;
