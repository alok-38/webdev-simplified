import viteLogo from "/vite.svg";

export default function Header() {
  return (
    <div className="flex flex-col text-3xl font-semibold">
      <img src={viteLogo} className="logo" alt="Vite logo" />
      <h1>Vite Todo List</h1>
    </div>
  );
}
