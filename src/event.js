import React from "react";
function Event(){
    const shoot = (a,b) => {
        alert(b.type) 
    }
    // const shoot = (a) => {
    //     alert(a)
    // }
    return(
        <button onClick = { (event) => shoot("정경용",event)}> Click here! </button>
        // <button onClick = { () => shoot("정경용")}> Click here! </button>
    )
}
export default Event; 