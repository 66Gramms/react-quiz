export default function Progress({
  index,
  questionCount,
  points,
  maxPoints,
  answer,
}) {
  return (
    <header className="progress">
      <progress max={questionCount} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {questionCount}
      </p>
      <p>
        <strong>{points}</strong> / {maxPoints}
      </p>
    </header>
  );
}
