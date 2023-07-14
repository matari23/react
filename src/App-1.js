// import logo from './logo.svg';
import React,{useRef,useState, useMemo, useCallback} from "react";

// import './App.css';
// import Hello from"./hello";
// import Cont from "./cont";
// import Counter from "./counter";
// import InputSample from "./inputSample"
// import InputSam from "./input";
import Userlist from "./userlist";
import Creatuser from "./creatuser";
// import Exam from "./exam";
import CallBack from "./Callback";

function countActive(users){
  console.log("활성 사용자 수를 세는 중...")
  return(
    users.filter(user => user.active).length
  )
}

    function App(){
      const [inputs, setinputs] = useState({
        username : "",
        email : ""
      })
      const {username , email} = inputs;
      const onChange = (e) =>{
        const{name , value } = e.target;
        setinputs({
          ...inputs,
          [name] : value
        })
      }
      const [users , setusers] =  useState([
        {
        id: 1,
        username : "서태수",
        email : "123@naver.com",
        active : true
        },
        {
          id: 2,
        username : "양미정",
        email : "345@naver.com",
        active : false
        },
        {
          id: 3,
        username : "최은석",
        email : "678@naver.com",
        active : false
        }
      ]) 

      const nextId = useRef(4);

      const onCreate = () => {
        //나중에 구현할 배열에 항목 추가 로직
        const user ={
          id : nextId.current,
          username,
          email
        }
        setusers(users.concat(user))

        setinputs({
          username : "",
          email : ""
        })
        nextId.current += 1;
      }

      const onRemove = id =>{
        //user.id 가 일치하지 않는 원소만 추출해서 배열을 만듦.
        //user.id가 id인것을 제거함.
        setusers(users.filter( user => user.id !== id))
      }

      const onToggle = id =>{
        setusers(
          users.map(user => user.id === id ? {...user, active : !user.active} : user)
        )
      }
      // const count = countActive(users);
      const count = useMemo( ()=>countActive(users),[users])
      const [count1, setcount] = useState(0);
      const [todos, settodos] =useState([]);

      const increment = () =>{
        setcount((c) => c+1);
      }

      const addTodo = useCallback(() =>{
        settodos((t) => [...t, "new Tood"])
      },[todos])
      return(
        <>
        <Creatuser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
        <Userlist users={users} onRemove={onRemove} onToggle={onToggle}/>
        <div>활성사용자 수 : {count}</div>

        <CallBack todos={todos} addTodo ={addTodo}/>
        <hr />
        <div>

        </div>
        count1 : {count1}
        <button onClick={increment}> + </button>

        {/* <Exam name="홍길동" color="blue"/>
        <Exam color="pink"/>
        <Exam name="서지수"/> */}
        </>
      )
    }


export default App;
