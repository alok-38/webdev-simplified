import { useState } from "react";
import Counter from "./Counter";

export default function GreetMe() {
  const [greetings, setGreetings] = useState([]);

  // Function to handle greeting when count increments by 1
  const handleIncrement = () => {
    // Increment count by 1 and add a new greeting to the array
    setGreetings(prevGreetings => [...prevGreetings, `Hello Alok`]);
  };

  return (
    <div>
      {/* Pass handleIncrement function as a prop to Counter */}
      <Counter onIncrement={handleIncrement} />
      {/* Display greeting messages */}
      {greetings.map((greeting, index) => (
        <p key={index}>{greeting}</p>
      ))}
    </div>
  );
}
