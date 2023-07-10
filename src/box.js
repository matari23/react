import React from "react";

// function Box(props){
//     return(
//         <div className="box1" style={ {background :props.color} }>
//             {props.name}
//         </div>
//     )
// }

function Box({name , color}){
    return(
        <>
        <div style={{ background : color}}className="box1">
            {name}
        </div>
        </>
    )
}
Box.defaultProps = {
    name :"하이미디어",
    color: "gray"
}

export default Box;