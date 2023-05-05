import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Title from "./components/Title";

function App() {
    const [toggle, setToggle] = useState({
      component1:true,
      component2:true,
    });
    console.log(toggle);

    function handleClick(event){
      setToggle({...toggle,
        [event.target.name]:!toggle[event.target.name]});
    }

    return (
        <>
            <h1>WELCOME</h1>
            <div className="main-container">
            <div className="component-container">
            <button name="component1" onClick={handleClick}>Toggle button - 1</button>
            {toggle.component1 && <Title component1={toggle.component1}/>}
            </div>
            <div className="component-container">
            <button name="component2" onClick={handleClick}>Toggle button - 2</button>
            {toggle.component2 && <Title component2={toggle.component2}/>}
            </div>
            </div>
        </>
    );
}

export default App;
