export default function UserCard({ name, phoneNumber, age, address }) {
  return (
    <main>
      <h2>{name}</h2>
      <section>
        <label htmlFor="age">Age:</label>
        <div>{age}</div>
        <label htmlFor="Phone:">Phone:</label>
        <div>{phoneNumber}</div>
        <label htmlFor="address">Address:</label>
        <div>{address}</div>
      </section>
    </main>
  );
}
