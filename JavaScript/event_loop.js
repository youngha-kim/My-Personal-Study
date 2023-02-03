// let i = 0;

// let start = Date.now();

// function count() {

//   // 무거운 작업을 쪼갠 후 이를 수행 (*)
//   do {
//     i++;
//   } while (i % 1e6 != 0);

//   if (i == 1e9) {
//     console.log("처리에 걸린 시간: " + (Date.now() - start) + "ms");
//   } else {
//     setTimeout(count); // 새로운 호출을 스케줄링 (**)
//   }

// }

// count();


let i2 = 0;

let start2= Date.now();

function count2() {

  // 스케줄링 코드를 함수 앞부분으로 옮김
  if (i2 < 1e9 - 1e6) {
    setTimeout(count2); // 새로운 호출을 스케줄링함
  }

  do {
    i2++;
  } while (i2 % 1e6 != 0);

  if (i2 == 1e9) {
    console.log("처리에 걸린 시간2: " + (Date.now() - start2) + "ms");
  }

}

count2();