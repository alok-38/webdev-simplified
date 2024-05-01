import { useState } from "react";

export default function InputField() {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Type Something..."
      />
      <p>You typed: {inputText}</p>
    </div>
  );
}
