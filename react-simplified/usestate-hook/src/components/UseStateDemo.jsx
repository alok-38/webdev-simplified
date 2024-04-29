import { useState } from "react";

export default function UseStateDemo() {
  const [name, setName] = useState("Alok");

  const handleClick = () => {
    setName((previousName) => (previousName === "Alok" ? "Sally" : "Alok"));
  };

  return <h1 onClick={handleClick}> Hello {name}</h1>;
}
