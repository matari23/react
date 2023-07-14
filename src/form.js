import React , {useState}from 'react';

function Myform(){

    const[name , setName] =useState("")
    
    const Handsubmit = (event) =>{
        event.preventDefaul();
        alert("클릭 성공")
    }
    
    return(
        <form onSubmit={Handsubmit}>
            <label> 이름 :
                <input type='text' value={name}
                onChange={(e) => setName(e.target.value)}
                // <input type='text' name='' value=''/>
                />

            </label>
            <input type="submit"/>

        </form>

    )
}
export default Myform;