import React from 'react';
import Ingredient from './Ingredient';

function IngredientList(props) {
  return (
    <div className="ingListDiv">
      {props.ingredients.map((ing, index) => (
        <Ingredient key={`in-${index}`} name={ing.name} color={ing.color} stackBurger={props.stackBurger} />
      ))}
    </div>
  )
}

export default IngredientList;