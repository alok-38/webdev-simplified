import Header from "./Header";
import List from "./List";
import Input from "./Input";
import { useState } from "react";

export default function AddAndRemove() {
  const [items, setItems] = useState([]);

  const addItem = (text) => {
    setItems([...items, text]);
  };

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div>
      <Header />
      <Input addItem={addItem} />
      <List items={items} removeItem={removeItem} />
    </div>
  );
}
