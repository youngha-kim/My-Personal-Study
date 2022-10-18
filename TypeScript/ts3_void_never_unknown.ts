// ======
// ts에서만 존재
// unknown 어떠 타입인지 모를 때 
// 예를들어 api의 타입을 모를 때 unknown이라는 타입을 쓰고 어떤 작업을 하려면 이 변수의 타입을 먼저 확인해야함.
let a : unknown ; 

// 아래와 같이 a 는 단독으로 쓰일 수 없고 타입을 먼저 체크해야 한다.
if(typeof a === 'number'){
  let b = a + 1
} 

if(typeof a === "string"){
  let b = a.toUpperCase();
}


// ===== 

// void (empty 와 비슷함)
// 아무것도 return 하지 않는 함수.
// void를 써도 되고 안써도 된다.
function hello (){
  console.log("x");
}


// ======

// nerver 

// 함수가 절대 return 하면 안될 때 발생.
// 예로 함수가 예외를 발생시킬 때.

// function hello1() : never {
//   return "x"
// }

// return 하지 않고 오류를 발생시키는 함수
function hello1 (): never {
  throw new Error("xxx");
}


function hello2(name:string|number){
  if(typeof name === "number"){
   name
  } else if(typeof name === "string"){
    name
  } else {
    // 위에 두 타입을 설정했기 때문에 
    // 이 코드는 절대 실행되지 않아야 한다는 것을 의미.  
    name
  }
}

