
// ================== 1 = ======= = = = ===============

// 문제
// 정수를 요소로 갖는 배열을 입력받아 3개의 요소를 곱해 나올 수 있는 최대값을 리턴해야 합니다.

// 입력

// 인자 1 : arr
// number 타입을 요소로 갖는 임의의 배열

// 출력
// number 타입을 리턴해야 합니다.
// 주의사항

// 입력으로 주어진 배열은 중첩되지 않은 1차원 배열입니다.
// 배열의 요소는 음수와 0을 포함하는 정수입니다.
// 배열의 길이는 3 이상입니다.


const largestProductOfThree = function (arr) {
    // TODO: 여기에 코드를 작성합니다.
    // 내림차순으로 정렬한 다음에 
    // 앞에 두개 곱해놓은 다음 
    // for문을 통해 곱해놓은 수와 나머지를 곱해보아서 제일 큰거 리턴


    let newArr1 =  arr.sort().slice()
    let newArr2 =  arr.sort((a,b) => b-a).slice()
    console.log(newArr1, newArr2)
    let head = []
    let tail = []
    if(newArr1[0]*newArr1[1] > newArr2[0]*newArr2[1]){
        head = newArr1[0] * newArr1[1]
        tail = newArr1.slice(2)
    }else if(newArr1[0]*newArr1[1] < newArr2[0]*newArr2[1]){
        head = newArr2[0] * newArr2[1]
        tail = newArr2.slice(2)
    }

    let compare = 0
     for(el of tail){
        if(el * head > compare){
            compare = el * head
        }
    }
    return compare
  };
  



// 입출력 예시

let output = largestProductOfThree([2, 1, 3, 7]);
console.log(output); // --> 42 (= 2 * 3 * 7)

// output = largestProductOfThree([-1, 2, -5, 7]);
// console.log(output); // --> 35 (= -1 * -5 * 7)



