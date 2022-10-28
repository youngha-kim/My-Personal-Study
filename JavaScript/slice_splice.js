// slice() 메소드는 begin부터 end 전까지의 복사본을 새로운 배열 객체로 반환한다. 즉, 원본 배열은 수정되지 않는다.

// slice(start[, end])
 
// start: 추출 시작점에 대한 인덱스.
// 	• undefined인 경우: 0부터 slice
// 	• 음수를 지정한 경우: 배열의 끝에서부터의 길이를 나타낸다. slice(-2)를 하면 배열의 마지막 2개의 요소를 추출한다.
// 	• 배열의 길이와 같거나 큰 수를 지정한 경우: 빈 배열을 반환한다.
 
// end:추출을 종료할 기준 인덱스. (end를 제외하고 그 전까지의 요소만 추출한다.)
// 	• 지정하지 않을 경우: 배열의 끝까지 slice
// 	• 음수를 지정한 경우: 배열의 끝에서부터의 길이를 나타낸다. slice(2, -1)를 하면 세번째부터 끝에서 두번째 요소까지 추출
// 	• 배열의 길이와 같거나 큰 수를 지정한 경우: 배열의 끝까지 추출.
 
// 반환값:추출한 요소를 포함한 새로운 배열.

let a = [0,1,2,3,4,5]
console.log("========== slice [0,1,2,3,4,5] ==============" )
console.log("slice(0,5)", a.slice(0, 5)) // 첫번째 인자 포함 (두번째 인자 -1)개 만큼 자름
console.log("slice(0)", a.slice(0)) // 전체 길이 복사본 반환 
console.log("slice(undefined)", a.slice(undefined)) // 전체길이 복사본 반환 
console.log("slice(-3)", a.slice(-3)) // 마지막 3개를 추출한다.
console.log("slice(-2,9)", a.slice(-2,9)) // 마지막 2개부터 끝까지 
console.log("slice(-2,5)", a.slice(-2,5)) // [4]
console.log("slice(10)", a. slice(10)) // []



// splice() 메소드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경한다. 이 메소드는 원본 배열 자체를 수정한다.
// push와 pop과 비슷한듯 하다
 
 
// splice(start[, deleteCount[, item1[, item2[, ...]]]])
 
// start:배열의 변경을 시작할 인덱스.
// 	• 음수를 지정한 경우: 배열의 끝에서부터 요소를 센다.
// 	• 배열의 길이보다 큰 수를 지정한 경우: 실제 시작 인덱스는 배열의 길이로 설정
// 	• 절대값이 배열의 길이보다 큰 경우: 0으로 세팅
 
// deleteCount:배열에서 제거할 요소의 수.
// 	• 생략/ 값이 array.length - start보다 큰 경우: start부터의 모든 요소를 제거.
// 	• 0 이하의 수를 지정: 어떤 요소도 제거되지 않는다.
 
// item1, item2, ... : 배열에 추가할 요소.
// 	• 지정하지 않는 경우: splice()는 요소 제거만 수행한다.
 
// 반환값: 제거한 요소를 담은 배열. 
// 	• 아무 값도 제거하지 않았으면 빈 배열을 반환한다.

console.log("==============splice [0,1,2,3,4,5]=================")
a = [0,1,2,3,4,5]
console.log("splice(1,2)" , a.splice(1,2)) //1포함 2개 제거
console.log("남은 배열", a) 
a = [0,1,2,3,4,5]
console.log("splice(2,7)" , a.splice(2,7)) // 배열의 길이보다 크므로 끝까지 제거 
console.log("남은 배열", a) 
a = [0,1,2,3,4,5]
console.log("splice(2,4)" , a.splice(2,4)) // 2포함 4개 제거 
console.log("남은 배열", a) 
a = [0,1,2,3,4,5]
console.log("splice(-6,5)" , a.splice(-6,5)) // 첫번째인자의 절대값이 배열의 길이보다 크므로 0으로 세팅, 2번째 인자 5이므로 5개 제거
console.log("남은 배열", a) 
a = [0,1,2,3,4,5]
console.log("splice(1,1)" , a.splice(1,1)) //첫번째 인자, 두번째 인자 포함한 배열 잘라내기
console.log("남은 배열", a) 
a = [0,1,2,3,4,5]
console.log("splice(-3,-2)" , a.splice(-3,-2)) // 두번째 인자가 0이하이므로 어떤값도 제거하지 않는다.
console.log("남은 배열", a) 


    


// function solution(ingredient) {
//     let cnt = 0 ;
//     let hambug = ingredient.join("");
    
    
//     function jegi(hambug, cnt){
//     if(hambug.replace("1231","") === hambug){
//         return cnt;
//     }
//     else {
//         hambug = hambug.replace("1231","");
//         return jegi(hambug, cnt+1);
//         }
//     }
    
    
//     return jegi(hambug,cnt);
// }


function solution(ingredient) {
  let count = 0;

  for (let i = 0; i < ingredient.length; i++) {
      if (ingredient.slice(i, i + 4).join('') === '1231') {
          count++;
           ingredient.splice(i, 4)
            // console.log( ingredient.splice(i, 4))
          i -= 4;
      }
  }

  return count;
}