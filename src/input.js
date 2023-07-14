import React, {useState, useRef} from "react";

function InputSam(){
    const [inputs, setinputs] = useState({
        name : "",
        nickname : ""
    })
    const nameInput = useRef()
    const{name, nickname } = inputs;

    const onchange = (e) =>{
        const{value, name } = e.target; // 우선 e.target 에서 name과 value를 추출
        setinputs({
            ...inputs, //기존의 input 객체를 복사한 뒤
            [ name ]: value //name 키를 가진 값을 value로 설정
        })
    }
    const onreset = () =>{
        setinputs({
            name : "",
            nickname : ""
        })

        nameInput.current.focus()
    }

    return(
        <div>
        <input name="name" placeholder="이름" value={name} onChange={onchange} ref={nameInput}/>
        <input name="nickname" placeholder="별명" value={nickname} onChange={onchange}/>

        <button onClick={onreset}>초기화</button>
        <div>
            <b>값 : {name}({nickname})</b>
        </div>

        </div>
    )
}

export default InputSam;