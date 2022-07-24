

import {useState}  from 'react'

export const Square = ({setIsField , isField, el}) =>{
  const [field, setaField] = useState("")

  const fillXin = () => { 
    //비어있을 때는 x 또는 o가 들어가야함 
    //만약에 isfillx true 이면 x가, false이 이면 o가 나와야함.
      if(field === "" && isField === false ){
        setaField("x")
        setIsField(true)
      }
      if(field === "" && isField === true ){
        setaField("o")
        setIsField(false)
      } 
    }

    return (
      <> 
        <button 
          className="square"
          onClick = {() => fillXin()}>
            {field}
        </button>
        </>
      );
}