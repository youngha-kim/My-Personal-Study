var me = "young-ha";
function outer() {
  console.log("외부 스코프", me);
  function inner() {
    var you = "IU";
    console.log("내부 스코프", me);
  }
  inner();
}
outer();
// console.log(you); // ReferenceError: you is not defined

// lexical scope
var name = "young-ha";
function log() {
  console.log(name);
}

function wrapper() {
  name = "kim";
  log();
}

// log를 호출하기 전에 name을 'kim'으로 바꿈
wrapper();

//스코프는 함수를 선언할때 생기기 떄문에
//아래 log2 안의 name2는 wrapper2안의 지역변수 name2가 아니라,
//전역변수 name을 가리키고 있는 것이다.

// 이유는 함수를 처음 선언하는 순간, 함수의 내부 변수는
// 자기 스코프로부터 가장 가까운 상위 범위의 변수부터 계속 참조하게 된다.
// 따라서 log2함수는 선언될 때, 가장 가까운 상위 변수인 전역변수의 name2를 참조하게 되므로
// kim이 아니라 young-ha가 출력되는 것이다.

// 이런 것을 lexical scoping이라고한다.

var name2 = "young-ha";
function log2() {
  console.log(name2);
}

function wrapper2() {
  var name2 = "kim";
  log2();
}

wrapper2();

//
var another = function () {
  var x = "local";
  function y() {
    console.log(x);
  }
  return { y: y };
};
var newScope = another();
// console.log(newScope.y)

var newScope2 = (function () {
  var x = "local";
  return {
    y: function () {
      console.log(x);
    },
  };
})();


