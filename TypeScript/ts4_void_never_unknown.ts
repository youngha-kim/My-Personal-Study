// ========
// Call Signatures
// 코드에 마우스를 올라면 나온다.
// 함수가 만들어지기 이전에 어떻게 호출해야하는지와 반환 타입을 알려줌.
// 함수가 어떻게 작동하는 지 구현하기 전에 알려주는 역할을 함.
type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;


// ========ß
// overloading
// 오버로딩은 다른 패키지나 라이브러리를 사용할 때 자주 사용되므로 중요

// 위에 작성했던 Add는 다른 방식으로도 나타낼 수 있다.
// 그 이유는 오버로딩을 하기 위해서,
type Add1 = {
  (a: number, b: number): number
  (a: number, b: string): number
};

const add1: Add1 = (a, b) => {
  if(typeof b === "string"){
    return a 
  } else {
    return a + b
  }
  
}
console.log(add1(1, "안녕"))

//오버로딩은 함수가 "서로 다른"여러개의 call signatures를 가지고 있을 때 발생시킨다.

// 실제 오버로딩 사용 예시 
type Config = {
  path : string,
  state : object
}

type Push = {
  (path: string):void,
  (config: Config):void
}

const push:Push = (config) => {
  if(typeof config === "string"){
    console.log(config)
  } else {
    console.log(config.path, config.state)
  }
}

console.log(push("허억"))


// ======== 
// call sugnature 에 파라미터의 개수도 다른 경우 
type Add3 = {
  (a:number, b:number) : number,
  (a:number, b:number, c:number) : number,
}

// 다른 개수의 파라미터를 가지게 되면, 나머지 파라미터도 타입을 지정해 주어야 한다. 
const add3: Add3 = (a, b ,c? :number) => {
  if(c) return a + b + c
  return a + b
}

console.log(add3(1, 2))
console.log(add3( 1, 2,3))
