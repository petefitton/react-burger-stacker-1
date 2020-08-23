import React from 'react';

function IngForm(props) {
  return (
    <div className="formDiv">
      <form>
        <label>Ingredient Name</label>
        <input type="text" name="ingName" id="ingName"></input>
        <label>Ingredient Color</label>
        <input type="text" name="ingColor" id="ingColor"></input>
        <button onClick={(e)=>props.addIng(e)}>ADD INGREDIENT</button>
      </form>
    </div>
  )
}

export default IngForm;