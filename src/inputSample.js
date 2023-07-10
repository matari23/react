import React,{useState} from "react";
function InputSample(){
    // const [text , settext] = useState("");


    const [inputs, setInputs] = useState({
        name : '',
        nickname:'',
    })
    const { name , nickname } = inputs; //비구조화 할당을 통해 값 추출

    const onChange = (e)=>{
        // settext(e.target.value)
        const {value, name} = e.target;
        setInputs({
            ...inputs,//기존의 input 객체를 복사한 뒤 
            [name] : value //name 키를 가진 값을 value로 설정
        })

    }
    const onreset = () => {
        // settext("")
        setInputs({
            name : '',
            nickname : '', 
        })
    }
    return(
        <div>
            <input /* onChange ={onChange} value={text} */ placeholder="이름" name="name" onChange={onChange} value={name}/>
            <input /* onChange ={onChange} value={text} */ placeholder="닉네임" name="nickname" onChange={onChange} value={nickname} />

            <button onClick={onreset}>초기화</button>

            <div>
                <b>값 : {/* {text} */}</b>
                {name}({nickname})
            </div>
        </div>
    )
}
export default InputSample;