export default function DataDisplay({ data }) {
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {data.users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
