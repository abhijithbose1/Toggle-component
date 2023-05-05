import React, { useEffect, useState } from "react";

export default function Title(props) {
    const { component1, component2 } = props;
    const[component,setComponent]=useState("");
    console.log(component1,"==component1");
    console.log(component2,"==component2");
   
    useEffect(() => {
        const newInterval = setInterval(() => {
            console.log("Title SetInterval Rendering");
        }, 1000);
        
        if(component1){
            setComponent("component 1");
        }else{
            setComponent("component 2");
        }

        return () => {
            clearInterval(newInterval);
            console.log("SetInterval Stopped Rendering");
        };
    }, []);

    return <h2>Title {component} Rendering </h2>;
}
