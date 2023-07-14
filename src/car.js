import React from "react";

function Car (props){

    const cars = props.cars;

    return(
        <>
        <h1>자동차 종류</h1>
        {
            cars.length >0 &&
            <h2>
                you have {cars.length} cars in your garage 
            </h2>
        }
        </>
    )
}

export default Car;