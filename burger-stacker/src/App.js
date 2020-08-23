import React, {useState} from 'react';
import './App.css';
import './style.css';
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane';
import IngForm from './IngForm';

let ingredientSeed = [
  {name: 'Kaiser Bun', color: 'saddlebrown'},
  {name: 'Sesame Bun', color: 'sandybrown'},
  {name: 'Gluten Free Bun', color: 'peru'},
  {name: 'Lettuce Wrap', color: 'olivedrab'},
  {name: 'Beef Patty', color: '#3F250B'},
  {name: 'Soy Patty', color: '#3F250B'},
  {name: 'Black Bean Patty', color: '#3F250B'},
  {name: 'Chicken Patty', color: 'burlywood'},
  {name: 'Lettuce', color: 'lawngreen'},
  {name: 'Tomato', color: 'tomato'},
  {name: 'Bacon', color: 'maroon'},
  {name: 'Onion', color: 'lightyellow'},
];

function App() {
  let [ingredients, setIngredients] = useState(ingredientSeed);
  let [stack, setStack] = useState([]);

  function stackBurger(e) {
    let ingToAdd = ingredients.filter(ing => ing.name === e.target.innerText);
    setStack([ingToAdd[0], ...stack]);
  }

  function clear(e) {
    setStack([]);
  }

  function addIng(e) {
    e.preventDefault();
    let ingName = document.querySelector('#ingName').value;
    let ingColor = document.querySelector('#ingColor').value;
    let ing = {name: ingName, color: ingColor};
    console.log(ing);
    setIngredients([ing, ...ingredients]);
  }

  function clearIng(e) {
    stack.shift();
    setStack([...stack]);
  }

  return (
    <div className="appDiv">
        <IngForm addIng={addIng} />
        <IngredientList ingredients={ingredients} stackBurger={stackBurger} />
        <BurgerPane stack={stack} clear={clear} clearIng={clearIng} />
    </div>
  );
}

export default App;
