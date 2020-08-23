import React from 'react';

function ClearBurger(props) {
  return(
    <div>
      <button onClick={(e) => props.clear(e)}>CLEAR</button>
    </div>
  )
}

export default ClearBurger;