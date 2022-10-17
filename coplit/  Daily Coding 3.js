// // ================== 1 = ======= = = = ===============

// // 문제
// // 정수를 요소로 갖는 배열을 입력받아 3개의 요소를 곱해 나올 수 있는 최대값을 리턴해야 합니다.

// // 입력

// // 인자 1 : arr
// // number 타입을 요소로 갖는 임의의 배열

// // 출력
// // number 타입을 리턴해야 합니다.
// // 주의사항

// // 입력으로 주어진 배열은 중첩되지 않은 1차원 배열입니다.
// // 배열의 요소는 음수와 0을 포함하는 정수입니다.
// // 배열의 길이는 3 이상입니다.

// const largestProductOfThree = function (arr) {
//     // TODO: 여기에 코드를 작성합니다.
//     // 내림차순으로 정렬한 다음에
//     // 앞에 두개 곱해놓은 다음
//     // for문을 통해 곱해놓은 수와 나머지를 곱해보아서 제일 큰거 리턴

//     let newArr1 =  arr.sort().slice()
//     let newArr2 =  arr.sort((a,b) => b-a).slice()
//     console.log(newArr1, newArr2)
//     let head = []
//     let tail = []
//     if(newArr1[0]*newArr1[1] > newArr2[0]*newArr2[1]){
//         head = newArr1[0] * newArr1[1]
//         tail = newArr1.slice(2)
//     }else if(newArr1[0]*newArr1[1] < newArr2[0]*newArr2[1]){
//         head = newArr2[0] * newArr2[1]
//         tail = newArr2.slice(2)
//     }

//     let compare = 0
//      for(el of tail){
//         if(el * head > compare){
//             compare = el * head
//         }
//     }
//     return compare
//   };

// // 입출력 예시

// let output = largestProductOfThree([2, 1, 3, 7]);
// console.log(output); // --> 42 (= 2 * 3 * 7)

// // output = largestProductOfThree([-1, 2, -5, 7]);
// // console.log(output); // --> 35 (= -1 * -5 * 7)

//// ============================= 4번 ==============================

// const isSubsetOf = function (base, sample) {
//   for(let i = 0 ; i < sample.length ; i++){
//     for(let j = 0 ; j < base.length ; j++){
//       if(sample[i] === base[j]){
//         sample.shift()
//       }
//     }
//   }
//   if(sample.length === 0) {
//     return true
//   }
//   return false
// }

// const isSubsetOf = function (base, sample) {
//     // naive solution: O(M * N)
//     // return sample.every((item) => base.includes(item));

//     // 각 배열을 정렬: O(N * logN), O(M * logM)
//     // N >= M 이므로, O(N * logN)
//     base.sort((a, b) => a - b);
//     sample.sort((a, b) => a - b);

//     const findItemInSortedArr = (item, arr, from) => {
//       for (let i = from; i < arr.length; i++) {
//         if (item === arr[i]) return i;
//         else if (item < arr[i]) return -1;
//       }
//       return -1;
//     };

//     let baseIdx = 0;
//     for (let i = 0; i < sample.length; i++) {
//       baseIdx = findItemInSortedArr(sample[i], base, baseIdx);
//       if (baseIdx === -1) return false;
//     }
//     return true;
//   };

// let base = [1,3,2,5,4]
// let sample = [1,5]

// const isSubsetOf = function (base, sample) {
//     // TODO: 여기에 코드를 작성합니다.
//     base = base.sort((a,b) => {return a-b})
//     sample = sample.sort((a,b) => {return a-b})

//     if(sample[0] < base[0]){
//       return false
//     }
//     if(sample[sample.length-1] > base[base.length-1] > 0){
//       return false
//     }

//     const findtrue = (base , sample) => {
//       let j = 0;
//       while(j < base.length){
//          if(sample === base[j]){
//             count++;
//             return
//         } else if(sample < base[j] ){
//             return false
//         }
//         j++
//       }
//     }

//     let count = 0;
//      for(let i = 0 ; i < sample.length ; i++){
//         findtrue(base, sample[i])
//      }

//      if(count === sample.length){
//         return true
//      }

//     return false
//   };

//   console.log(isSubsetOf(base, sample))

// // =============================  6번 ===========================

// //만약 node.children이 존재하지 않는다면 arr를 리턴한다.

// let arr = []
// let dfs = function (node) {
//   // TODO: 여기에 코드를 작성합니다.
//   let values = [node.value];
//   console.log(values ,"forward")

//   node.children.forEach((n) => {
//     console.log(values ,"middle")

//     values = values.concat(dfs(n)); // if n =1 ,
//     console.log(values , "last")
//   });

//   return values;
// };

//   // return arr

// // 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
// let Node = function (value) {
//   this.value = value;
//   this.children = [];
// };

// // 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
// // membership check(중복 확인)를 따로 하지 않습니다.
// Node.prototype.addChild = function (child) {
//   this.children.push(child);
//   return child;
// };
// let root = new Node(1);
// // console.log(root)
// let rootChild1 = root.addChild(new Node(2));
// // console.log(root)
// let rootChild2 = root.addChild(new Node(3));
// // console.log(root)
// let leaf1 = rootChild1.addChild(new Node(4));
// let leaf2 = rootChild1.addChild(new Node(5));
// let output = dfs(root);
// console.log(output); // --> [1, 2, 4, 5, 3]

// ======================= 7번 =====================

// function power(base, exponent) {
//   // base^exponent = 1                      if exponent = 0
//   // base^exponent = (base^((exponent-1)/2))^2 * base    if exponent is odd
//   // base^exponent = (base^(exponent/2))^2            if exponent is even
//   let newnum = 1
//   if(exponent % 2 === 1 ){
//     while(exponent >= 1){
//       newnum = newnum*base^(exponent -1 / 2)
//       // newnum = newnum % 94,906,249
//       exponent = (exponent -1 / 2 )
//       }
//     } else {
//       while(exponent >= 1){
//         newnum = newnum*base^(exponent / 2)
//         // newnum = newnum % 94,906,249
//         exponent = (exponent / 2 )
//         }
//     }
//     return newnum

//   }
//   let output = power(3, 40); //  3^40 =  3^20 * 3^20 * 3^10 * 3^5
//   console.log(output); // --> 19334827

// let access = "?access=PAFWJHSKFDJFHSKJDFHWUFJKSHDF&refresh=aasdfasdfasdfasdf";

// const cuttoken = (access) => {
//   // "&" 만날 때 까지 accessStr에 넣다가
//   // access
//   let accessStr = "";
//   let refreshStr = "";

//   let i = 0
//   while(access[i] !== "&"){
//     accessStr = accessStr + access[i]
//     i++
//   }
//   console.log(accessStr)
//   refreshStr = access.replace( accessStr,"")

//   return { "access_token" : accessStr.replace("?access=","") , "refresh_toekn" : refreshStr.replace("&refresh=","")}
// };

// console.log(cuttoken(access))

// useEffect(() => {
//   function getCardList() {
//     let reqOption = {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         withCredentials: true,
//         "Access-Control-Allow-Origin": "*",
//         Authorization: access_token,
//       },
//     };
//     fetch("http://59.16.126.210:8080/study", reqOption)
//       .then((res) => console.log(res))
//       .then((data) => console.log(data));
//   }
// }, []);
