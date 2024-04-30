export default function ResetCount({ onReset }) {
  return (
    <button
      className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
      onClick={onReset}
    >
      Reset
    </button>
  );
}
