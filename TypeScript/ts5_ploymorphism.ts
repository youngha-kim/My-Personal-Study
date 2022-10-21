// number와 boolean의 타입을 가진 arr를 리턴하지않는
// 타입의 객체를 만듦
type SuperPrint = {
  (arr: number[]): void;
  (arr: boolean[]): void;
  (arr: string[]): void;
};

const superPrint: SuperPrint = (arr) => {
  arr.forEach((i) => console.log(i));
};

superPrint([1, 2, 4, 5]);
console.log(superPrint([true, false]));
console.log(superPrint(["a", "b", "c"]));

// concrete tpye이란, 우리가 전부터 봐왔던 타입을 말한다.
// number , boolean , void , 등등


// generic이란 타입의 placeholder같은 것이고, concrete type를 대신하여 쓸 수 있다.
// 타입 스크립트는 generic타입을 타입추론을 통해 사용하여 다음 들어올 확실한 타입을 알 수 없을 때 사용한다.
// 즉, 제네릭은 선언 시점이 아니라 생성 시점에 타입을 명시하여 하나의 타입만이 아닌 다양한 타입을 사용할 수 있도록 하는 기법이다.

// console.log(superPrint([1, 2, true]))

// 이 때 call signituare을 사용하여
// (arr : (number | boolean)[]):void 이런식으로 받을 수는 있지만,
// 이러기 위해서는 모든 가능성을 다 조합해서 만들어야 하기 때문에 좋은 방식이 아니다.

type SuperPrint1 = {
  <TypePlaceholer>(arr: TypePlaceholer[]): TypePlaceholer; // generic을 사용하면 이 call signature이 제네릭을 받을 것이라 명시해줌
}; // <>를 통해 타입을 유추하게 만들고, 그 타입의 배열이 될 것이라는 것을 인지하고 그 타입 중 하나를 리턴하도록 
//
const superPrint1: SuperPrint1 = (arr) => arr[0];

console.log("==========")
console.log(superPrint1([1, 2, "string", true]));
const a1= superPrint1([4]);
console.log(a1);

console.log(a1 + 4)
// 에러가 출력되지 않음을 알 수 있다.


// call signature의 return type이 generic일 때와 void일때 
// generic은 객체 클래스 일때만 처리한다. 



//=============================
// generic in use raect 


// 함수형으로 구현하기 
function superPrint2<T>(a: T[]){
  return a[0]
}

const a2 = superPrint2([1,2,3,4])

//==========
// 제네릭을 이용하면, 원하는 대로 코드를 확장하는 것이 가능해진다.
// 타입을 생성하고 그 타입을 또다른 타입에 넣어서 사용할 수 있다.
type Player<E> = {
   name : string,
   extraInfo : E
}
type YounghaExtra = {
  favFood: string
}

type YounghaPlay = Player<YounghaExtra>

const youngha : YounghaPlay= {
  name : "youngha",
  extraInfo:{
    favFood : "김치"
  }
}

// 만약 많은 것들이 있는 큰 타입 하나 가지고 있는데, 그 중 하나가 달라질 수 있는 타입이라면, 
// 거기에 제네릭을 넣으면 된다.
// 그러면 타입을 다양하게 재사용할 수 있다. 

const lynn : Player<null> = {
  name : "lynn",
  extraInfo: null
}


/// 기본적인 타입스크립트의 타입은 제네릭으로 만들어져 있다 .
type A = Array<number>

let a:A = [ 1, 2, 3, 4]


function printAllNumbers(arr: Array<number>){}

