export default function Play({ status, guess, setSelection, lastGuess }) {
  return (
    <>
      <h3>Play!</h3>
      <div className="prompt">{prompt}</div>
      <div className="last-guess">{lastGuess}</div>
      <div className="status">{status}</div>
      <label htmlFor="guess">Guess: </label>
      <input
        type="text"
        name="guess"
        onChange={(event) => setSelection(event.target.value)}
      ></input>
      <button name="attempt" onClick={() => guess()}>
        Make guess
      </button>
    </>
  );
}
