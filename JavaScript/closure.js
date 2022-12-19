let globalFunc ; 
{
  let thisBlockVar = 'this scope';
  globalFunc = function(){
    console.log(thisBlockVar)
  }
}
globalFunc()




// 즉시실행함수도 함수표현식이기 때문에 변수 f에는 함수가 실행의 결과값인 f2 함수가 저장됩니다.
// f1 함수는 선언과 동시에 딱 한번 실행이 되고 이후에 f() 함수를 실행했을 때는 
// f2 함수만 실행이 되는 것입니다. 
// 하지만 f2 함수가 클로저를 만들어 count 변수가 계속 살아있기 때문에 값이 계속 누적됩니다.
//  즉, f() 함수만 접근할 수 있는 스코프가 생긴 것입니다.

const f = (function f1() {
  let count = 0;
  return function f2() {
    console.log(`f는 ${++count}번 호출됨.`);
  };
})();
f();
f();
f();



const t = function t1() {
  let count = 0;
  return function f2(){
    console.log(`t는 ${++count}번 호출됨.`);
    return
  }
};
t()()
t()()
t()()