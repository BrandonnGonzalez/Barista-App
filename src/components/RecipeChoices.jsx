import { useState } from "react";

const RecipeChoices = ({ handleChange, label, choices, checked }) => {
    return (
        <ul className="choices-li