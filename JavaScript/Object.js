const obj1 = {
  'mouse' : 2,
  'monitor' : 1,
  'speaker' : 4,
}

const obj2 = {
  test1 : 'test_1',
  test3 : undefined
}

// 키값 유무 검색시 예상치 못하는 결과가 나올 수 있음.
console.log(typeof obj2.test2 === 'undefined')// true 
console.log(typeof obj2.test3 === 'undefined') // true

// 프로퍼티 삭제하기 
delete obj2.test3
console.log("delete" ,obj2)

 // 객체의 key값 구하기 
console.log(Object.keys(obj1)) //[ 'mouse', 'monitor', 'speaker' ]
console.log(Object.keys(obj1).includes('mouse')) //true
 
// 계산된 프로퍼티 사용하기 
let fruit = 'apple';
let bag = {
  [fruit + 'computers'] : 5
}
console.log(bag.applecomputers) // 5
console.log(bag['applecomputers']) // 5 

// key in object 
let user = {name : "Young-ha", age : 28};
let name = "KimJs"
console.log(name in user) // true 

