import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);

  return (
    <div className="guess-results">
      <p className="guess">
        {range(5).map((num) => {
          const letterStatus = result && result[num].status;
          const className = letterStatus ? `cell ${letterStatus}` : "cell";
          return (
            <span key={crypto.randomUUID()} className={`${className}`}>
              {value ? value[num] : undefined}
            </span>
          );
        })}
      </p>
    </div>
  );
}

export default Guess;
