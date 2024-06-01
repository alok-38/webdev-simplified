export default function UserCard({ name, phoneNumber, age, address }) {
  return (
    <main className=" flex justify-center items-center border-4 border-indigo-600 max-w-96 mx-auto h-60 mt-60">
      <section className="leading-10">
        <div className="flex">
          <label htmlFor="age">Name:</label>
          <div>{name}</div>
        </div>
        <div className="flex">
          <label htmlFor="age">Age:</label>
          <div>{age}</div>
        </div>
        <div className="flex">
          <label htmlFor="Phone:">Phone:</label>
          <div>{phoneNumber}</div>
        </div>
        <div className="flex">
          <label htmlFor="address">Address:</label>
          <div>{address}</div>
        </div>
      </section>
    </main>
  );
}
