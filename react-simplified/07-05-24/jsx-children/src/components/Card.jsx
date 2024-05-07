export default function Card({ title, content }) {
  return (
    <div className="card">
      <div className="card-content">
        <h1 className="my-5">{title}</h1>
        {content}
      </div>
    </div>
  );
}
