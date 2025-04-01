import { useState } from "react";

//StateTest01.js
function StateTest01(){
    let num = 100;

    const [number, setNumber ] = useState(0);
    
    console.log("start : ", num);
    const click = () => {
        num = num + 1;
        setNumber( number + 1 )
        console.log("click : ", num);
    }
    return (<>
        number : {number}<br />
        <button onClick={click}>클릭</button>
    </>)
}
export default StateTest01;