export default function List({ items, removeItem }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={() => removeItem(index)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}
