import { useState } from "react";

export default function UseStateDemo() {
  const [name, setName] = useState(""); // Initialize name state with an empty string

  const handleChange = (event) => {
    setName(event.target.value); // Update name state with input value
  };

  const renderGreeting = () => {
    if (name.trim() === "") {
      return <p>Please enter your name.</p>; // Show message if name is empty
    } else if (name.length <= 5) {
      return <p>Hello, {name}!</p>; // Show short greeting for names with 5 characters or less
    } else {
      return <p>Welcome, {name}!</p>; // Show longer greeting for names with more than 5 characters
    }
  };

  return (
    <div>
      {/* Input field to dynamically set the name */}
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
      />

      {/* Conditionally render greeting message */}
      {renderGreeting()}
    </div>
  );
}
