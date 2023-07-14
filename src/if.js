import React from "react";

function Goal(props){
    const isGoal =props.isGoal;
        if (isGoal){
            //참일때
            return <h1> Goal ! </h1>
        }
        //거짓일때
        return <h1> Missed ! </h1>
    //isGoal ? <h1>Goal!</h1> : <h1> Missed ! </h1>
}
export default Goal;