import Card from "./Card";

export default function Results({ type, results }) {
  const isGame = type === "game";

  return (
    <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 max-w-6xl sm:mx-auto sm:gap-0 py-4 gap-3 mx-3">
      {results.map((result) => (
        <Card key={result.id} type={type} result={result} />
      ))}
    </div>
  );
}