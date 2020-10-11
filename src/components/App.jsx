import React , {useState} from "react";

function App() {
//const state = useState(123);
// console.log(state[0]);


// DESTRUCTURING
const [count , setCount] = useState(0);
//console.log(count);

function increase() {
  //count ++;
  setCount(count + 1);
  
}

function decrease() {
  setCount(count - 1);
}

   return (
  <div className="container">
    <h1>{count}</h1>
    <button onClick = {increase}>+</button>
    <button onClick = {decrease}>-</button>
  </div>
  );

}
export default App;
