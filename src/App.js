import React from 'react';
import reactLogo from './react-logo.svg'

// window.myGlobalVar = "I'm global"
// window.myGlobalObj = { name: "React", lastname: "JS" }

// console.log("1")
// setTimeout(function(){
//   console.log("2");
// }, 1);
// console.log("3")
//
// for(var i = 1; i <= 10; i++) {
//   console.log(i%2 === 0, i)
// }

function App() {





  console.log("1- I'm a log message");
  console.warn("3- You can see me on Warning level")
  console.error("4- Everyone hates me, but no one can void me! I'm an error message");









  function hello(name) {
    let phrase = `Hello, ${name}!`;

    debugger;  // <-- the debugger stops here

    console.log(phrase);
  }
  function clicked(e) {
    window.myGlobalVar = "changed"
    console.log(e)
    hello("test")
  }

  return (
    <div className="App">
      <div>Debugging <img src={reactLogo} style={{ width: "50px" }} /> is fun!</div>
      <div>
        <button onClick={e => clicked(e)}>Click me</button>
      </div>
    </div>
  );
}

export default App;
