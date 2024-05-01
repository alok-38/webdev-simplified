import { useState } from "react";
import RemoveFirstItem from "./RemoveFirstItem";

export default function StoreArray() {
  const [storeArray, setStoreArray] = useState(["A", "B", "C"]);

  const removeFirstItem = () => {
    if (storeArray.length > 0) {
      const newArray = [...storeArray];
      newArray.shift();
      setStoreArray(newArray);
    }
  };

  return (
    <div>
      <h1>Store Array</h1>
      <RemoveFirstItem removeFirstItem={removeFirstItem} />
      <ul>
        {storeArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
