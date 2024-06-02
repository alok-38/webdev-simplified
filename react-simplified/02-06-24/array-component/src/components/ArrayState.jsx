import { useState } from "react";

const ArrayManipulationComponent = () => {
  const initialArray = ["A", "B", "C"];
  const [array, setArray] = useState(initialArray);

  // Remove the first element
  const removeFirstElement = () => {
    setArray(array.slice(1));
  };

  // Remove a specific letter
  const removeSpecificLetter = (letter) => {
    setArray(array.filter((item) => item !== letter));
  };

  // Add a new element to the start of the array
  const addElementToStart = (newElement) => {
    setArray([newElement, ...array]);
  };

  // Add a new element to the end of the array
  const addElementToEnd = (newElement) => {
    setArray([...array, newElement]);
  };

  // Clear the array
  const clearArray = () => {
    setArray([]);
  };

  // Reset the array to the initial value
  const resetArray = () => {
    setArray(initialArray);
  };

  return (
    <div>
      <h1>Array: {array.join(", ")}</h1>
      <button onClick={removeFirstElement}>Remove First Element</button>
      <button onClick={() => removeSpecificLetter("B")}>Remove "B"</button>
      <button onClick={() => addElementToStart("X")}>Add "X" to Start</button>
      <button onClick={() => addElementToEnd("Y")}>Add "Y" to End</button>
      <button onClick={clearArray}>Clear Array</button>
      <button onClick={resetArray}>Reset Array</button>
    </div>
  );
};

export default ArrayManipulationComponent;
