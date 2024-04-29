import viteLogo from "/vite.svg";
import { UserCard } from "./components/UserCard";

function App() {
  return (
    <div className="flex flex-col items-center">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>User Card</h1>
      <div className="card">
        <UserCard />
      </div>
    </div>
  );
}

export default App;
