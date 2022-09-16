export default function Config({ lower, setLower, upper, setUpper, reset }) {

  return (
    <>
      <h3>Game Config</h3>
      <div>
        <div>
          <label htmlFor="lower">Lower bound: </label>
          <input
            type="text"
            name="lower"
            value={lower}
            onChange={(event) => setLower(event.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="upper">Upper bound: </label>
          <input
            type="text"
            name="upper"
            value={upper}
            onChange={(event) => setUpper(event.target.value)}
          ></input>
        </div>
        <button name="reset" onClick={() => reset()}>
          Reset
        </button>
      </div>
    </>
  );
}
