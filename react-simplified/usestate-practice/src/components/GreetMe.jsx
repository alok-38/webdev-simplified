import { useState } from "react";

export default function GreetMe() {
  // Define an array of names
  const names = ["Alok", "John", "Emma", "Michael"];
  // Initialize the name state variable with the first name in the array
  const [nameIndex, setNameIndex] = useState(0);

  //   Function to handle button click
  const changeName = () => {
    // Calculate the next index in the array
    const nextIndex = (nameIndex + 1) % names.length;
    // Update the nameIndex state variable with the next index
    setNameIndex(nextIndex);
  };

  return (
    <>
      <h1>Hi {names[nameIndex]}</h1>
      <button onClick={changeName}>Change Name</button>
    </>
  );
}
