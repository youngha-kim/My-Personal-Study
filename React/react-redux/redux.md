
# Redux  
Redux는, 전역 상태를 관리할 수 있는 저장소인 store을 제공한다.

## 사용 이유:
1. 데이터 흐름을 일관적이도록 유지해줄 수 있다.
2. 비효율적인 props 사용을 방지해줄수 있다.


>Action -> Dispatch -> Reducer -> Store 의 순서로 데이터가 단방향으로 흐르게 된다. 


-  Action - 변경될 상태에 대한 정보가 담겨 있음.  
    - Payload  
			페이로드(payload)는 실제 데이터를 Redux 작업 객체에 저장하는 속성에 대해 비공식적으로 커뮤니티에서 승인된 명명 규칙이다.      
	-  Type       
		어떤 동작을 하는지 명시해주는 역할이기 때문에 필수로 지정해야함.
<br>
<br>

- Dispatch -  action 객체를 reducer함수로 전달해줌.

- Reducer - action 객체의 값을 확인하고, type 값에 따라 전역 상태 저장소 store의 상태를 변경해준다.
	- reducer은 사용자의 의도에 맞게만 동작해야하기 때문에 순수함수여야한다. 
	
- store - 상태가 관리되는 오직 하나뿐인 저장소.
	
<br>

---
<br>
	
## Redux Hooks  
Redux Hooks는 React에서 Redux를 사용할 때 활용할 수 있는 Hooks 메서드를 제공

	1. useSelector()
		컴포넌트와 state를 연결하여  redux의 state에 접근할 수 있게 해주는 메서드
	2. useDispatch()
        Action 객체를 reducer로 전달해주는 메서드 

<br>

---

<br>

## Redux의 세 가지 원칙
1. Single source of truth
	- 동일한 데이터는 항상 같은 곳에서 가지고 와야 함.
2. State is read-only 
   -  action 객체를 통해서만 상태를 변경할 수 있음.
3. Changes are made with pure functions
   -  순수함수로만 작성되어야 함.