import './App.css';
import React from 'react';

function App() {
  let title = "내일 할일"

  const divStyle : React.CSSProperties = {
    backgroundColor : 'yellowgreen',
    color : 'blue',
    fontSize : '2em',
    textAlign : 'center'
  };

  return(
    <div style={divStyle}>
      <h1>
        {title}
      </h1>
    </div>
  );
}

export default App;