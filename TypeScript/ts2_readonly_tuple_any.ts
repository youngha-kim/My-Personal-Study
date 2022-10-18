
// ==========

//read only
// name을 읽으려는 시도가 있으면 ts가 멈춤 
type Age = number;
type Name = string;
type Player = {
  readonly name: Name,
  age? : Age
}

const playerMaker = (name : string ) : Player => ({name})
const nico = playerMaker("nico")
console.log(nico);
console.log(nico.age = 12);
console.log()


const numbers : readonly number[] = [1,2,3];
// console.log(numbers.push(3))

// =========

//Tuple
// tuple은 array를 생성할 수 있게하는데 최소한의 길이를 가지고 특정 위치에 특정 타입이 있어야함.

// 이 tuple은 최소 3개의 아이템을 가지며, 아래와 같은 순서야함을 의미한다. 
const player : [string, number, boolean] = ["dk", 1, true]

// 이미 타입이 지정되어 있기 때문에 바꾸려해도 바꿀 수가 없다 
// player[0] = 1


// =========
let a : undefined = undefined;
let b : null = null;

// any 는 ts에서 빠져나오고 싶을 때 쓰면 됌
// 추천을 하지 않는 이유는 any를 사용하게 되면 ts에서 받는 모든 보호장치를 잃어버림.
let c :  any[]= [1,2,3,4] ;
let d : any = true;

console.log(c + d)

// 가끔은 any 할 때가 있긴 함



