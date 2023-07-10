import React from "react";


function Hello({name,color, isSpecial}){
    return(
        <h1 style={{color}}>
            {isSpecial ? "★": "♡"}
            {/* {isSpecial && "★"} */}
            안녕하세요 {name}
            </h1>
    )
}

Hello.defaultProps ={
    name:"이름없음",
    color:"gray",
}
export default Hello;
