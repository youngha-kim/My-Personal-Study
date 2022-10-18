let a : number = 1 ;
let b : string = "ie";
let c : boolean = true;
let aArr : number[] = [1,2,4];
let bArr : string[] = ["le", "se", "ec"];
let cArr : boolean[] = [true];
console.log(a, b , c, aArr, bArr);

// ==========

const Player = {
  name :  "youngha"
}

// optional parameter 지정하는 법 
// 타입에 ? 붙히면 optional ? 붙히지 않는다면, 필수로 지정한 타입에 맞는 값들을 모두 입력해 주어야 한다. 
// 삼항연산자처럼 작동 
const player1 : {
  name: string,
  age? : number
} = {
  name : "youngha",
}

if(player1.age && player1.age < 10){
    console.log(player1.age)
} else {
  console.log(player1)
}

// ========

// 아래와 같이 타입이 반복된다면 Alias를 사용할 수 있따. 
type Age = number; // 굳이 이렇게 쓸필요는 없지만 가능 함.
type Player = {
  name: string,
  age? : Age
}


const player2 : Player = {
  name : "2",
}
const player3 : Player = {
  name : "3",
}
const player4 : Player = {
  name : "4",
}

// ==========

// 함수의 return 값의 타입을 지정하는 법
// function playerMaker(name:string) : Player { //인수의 타입을 지정 
//   return{
//     name
//   }
// };

// 화살표 함수 
const playerMaker = (name : string) : Player => ({name}) //javascript와는 다르게 () 붙혀 주어야 함

const nico = playerMaker("nico")
nico.age = 12; 
console.log(nico)


// 