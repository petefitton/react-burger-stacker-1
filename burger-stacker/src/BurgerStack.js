import React from 'react';
import Ingredient from './Ingredient';

function BurgerStack(props) {
  return(
    <div>
      {props.stack.map((ing, index)=> {
        if (index === 0) {
          return (
            <div>
              <button onClick={(e) => props.clearIng(e)}>Remove last ingredient</button>
              <Ingredient key={`in-${index}`} name={ing.name} color={ing.color} />
            </div>)
        } else {
          return <Ingredient key={`in-${index}`} name={ing.name} color={ing.color} />
        }
      })}
    </div>
  )
}

export default BurgerStack;