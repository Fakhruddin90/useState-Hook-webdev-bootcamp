import React, { useState } from "react";

function App() {
  /*
  const state = useState(23);
  //[23, ƒ bound dispatchAction()]
  console.log(state);

  */

  const [count, setCount] = useState(0);
  //[value, function]

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;

//1- when the app loads up
//2- we call useState function and give the
//   the initial value 2234. Then the value get stored in variable name count
//3- then it get rendered inside the h1
//4- when user press on the button, the onClick get triggered and the increase function
//   is activated.
//5- then the increase function will call setCount, which is going to update of count variable

/*
  // console.log(state[0]);

  //non-destructuring javascript
  const rgb = [46, 204, 113];

  // console.log(rgb[0]);

  //Output:
  // 46

  //destructuring javascript
  const [red, green, blue] = [46, 204, 113];
  console.log(red);

  //Output:
  //46

  */
