import React from "react";

function Cont({children}){

    const style ={
        border : "2px solid black"
    }

    return(
        
    <div style={style}>
        {children}
    </div>
    )
}
export default Cont;