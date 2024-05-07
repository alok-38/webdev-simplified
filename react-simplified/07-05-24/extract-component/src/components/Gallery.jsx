import { getImageUrl } from "./Utils";

export default function Gallery() {
  return (
    <div className="flex flex-col items-center justify-center w-[50%] mx-auto">
      <h1 className="my-10">Notable Scientists</h1>
      <section className="w-[50%] mx-auto leading-10 pl-20 border-solid border-2 border-indigo-600">
        <h2 className="mb-5 text-center">Maria Skłodowska-Curie</h2>
        <img
          className="avatar block mx-auto rounded-full"
          src={getImageUrl("szV5sdG")}
          alt="Maria Skłodowska-Curie"
          width={70}
          height={70}
        />
        <ul className="pl-20">
          <li>
            <b>Profession: </b>
            physicist and chemist
          </li>
          <li>
            <b>Awards: 4 </b>
            (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal,
            Matteucci Medal)
          </li>
          <li>
            <b>Discovered: </b>
            polonium (chemical element)
          </li>
        </ul>
      </section>
      <section className="profile w-[50%] mx-auto leading-10 pl-20 border-solid border-2 border-indigo-600 mt-10">
        <h2 className="text-center">Katsuko Saruhashi</h2>
        <img
          className="avatar block mx-auto rounded-full"
          src={getImageUrl("YfeOqp2")}
          alt="Katsuko Saruhashi"
          width={70}
          height={70}
        />
        <ul className="pl-20">
          <li>
            <b>Profession: </b>
            geochemist
          </li>
          <li>
            <b>Awards: 2 </b>
            (Miyake Prize for geochemistry, Tanaka Prize)
          </li>
          <li>
            <b>Discovered: </b>a method for measuring carbon dioxide in seawater
          </li>
        </ul>
      </section>
    </div>
  );
}
