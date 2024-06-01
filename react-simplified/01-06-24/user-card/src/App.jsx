import UserCard from "./components/UserCard";
import userdata from "./user.json";

function App() {
  return (
    <>
      <UserCard
        name={userdata.name}
        age={userdata.age}
        phoneNumber={userdata.phoneNumber}
        address={userdata.address}
      />
    </>
  );
}

export default App;
