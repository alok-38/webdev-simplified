import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export default function NameAndAgeFunction() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const handleIncrement = () => {
    setAge((prevAge) => prevAge + 1);
  };

  const handleDecrement = () => {
    setAge((prevAge) => (prevAge > 0 ? prevAge - 1 : 0));
  };

  return (
    <div>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div className="flex justify-evenly">
        <button onClick={handleDecrement}>
          <MinusIcon />
        </button>
        <span>{age}</span>
        <button onClick={handleIncrement}>
          <PlusIcon />
        </button>
      </div>
      <div>
        My name is {name} and I am {age} years old.
      </div>
    </div>
  );
}
