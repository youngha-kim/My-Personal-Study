import { useState } from 'react';
import styled from 'styled-components';

// TODO: Styled-Component 라이브러리를 활용해 TabMenu 와 Desc 컴포넌트의 CSS를 구현합니다.

const TabMenu = styled.ul`
  background-color: #dcdcdc;
  color: rgba(73, 73, 73, 0.5);
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-items: center;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  margin-bottom: 7rem;

  .submenu {
    ${'' /* 기본 Tabmenu 에 대한 CSS를 구현합니다. */}
    background-color:pink;
  }

  .focused {
    ${'' /* 선택된 Tabmenu 에만 적용되는 CSS를 구현합니다.  */}
    background-color:lightblue;
  }

  & div.desc {
    text-align: center;
  }
`;

const Desc = styled.div`
  text-align: center;
`;

export const Tab = () => {
  // TIP: Tab Menu 중 현재 어떤 Tab이 선택되어 있는지 확인하기 위한
  // currentTab 상태와 currentTab을 갱신하는 함수가 존재해야 하고, 초기값은 0 입니다.

  const menuArr = [
    { name: 'Tab1', content: '하나가 출력됩니다.' },
    { name: 'Tab2', content: '둘이 출력됩니다.' },
    { name: 'Tab3', content: '셋이 출력됩니다.' },
  ];

  const [current, setCurrent] = useState(0);

  const selectMenuHandler = (index) => {
    // TIP: parameter로 현재 선택한 인덱스 값을 전달해야 하며, 이벤트 객체(event)는 쓰지 않습니다
    // TODO : 해당 함수가 실행되면 현재 선택된 Tab Menu 가 갱신되도록 함수를 완성하세요.
    setCurrent(index);
  };

  return (
    <>
      <div>
        <TabMenu>
          {/*TODO: 아래 하드코딩된 내용 대신에, map을 이용한 반복으로 코드를 수정합니다.*/}
          {/*TIP: li 엘리먼트의 class명의 경우 선택된 tab 은 'submenu focused' 가 되며, 
                  나머지 2개의 tab은 'submenu' 가 됩니다.*/}
          {menuArr.map((el,idx) => {
            return <li 
              onClick={() => selectMenuHandler(idx)} 
              className = {`submenu ${current === idx ? "focused": ""}`}
              key={idx}>
                {el.name}
              </li>
          } )}
        </TabMenu>
        <Desc>
          {/*TODO: 아래 하드코딩된 내용 대신에, 현재 선택된 메뉴 따른 content를 표시하세요*/}
          <p>{menuArr[current].content}</p>
        </Desc>
      </div>
    </>
  );
};
