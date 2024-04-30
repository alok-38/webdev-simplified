export default function SearchBar() {
  return (
    <form className="flex flex-col">
      <input type="text" placeholder="Search..." />
      <label>
        <input type="checkbox" /> Only show products in stock
      </label>
    </form>
  );
}
