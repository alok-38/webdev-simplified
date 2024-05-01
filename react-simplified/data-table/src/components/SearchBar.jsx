export default function SearchBar() {
  return (
    <form className="flex flex-col">
      <input type="text" placeholder="Search..."></input>
      <label>
        <input type="checkbox"></input> Only show products in stock
      </label>
    </form>
  );
}
