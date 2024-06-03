import { useState } from "react";

const ArrayManipulationComponent = () => {
  const initialArray = ["A", "B", "C"];
  const [array, setArray] = useState(initialArray);
  const [inputValue, setInputValue] = useState("");
  const [indexValue, setIndexValue] = useState(0);

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

  // Update all "A" elements to "H"
  const updateAtoH = () => {
    setArray(array.map((item) => (item === "A" ? "H" : item)));
  };

  // Add input value to the start of the array
  const addInputToStart = () => {
    addElementToStart(inputValue);
    setInputValue(""); // Clear input after adding
  };

  // Add a new element at a specific index
  const addElementAtIndex = (newElement, index) => {
    setArray([...array.slice(0, index), newElement, ...array.slice(index)]);
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
      <button onClick={updateAtoH}>Update all "A" to "H"</button>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter value"
        />
        <button onClick={addInputToStart}>Add Input to Start</button>
      </div>
      <div>
        <input
          type="number"
          value={indexValue}
          onChange={(e) => setIndexValue(parseInt(e.target.value))}
          placeholder="Enter index"
        />
        <button onClick={() => addElementAtIndex(inputValue, indexValue)}>
          Add Input at Index
        </button>
      </div>
    </div>
  );
};

export default ArrayManipulationComponent;
