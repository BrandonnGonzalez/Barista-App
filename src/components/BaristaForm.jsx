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
  const [correctTemperature, setCheckedTemperature] = use