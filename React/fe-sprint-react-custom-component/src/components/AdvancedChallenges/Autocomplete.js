import { useState, useEffect } from 'react';
import styled from 'styled-components';

const deselectedOptions = [
  'rustic',
  'antique',
  'vinyl',
  'vintage',
  'refurbished',
  '신품',
  '빈티지',
  '중고A급',
  '중고B급',
  '골동품'
];

/* TODO : 아래 CSS를 자유롭게 수정하세요. */
const boxShadow = '0 4px 6px rgb(32 33 36 / 28%)';
const activeBorderRadius = '1rem 1rem 0 0';
const inactiveBorderRadius = '1rem 1rem 1rem 1rem';

export const InputContainer = styled.div`
  margin-top: 8rem;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  padding: 1rem;
  border: 1px solid rgb(223, 225, 229);
  border-radius: ${inactiveBorderRadius};
  z-index: 3;
  box-shadow: 0;

  &:focus-within {
    box-shadow: ${boxShadow};
  }

  > input {
    flex: 1 0 0;
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
    outline: none;
    font-size: 16px;
 
  }

  > div.delete-button {
    cursor: pointer;
  }
`;

export const DropDownContainer = styled.ul`
  background-color: #ffffff;
  display: block;
  margin-left: auto;
  margin-right: auto;
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
  margin-top: -1px;
  padding: 0.5rem 0;
  border: 1px solid rgb(223, 225, 229);
  border-radius: 0 0 1rem 1rem;
  box-shadow: ${boxShadow};
  z-index: 3;

  > li {
    padding: 0 1rem;
    &.Selected {
      background-color:pink;
    }
  }
`;

export const Autocomplete = () => {

  const [hasText, setHasText] = useState(false);  // iput값의 유무 확인 
  const [inputValue, setInputValue] = useState(''); //input값의 상태 
  const [options, setOptions] = useState(deselectedOptions); 
  const [selecedIndexNum , setSelectedIndexNum] = useState(-1);

  useEffect(() => {
    if (inputValue === '') {
      setHasText(false);
    }
  }, [inputValue]);


  const handleInputChange = (event) => {

    setInputValue(event.target.value)
    if(event.target.value !== ""){
       setHasText(true)
    }
    setOptions(
      deselectedOptions.filter(el => el.includes(event.target.value))
    )
  };

  const handleDropDownClick = (clickedOption) => {
    setInputValue(clickedOption)
    console.log(clickedOption)
   
  };

  const handleDeleteButtonClick = () => {
    setInputValue("")
  };

  const handlekeyUpAndDown = (event) => {
    if(event.key === "ArrowUp" && selecedIndexNum > -1){
      setSelectedIndexNum(selecedIndexNum - 1)
      console.log(selecedIndexNum)
    }
    if(event.key === "ArrowDown" && selecedIndexNum < options.length -1 ){
      setSelectedIndexNum(selecedIndexNum + 1)
      console.log(selecedIndexNum)
    } 
    if(event.key === "Enter"){
      setInputValue(options[selecedIndexNum])
      setOptions(deselectedOptions.filter( el => el.includes(options[selecedIndexNum])))
    }
    
    
  }

  // Advanced Challenge: 상하 화살표 키 입력 시 dropdown 항목을 선택하고, 
  // Enter 키 입력 시 input값을 선택된 dropdown 항목의 값으로 변경하는 handleKeyUp 함수를 만들고,
  // 적절한 컴포넌트에 onKeyUp 핸들러를 할당합니다. state가 추가로 필요한지 고민하고, 필요 시 state를 추가하여 제작하세요.





  return (
    <div className='autocomplete-wrapper'>
      <InputContainer >
      <input 
        value = {inputValue} 
        onChange = {e => handleInputChange(e)}
        onKeyUp = {e => handlekeyUpAndDown(e)}
        >
        
      </input>
        <div className='delete-button' onClick = {handleDeleteButtonClick}>&times;</div>
      </InputContainer>
      {hasText === false 
        ? null 
        :<DropDown options = {options} 
                  handleComboBox ={handleDropDownClick} 
                  selected = {selecedIndexNum}
          /> }
          {console.log(inputValue, options)}
    </div>
  );
};

export const DropDown = ({ options, handleComboBox, selected }) => {
  return (
    <>
  
    <DropDownContainer>
      {options.map((el,idx) => 
        <li key = {idx} 
            onClick = {() => handleComboBox(el)} 
            className = {selected === idx ? "Selected" : ""}
        >{el}</li>)}
    </DropDownContainer>

    </>
  );
};