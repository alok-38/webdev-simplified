import Greeting from "./Greeting";

export default function GreetingProps() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      {/* Passing prop 'name' to child component */}
      <Greeting name="Alok" />
    </div>
  );
}
