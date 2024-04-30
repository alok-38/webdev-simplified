import { useState } from "react";
import IncrementCount from "./IncrementCount";
import DecrementCount from "./DecrementCount";
import ResetCount from "./ResetCount";

export default function CountFunction() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
      <div style={{ display: "flex", gap:"20px", alignItems: "center" }}>
        <IncrementCount onIncrement={increment} />
        <ResetCount onReset={reset} />
        <DecrementCount onDecrement={decrement} count={count} />
      </div>
      <p className="mt-10  text-7xl" style={{ marginLeft: "0.5rem" }}>{count}</p>
    </div>
  );
}
