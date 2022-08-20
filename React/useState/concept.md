# useState
  
```javascript
    const[state, setState] == useState(초기값);
```

- useState 는 state 와 setState 를 배열 형태로 리턴한다.
  
  
# useState 콜백 함수 
- state에는 현재 상태 값이 들어있고,
- setState 함수로 state를 변경할 수 있음.
- setState 활용해서 state를 변경하면, 화면은 리 랜더링이 된다.
- 새로 변경될 state값이, 이전 상태와 연관이 있으면, 
- 콜백함수로 새로운 state를 리턴해 주는 것이 좋다.

```javascript
    setState((prevState) => ){
        //some works 
        return newState 
    }
```
  
- 초기값을 받아올 떄, useState인자로 콜백함수를 설정하면,
- 맨 처음 랜더링이 될 때만 실행된다. 
  
```javascript
    useState(() => {
        return heavyWorks
    })
```

# state 사용의 주의점 
- 값을 변경할 때 state에 직접 접근해서 값을 변경하는 것이 아닌 변경함수를 통해서 만 값을 바꾸어 주어야 한다. 

```javascript 
    const [state, setState] = useState({num : 0})
    state.num = 100;
```