import { useQuiz } from "../contexts/QuizContext";

function Progress() {
  const { index, numQuestions, score, totalPointsPossible, answer } = useQuiz();
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong>/{numQuestions}
      </p>
      <p>
        <strong>{score}</strong> / {totalPointsPossible}
      </p>
    </header>
  );
}

export default Progress;
