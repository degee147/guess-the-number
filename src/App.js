import "./styles.css";
import React, { useState, useEffect } from "react";
import Play from "./Play";
import Config from "./Config";

export default function App() {
  const [lower, setLower] = useState(1);
  const [upper, setUpper] = useState(10);
  const [number, setNumber] = useState("");
  const [status, setStatus] = useState("");
  const [lastGuess, setLastGuess] = useState("none");
  const [selection, setSelection] = useState("none");
  const [prompt, setPrompt] = useState(0);

  useEffect(() => {
    reset();
  }, []);

  const reset = () => {
    setNumber(randInt(lower, upper));
    setSelection("none");
    setLastGuess("Last guess: " + selection);
    setPrompt("Guess the number between " + lower + " and " + upper);
    setStatus("");
    render();
  };

  const guess = () => {
    if (selection > number) {
      setStatus("Nope. Lower");
    } else if (selection < number) {
      setStatus("Nope. Higher");
    } else {
      setStatus("You got it!");
    }
    render();
  };

  const render = () => {
    setLastGuess("Last guess: " + selection);
  };


  const randInt = (lower, upper) => {

    lower = parseInt(lower, 10)
    upper = parseInt(upper, 10)
    return Math.floor(Math.random() * (upper - lower + 1)) + lower
  }


  return (
    <div className="App">
      <div>
        <Play
          prompt={prompt}
          lastGuess={lastGuess}
          status={status}
          guess={guess}
          setSelection={setSelection}
        />
      </div>
      <Config
        lower={lower}
        setLower={setLower}
        upper={upper}
        setUpper={setUpper}
        reset={reset}
      />
    </div>
  );
}
