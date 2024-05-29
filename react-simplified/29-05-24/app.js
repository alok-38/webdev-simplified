const appElement = document.getElementById("app");

function NameFunction({ name, age }) {
  return (
    <h1>
      Hello {name}. You are now {age}.
    </h1>
  );
}

function HomePage() {
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");
  const handleNameChange = (e) => setName(e.target.value);
  const handleAgeChange = (e) => setAge(e.target.value);
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleNameChange}
      />
      <input
        type="text"
        placeholder="Enter your age"
        value={age}
        onChange={handleAgeChange}
      />
      <NameFunction name={name} age={age} />
    </div>
  );
}

const root = ReactDOM.createRoot(appElement);
root.render(<HomePage />);
