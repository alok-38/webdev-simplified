import { useState } from "react";
export default function InputEvent() {
  const [input, setInput] = useState("");

  // Handler for input change
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      <p>Current Input: {input}</p>
    </div>
  );
}
