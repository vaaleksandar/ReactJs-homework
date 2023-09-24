// import React from 'react'; const React = require('react')
import {Hello} from './components/Hello';
// import {Goodbye} from './components/Goodbye';



function App(){

  const broj = "old timer cars";
  let fraza = 'drag racing cars';
  var karakter = 'lories';
 
  return(
      <div id="app">
        <Hello/>
        <h2>ZDRAVO TEKST APP.JSX</h2>
        <Hello/>

        {/* <Goodbye/>
        <h2>GOODBYE VTOR PAT</h2>
        <Goodbye/>  */}

        <hr/>
        <p>{999999}</p>
        <h2>Timeline: {broj}</h2>
        <h4>Type: {fraza}</h4>
        <h6>Trucks: {karakter}</h6>
        {/* <Goodbye/> */}
      </div>

    )
}

export default App;