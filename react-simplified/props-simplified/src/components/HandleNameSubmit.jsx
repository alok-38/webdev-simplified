import { useState } from "react";
import NameForm from "./NameForm";
import Greeting from "./Greeting";

export default function HandleNameSubmit() {
  const [userName, setUserName] = useState("");

  const handleNameSubmit = (name) => {
    setUserName(name);
  };

  return (
    <div>
      <h1>Welcome to My Greeting App</h1>
      <NameForm onNameSubmit={handleNameSubmit} />
      {userName && <Greeting name={userName} />}
    </div>
  );
}
