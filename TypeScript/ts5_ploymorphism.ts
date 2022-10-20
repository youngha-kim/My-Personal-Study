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
const a = superPrint1([4]);
console.log(a);

console.log(a + 4)
// 에러가 출력되지 않음을 알 수 있다.


// call signature의 return type이 generic일 때와 void일때 
// generic은 객체 클래스 일때만 처리한다. 



//=============================
// generic in use raect 