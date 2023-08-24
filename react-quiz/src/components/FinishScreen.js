function FinishScreen({ score, totalPointsPossible, highscore, dispatch }) {
  const percentage = (score / totalPointsPossible) * 100;
  return (
    <>
      <p className="result">
        You scored <strong>{score}</strong> out of {totalPointsPossible} (
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset
      </button>
    </>
  );
}

export default FinishScreen;
