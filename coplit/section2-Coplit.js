

// //===============//===== section2 daily coding 1번 =============
// function transformFirstAndLast(arr) {
//   //1. 집어넣을 객체 하나 만듦
//   //2. 배열의 첫번째 와 마지막을 구함 
//   //3. 만든 객체에 집어넣음.

//   if(arr.length === 0){
//     return {}
//   }

//   const newObj = {};
//   newObj[arr[0]] = arr[arr.length-1]

//   console.log(newObj);
//   return newObj
// }

// let arr = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
// transformFirstAndLast(arr);


// //============================section 2 daily coding 2============

// function computeWhenDouble(interestRate) {
//   // 1. 임의의 원금 100을 만들고
//   // 2. count를 만들어,
//   // 3. while 문을 통해 원금의 2배가 될때까지 
//   // 4. 연이율을 적용시켜 비교한다. 
 
//    let origin = 100; 
   
//    let count = 0;
 
//    while(origin < 200){
//      // origin < 2*origin 이런 식으로 쓰면, 조건절이 계속 바뀌어서 
//      // 예상과 다른 값이 나온다. 
//      origin = origin + (origin * (interestRate / 100)) ;
//      count = count + 1 ;
//    }
 
//    return count  
//  }

//  //==================section 3 daily coding 3 ==========

//  function powerOfTwo(num) {
//   //1에다 2를 계속 곱해서 num 과 같아지면 true 리턴 
   
//   let compar = 1;
//    if (num === 1) {
//     return true;
//   }

//   while(compar < num){
//     compar = compar * 2;
//     if(compar === num ){
//       return true 
//     } 
//   }
//   return false 
// }

// //================= section 2 daily coding 4 ==============


// function firstCharacter(str) {
//   // TODO: 여기에 코드를 작성합니다.
//   if(str.length === 0 ){
//     return ""
//   }
//   // TODO: 여기에 코드를 작성합니다.
//   let newarr = str.split(" ")  
//   let newstr = ""
//   console.log(newarr)

//   for(el of newarr){
//     newstr = newstr + el[0];
//   }

//   return newstr;
// }

// output = firstCharacter(
//   'The community at Code States might be the biggest asset'
// );
// console.log(output);

// //=========================section 2 daily coding 5 ==============

// function firstReverse(str) {
  
//   let newarr = [...str];
//   console.log(newarr)
//    let newStr = ""
//    while(newarr.length >= 1){
//      newStr = newStr + newarr.pop();
//    } 
//    return newStr
//  }
//  output = firstReverse('I love codestates');
// console.log(output); // "setatsedoc evol I"


// // =======================section 2 daily coding 6 =============
// function letterCapitalize(str) {
//   // TODO: 여기에 코드를 작성합니다.

//   //1. str을 split으로 공백을 기준으로 배열로 나눈다.
//   let newarr = str.split(" ")


//   //2. 요소의 길이가 0이 아닐 경우만, 첫번째의 글자를 대문자로 바꿔준다.
//      // 2-1 for문안에서 첫번째 글자 toUpperCase + 나머지 글자 substr한 결과를 i번째에 재할당해준다
//   for(let i = 0 ; i < newarr.length; i++){
//       if(newarr[i].length > 0){
//       newarr[i] = newarr[i][0].toUpperCase() + newarr[i].substr(1,);
//       }
//   }

//   //3. 배열을 문자열로 다시 바꿔준다(join).
//   return newarr.join(" ")

// }

// function letterCapitalize(str) {
//   // TODO: 여기에 코드를 작성합니다.
//   let newArr = [...str];
//   let newStr = ""
//   // newArr[0] 은 대문자 
//   // newArr[1]부터 이전게 공백이고, 현재가 공백이 아니면, 대문자로 바꾸고 문자열에 넣어줌 
//   newArr[0] = newArr[0].toUpperCase(); 
//   newStr = newStr + newArr[0];
  
//   for (let i  = 1 ; i < newArr.length ; i++){
//     if(newArr[i - 1 ] === ' ' &&  newArr[i] !== ' ' ){
//       newArr[i] = newArr[i].toUpperCase();
//     }
//     newStr = newStr + newArr[i];
//   }

//   return newStr
// }

// let output2 = letterCapitalize('javascript  is sexy ');
// console.log(output2); // "Javascript  Is Sexy 


// console.log(typeof " ")

//======================section 2 daily coding 7 =====================

// function convertListToObject(arr) {
//     // TODO: 여기에 코드를 작성합니다.
//     let newobj = {}
//     for(let el of arr){
//       newobj[el[0]] = el[1]
//       console.log(el[0])
//     }
//     console.log(newobj)
//     return newobj
//   }
  
//   const arr = [
//     ['make', 'Ford'],
//     ['model', 'Mustang'],
//     ['year', '1964'],
//     ['make', 'Bill'],
//   ];
  
//   let output = convertListToObject(arr);
  
//   console.log(output) // -->


// ======= section 2 daily coding 10 =============================

// function insertDash(str) {
//     // TODO: 여기에 코드를 작성합니다.
//    //만약에 이전 숫자가 홀수이고, 현재 숫자가 홀수 일때
//    // 그 사이에 '-' 하나를 추가한다. 
//    let newStr = '';
//     for(let i = 0 ; i < str.length ; i++){
//       if(Number(str[i-1]) % 2 === 1 && Number(str[i]) % 2 === 1  ){
//         newStr = newStr + '-' + str[i]
//       }
//       else {newStr = newStr + str[i]}
//     }
  
//     return newStr
//   }

//   let output = insertDash('454793');
//   console.log(output); // --> 4547-9-3

// ======= section 2 daily coding 11 =============================

function removeExtremes(arr) {
    // 배열을 입력받아, 반볻문을 돌려 키를 문자열의 길이, 값을 배열의 요소로 받는 객체로 만든다.
    let newObj = {}
  
    for(let el of arr){
      newObj[el.length] = el
    }

    //객체의 첫번째(길이 제일 짤은거)랑 마지막(길이 제일 긴거)을 제외한 거만 원본 배열에서 필터로 걸러주자 
    let short= Object.values(newObj)[0] //객체도 배열처럼 인덱스로 접근 가능. 
    let long = Object.values(newObj)[Object.keys(newObj).length-1] //객체도 배열처럼 length 쓸 수 있음.
    // console.log('shortvalue: ',short)
    // console.log('longvalue :', long)

    const newArr = arr.filter((el) => 
      el !== short && el !== long
    )
    return newArr
  }
  
  let output = removeExtremes(['a', 'b', 'c', 'def']);
  console.log(output); // --> ['a', 'b']
  
  output = removeExtremes(['where', 'is', 'the', 'longest', 'word']);
  console.log(output); // --> ['where', 'the', 'word',]








