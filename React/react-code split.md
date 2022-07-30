<h1> 코드 분할(code spliting)</h1>
<p> DOM을 다루는 정도가 정교해지며, js코드도 방대해지고 무거워 짐에 따라, 이제 번들링을 하게 되면 특정지점에서 코드를 해석하고 실행하는 정도가 느려지게 되었다.</p>
		 
<p> 때문에 번들이 거대해지는 것을 막기위해 코드를 물리적으로 분할하여, 필요한 코드는 적용하고, 필요하지 않으면 나중에 불러와서 사용하는 코드분할을 도입하였다.</p>
		 
<p>코드분할은 런터임시 여러 번들을 동적으로 만들고 불러오는 것으로, Webpack, Rolloup과 같은 번들러가 지원하는 기능이다 .
</p>

---
		 
<h2>React는 어떻게 코드 분할을 할까?</h2>

- 정적 불러오기 
	1. 제약사항 1 : import구문은 항상 문서의 상위에 위치해야함.
	2. 제약사항 2 :  블록문 안에서는 위치할 수 없음
			 
-  동적 불러오기 
	- 정적불러오기의 반대 말으로,이제는 import() 표현식을 통해 동적 불러오기를 수행할 수 있다. 
			 
- Import 표현식 
	1. import(module) 표현식은 모듈을 읽고 이 모듈이 내보내는 것들을 모두 포함하는 객체를 담은 이행된 프라미스를 반환한다. 
	2. 코드내 어디서든 동적으로 사용할 수 있다.
	```javascript
	 let modulePath = prompt("어떤 모듈을 불러오고 싶으세요?");

	 import(modulePath)
	 .then(obj => <모듈객체>)
	 .catch(err => <로딩에러, e.g. 해당하는 모듈이 없는 경우>)
	``` 
	3.  `async` 함수 안에서 "let module = await import(modulePath)" 같이 사용하도 한다.
	```javascript 
	 let {hi , bye} = await import('./say.js');

	 hi();
	 bye();

	 async function load(){
		let say = await import('./say.js');
		say.hi();
		say.bye();
		say.default();
	 }
	```	 	
	
   
		 
---
		
<h2> React.lazy() 메서드 </h2>
 
- React는 SPA로, 한개의 페이지로 구성된 어플리케이션이기 때문에, 사용하지 않는 컴포넌트까지 불러오는 단점이 있다.
- 이 때문에 발생한 지연시간을, 동적 import를 가능하게 해주는 `React.lazy`를 통해 줄일 수 있다. 
- 단독으로는 사용불가하며 React.suspense컴포넌트의 하위에서 랜더링해야한다.
 
 ```javascript
const 컴포넌트=React.lazy(() => import('./컴포넌트 경로'));
```


---

<h2> suspense 메서드</h2>

- `React.suspense`
	- 랜더링이 준비되지 않은 컴포넌트가 존재할 시, 준비 될 때까지, 로딩 화면 등, 다른 컴포넌트들을 먼저 랜더링 시켜준다. 
	- 데이터 로딩과 UI 랜더링이 완전히 분리되어 코드 가독성과 유지 보수성의 향상을 도모할 수 있다.
	- 사용법
		1. 준비되지 않은 컴포넌트에 `<Suspense>` 컴포넌트로 감싼다
		2.  Suspense컴포넌트에 `fallback` 인자에 다른 컴포넌트를 넣어줌으로써, 감싼 컴포넌트의 랜더링이 끝날 때까지, `fallback`인자의 컴포넌트를 먼저 보여준다. 
