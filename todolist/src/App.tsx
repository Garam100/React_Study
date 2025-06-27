import './App.css';
import React from 'react';
import FunCom from './FunCom';
function App() {
  let title = "내일 할일"

  const divStyle : React.CSSProperties = {
    backgroundColor : 'yellowgreen',
    color : 'blue',
    fontSize : '2em',
    textAlign : 'center'
  };

  return(
   <div>
    <FunCom></FunCom>
   </div>
  );
}

export default App;