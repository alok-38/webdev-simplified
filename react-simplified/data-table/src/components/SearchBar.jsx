export default function SearchBar() {
  return (
    <form className="flex flex-col text-center">
      <input className="ml-28 w-[70%]" type="text" placeholder="Search..."></input>
      <label>
        <input type="checkbox"></input> Only show products in stock
      </label>
    </form>
  );
}
