import viteLogo from "/vite.svg";
import { UserCard } from "./components/UserCard";
import user from "../public/user.json"

function App() {
  return (
    <div className="flex flex-col items-center">
      <div className="my-10">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo w-32" alt="Vite logo" />
        </a>
      </div>
      <h1 className="mb-5 text-5xl underline">User Card</h1>
      <div className="card">
        <UserCard
          name={user.name}
          phoneNumber={user.phoneNumber}
          age={user.age}
          address={user.address}
        />
      </div>
    </div>
  );
}

export default App;
