import Card from "./Card";

export default function Results({ type, results }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl sm:mx-auto sm:gap-0 py-4 gap-3 mx-3">
      {results.map((result) => (
        <Card key={result.id} type={type} result={result} />
      ))}
    </div>
  );
}