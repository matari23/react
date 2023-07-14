import React from 'react';

function CallBack({todos, addTodo}){
    console.log("children render")
    return(
        <>
        
        <h2>My Call Back</h2>
        {todos.map((todo,index)=>{
            return<p key={index}>{todo} </p>
        })}

        <button onClick={addTodo}>Add Todo</button>
        
        </>
    )
}

export default CallBack;