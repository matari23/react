import React from "react";

function Car(props){
    return(
        <li>내 자동차 이름 : {props.name}</li>
    )
}
function Mapping(){
    // const cars = ["ford","bmw","audi"]
    const cars =[
        {id: 1 , name: "ford"},
        {id: 2 , name: "bmw"},
        {id: 3 , name: "audi"}
    ]
    return(
    <>
    <h1>마이카</h1>
        <ul>
            {cars.map((car) => <Car key ={car.id} name={car.name}/>)}
        </ul>
    </>
    )
}
export default Mapping;