import React from 'react';
import BurgerStack from './BurgerStack';
import ClearBurger from './ClearBurger';

function BurgerPane(props) {
  return(
    <div className="burgPaneDiv">
      <BurgerStack stack={props.stack} clearIng={props.clearIng} />
      <ClearBurger clear={props.clear} />
    </div>
  )
}

export default BurgerPane;