import { useState } from "react";

const RecipeChoices = ({ handleChange, label, choices, checked }) => {
    return (
        <ul className="choices-list">
        {choices &&
          choices.map((choice) => (
            <li key={choice}>
              <button
                className={`choice-button ${checked === choice ? 'selected' : ''}`}
                onClick={() => handleChange({ target: { name: label, value: choice } })}
                type="button"
              >
                {choice}
              </button>
            </li>
          ))}
      </ul>
    );
};

export default RecipeChoices;