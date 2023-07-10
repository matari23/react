import React, {useState} from "react";

function Counter(){

    const [number, setNumber] = useState(1);
    const style1 = {
        color: "green",
        textAlign: "center",
        fontSize: 24,
        backgroundColor: "gray"
    }

    const onincrease = () => {

        console.log("+1")
        setNumber(number + 1)
    }
    
    const ondecrease = () => {

        console.log("-1")
        setNumber(number - 1)
    }

    return(
        <div>  
            <h1 style={style1}>{number}</h1>
            <button className="btn btn1" onClick={onincrease}> + 1</button>
            <button className="btn btn2" onClick={ondecrease}> - 1</button>
        </div>
    )
}

export default Counter;