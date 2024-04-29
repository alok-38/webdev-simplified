import { useState } from "react";

export default function UserCard() {
  const [userData, setUserData] = useState({
    name: "Kyle Cook",
    age: 27,
    phone: "123-456-7890",
    address: "123 Main St",
  });

  const handleChange = (field, value) => {
    setUserData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  return (
    <div>
      <h2>{userData.name}</h2>
      <div className="body">
        <div className="label">Age:</div>
        <div>
          <div>
            <input
              type="text"
              value={userData.age}
              onChange={(e) => handleChange("age", e.target.value)}
            ></input>
          </div>
        </div>
        <div className="label">Phone:</div>
        <div>
          <input
            type="text"
            value={userData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
        </div>
        <div className="label">Address:</div>
        <div>
          <input
            type="text"
            value={userData.address}
            onChange={(e) => handleChange("address", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
