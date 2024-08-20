import { useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons/Buttons";
import Screen from "./components/Screen/Screen";

function App() {

  const [calc , setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,});

  return (
    <div className="app">
      <div className="container">
        <Screen value= {calc.num ? calc.num : calc.res} />
        <Buttons calc={calc} setCalc={setCalc}/>
      </div>
    </div>
  );
}

export default App;
