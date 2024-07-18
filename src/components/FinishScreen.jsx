export default function FinishScreen({ points, maxPoints }) {
  const percentage = (points / maxPoints) * 100;

  let emoji;
  if (percentage >= 100) emoji = "medal";
  else if (percentage >= 80) emoji = "party";
  else if (percentage >= 50) emoji = "smile";
  else if (percentage > 0) emoji = "thinking";
  else emoji = "facepalm";

  return (
    <p className="result">
      <span>{emoji}</span>
      You scored <strong>{points}</strong> out of {maxPoints} (
      {Math.ceil(percentage)}%)
    </p>
  );
}
