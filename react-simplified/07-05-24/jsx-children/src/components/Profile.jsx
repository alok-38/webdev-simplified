import Card from "./Card";

export default function Profile() {
  return (
    <div className="flex flex-col w-[150px] mx-auto">
      <div className="border-solid border-2 border-indigo-600 p-5 my-10 rounded-3xl">
        <Card
          title="Photo"
          content={
            <img
              className="avatar rounded-full"
              src="https://i.imgur.com/OKS67lhm.jpg"
              alt="Aklilu Lemma"
              width={100}
              height={100}
            />
          }
        />
      </div>
      <div className="border-solid border-2 border-indigo-600 w-[300px] rounded-3xl p-10 text-center">
        <Card
          title="About"
          content={
            <p>
              Aklilu Lemma was a distinguished Ethiopian scientist who
              discovered a natural treatment to schistosomiasis.
            </p>
          }
        />
      </div>
    </div>
  );
}
