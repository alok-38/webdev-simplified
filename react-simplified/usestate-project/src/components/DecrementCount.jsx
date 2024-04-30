export default function DecrementCount({ onDecrement, count }) {
  return (
    <button
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      onClick={onDecrement}
      disabled={count === 0} // Disable the button if count is 0
    >
      Decrement
    </button>
  );
}
