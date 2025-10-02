import { useState } from "react";
import RecipeChoices from "./RecipeChoices";
import drinks from '../drinks.json';

const BaristaForm = () => {
  // hooks / state variables
  const [currentDrink, setCurrentDrink] = useState('');
  const [trueRecipe, setTrueRecipe] = useState({});
  const [inputs, setInputs] = useState({
    'temperature': '',
    'milk': '',
    'syrup': '',
    'blended': ''
  });
  const [checkedTemperature, setCheckedTemperature] = useState('');
  const [checkedSyrup, setCheckedSyrup] = useState('');
  const [checkedMilk, setCheckedMilk] = useState('');
  const [checkedBlended, setCheckedBlended] = useState('');
  // end hooks / state variables
  const ingredients = {
    'temperature' : ['hot', 'lukewarm', 'cold'],
    'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
    'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
    'blended': ['yes', 'turbo', 'no']
  }

    const onCheckAnswer = () => {
      // Check all ingredients dynamically
      const ingredientKeys = ['temperature', 'syrup', 'milk', 'blended'];
      const setterFunctions = [setCheckedTemperature, setCheckedSyrup, setCheckedMilk, setCheckedBlended];
      
      // for each ingredient and its key (so for temp, its either hot, or lukewarm, or cold), it checks if the input is correct.
      ingredientKeys.forEach((key, index) => {
        const isCorrect = trueRecipe[key] === inputs[key];
        setterFunctions[index](isCorrect ? 'correct' : 'wrong');
      });

    }

    const onNewDrink = () => {
      setInputs({
        'temperature': '',
        'milk': '',
        'syrup': '',
        'blended': '' });
      setCheckedTemperature('');
      setCheckedSyrup('');
      setCheckedMilk('');
      setCheckedBlended('');
        
      getNextDrink();

    }
    const getNextDrink = () => {
      let randomDrinkIndex = Math.floor(Math.random() * drinks.drinks.length);
      setCurrentDrink(drinks.drinks[randomDrinkIndex].name);
      setTrueRecipe(drinks.drinks[randomDrinkIndex].ingredients);
    
    }
  
  return (
    <div>
      {/* Header Section */}
      <div className="header">
        <div className="logo">☕</div>
        <h1 className="title">On My Grind</h1>
        <p className="subtitle">So you think you can barista? Let's put that to the test...</p>
        <p className="subtitle">Make sure to fill in all the ingredients correctly to pass the test!</p>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h2 className="order-prompt">Hi, I'd like to order a:</h2>
        <div className="drink-container"> 
          <div className="drink-input">{currentDrink}</div>
          <button className="refresh-btn" onClick={onNewDrink}>🔄</button>
        </div>
      </div>

      {/* Ingredient Cards Grid */}
      <div className="ingredients-grid">
        {/* Temperature Card */}
        <div className="ingredient-card">
          <h3 className="ingredient-title">Temperature</h3>
          <div className={`answer-space ${checkedTemperature}`}>
            {inputs["temperature"]} 
          </div>
          <p className="instruction-text">Guess the ingredient...</p>
          <RecipeChoices
            handleChange={(e) => setInputs((prevState) => ({
              ...prevState,
              [e.target.name]: e.target.value,
            }))}
            label="temperature"
            choices={ingredients["temperature"]}
            checked={inputs["temperature"]}
          />
        </div>

        {/* Syrup Card */}
        <div className="ingredient-card">
          <h3 className="ingredient-title">Syrup</h3>
          <div className={`answer-space ${checkedSyrup}`}>
            {inputs["syrup"]} 
          </div>
          <p className="instruction-text">Guess the ingredient...</p>
          <RecipeChoices
            handleChange={(e) => setInputs((prevState) => ({
              ...prevState,
              [e.target.name]: e.target.value,
            }))}
            label="syrup"
            choices={ingredients["syrup"]}
            checked={inputs["syrup"]}
          />
        </div>

        {/* Milk Card */}
        <div className="ingredient-card">
          <h3 className="ingredient-title">Milk</h3>
          <div className={`answer-space ${checkedMilk}`}>
            {inputs["milk"]} 
          </div>
          <p className="instruction-text">Guess the ingredient...</p>
          <RecipeChoices
            handleChange={(e) => setInputs((prevState) => ({
              ...prevState,
              [e.target.name]: e.target.value,
            }))}
            label="milk"
            choices={ingredients["milk"]}
            checked={inputs["milk"]}
          />
        </div>

        {/* Blended Card */}
        <div className="ingredient-card">
          <h3 className="ingredient-title">Blended</h3>
          <div className={`answer-space ${checkedBlended}`}>
            {inputs["blended"]} 
          </div>
          <p className="instruction-text">Guess the ingredient...</p>
          <RecipeChoices
            handleChange={(e) => setInputs((prevState) => ({
              ...prevState,
              [e.target.name]: e.target.value,
            }))}
            label="blended"
            choices={ingredients["blended"]}
            checked={inputs["blended"]}
          />
        </div>
      </div>
        
      {/* Check Answer Button */}
      <div style={{ textAlign: 'center' }}>
        <button className='check-answer-btn' onClick={onCheckAnswer}>Check Answer</button>
      </div>
    </div>
  );
  
};

export default BaristaForm;