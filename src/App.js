import React from 'react';
import './App.css';
import { CtoFConvUsingContext } from './CtoFConvUsingContext';
import { CtoFConvertor } from './CtoFConvertor';
import { temperatureContext } from './contexts/AppContext'
//import { ShowCAndFValues } from './ShowCAndFValues';

function App() {

  const [celsius, setCelsius] = React.useState(0);
  const [fahrenheit, setFahrenheit] = React.useState(32);

  return (
    <div className="App">
        <CtoFConvertor />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <temperatureContext.Provider value={{celsius, setCelsius, fahrenheit, setFahrenheit}}>
          <CtoFConvUsingContext/>
          {/* <br></br>
          <br></br>
          <ShowCAndFValues/> */}
        </temperatureContext.Provider>
    </div>
  );
}

export default App;
