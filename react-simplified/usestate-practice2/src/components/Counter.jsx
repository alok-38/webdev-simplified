import { useState } from "react";

export default function Counter({ onIncrement }) {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => {
        setCount((count) => count + 1);
        // Call the onIncrement callback if it's provided
        if (onIncrement) {
          onIncrement();
        }
      }}
    >
      count is {count}
    </button>
  );
}
