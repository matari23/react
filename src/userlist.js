import React,{useEffect} from "react";

// function Userlist(){

//     const users = [
//         {
//             id : 1,
//             username : " 서지수",
//             email :" 1004@naver.com"
//         },
//         {
//             id : 2,
//             username : " 서지안",
//             email :" 1005@naver.com"
//         },
//         {
//             id : 3,
//             username : " 최서현",
//             email :" 1006@naver.com"
//         }
//     ]
//     return(
//         <>
//         <div>
//             <b> {users[0].username} </b>
//             <span> {users[0].email} </span>
//         </div>
//         <div>
//             <b> {users[1].username} </b>
//             <span> {users[1].email} </span>
//         </div>
//         <div>
//             <b> {users[2].username} </b>
//             <span> {users[2].email} </span>
//         </div>
//         </>
//     )
// }
function User({user,onRemove,onToggle}){

    useEffect ( () =>{
        console.log("컴포넌트가 화면에 나타남");
        return () => {
            console.log("컴포넌트가 화면에 나타남");

        }
    },[])
    return(
                <>
        <div>
            <b style={{color:user.active ? "green":"black", cursor:"pointer"}}
            onClick={() => onToggle(user.id)}
            > {user.username} </b>
            <span> {user.email} </span>
            <button onClick={( () => {onRemove(user.id)})}>삭제</button>
        </div>
        </>
    )
}

function Userlist({users,onRemove,onToggle}){
    //     const users = [
    //     {
    //         id : 1,
    //         username : " 서지수",
    //         email :" 1004@naver.com"
    //     },
    //     {
    //         id : 2,
    //         username : " 서지안",
    //         email :" 1005@naver.com"
    //     },
    //     {
    //         id : 3,
    //         username : " 최서현",
    //         email :" 1006@naver.com"
    //     }
    // ]

    // return(
    //     <>
    //     <User user={users[0]}/>
    //     <User user={users[1]}/>
    //     <User user={users[2]}/>
    //     </>
    // )
    return(
        <div>
        {users.map(user => (
            <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/>
        ))}
        </div>
    )
}
export default Userlist;