export default function Hedy() {
  const user = {
    name: "Hedy Lamarr",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90,
  };

  return (
    <div className="flex flex-col items-center mt-52 border-solid border-[.1px] border-indigo-600 w-96 p-10 mx-auto">
      <h1 className="mb-5 text-5xl">{user.name}</h1>
      <img
        className="rounded-full"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{ width: user.imageSize, height: user.imageSize }}
      ></img>
    </div>
  );
}
