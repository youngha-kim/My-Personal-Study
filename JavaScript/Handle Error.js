// try구문은 항상 존재해야하지만,
// catch와 finally 구문 둘 중 하나라도 없으면 syntax error 발생

try {
  // 정상적으로 실행될 때의 구문작성
  console.log("try -1 ");
  func();
  //throw :
  // try 코드 안에서 어떤 문제가 일어나게 돼,
  // throw 이하의 구문들을 실행하지 않고 catch블록으로 넘기고 싶은 경우 사용.
  errFunc();
  console.log("try-2");
} catch (e) {
  //try 구문 안에서 에러가 발생할 때, 실행될 코드 작성
  console.log("catch error : ", e);
} finally {
  // try 구문이 정상 작동되거나, 에러가 catch에서 발생하였을 때,
  // 마지막에 처리해줄 구문
  console.log("finally -this code will always be executed");
}

///
function errFunc() {
  throw "release error";
}

function func() {
  try {
    // 정상적으로 실행될 때의 구문작성
    console.log("function  -1 ");
    errFunc();
    console.log("function -2");
  } finally {
    console.log("finally in function :-) this code will always be executed");
  }
}
