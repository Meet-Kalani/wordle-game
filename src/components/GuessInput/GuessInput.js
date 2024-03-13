import React from "react";
import { useState } from "react";
import Modal from "../Modal/Modal";

function GuessInput({handleGuessSubmit,gameStatus}) {
  const [guess, setGuess] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (guess.length !== 5) {
      setIsModalOpen(true);
      return;
    }
    setIsModalOpen(false);
    handleGuessSubmit(guess)
    setGuess("");
  };

  const handleInputChange = (e) => {
    setGuess(e.target.value.toUpperCase());
  };

  return (
    <>
      <form onSubmit={handleFormSubmit} className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          minLength={5}
          maxLength={5}
          required
          disabled={gameStatus !== "running"}
          id="guess-input"
          type="text"
          value={guess}
          onChange={handleInputChange}
        />
      </form>
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          warning={"Please enter exactly 5 characters 🤖"}
        />
      )}
    </>
  );
}

export default GuessInput;
