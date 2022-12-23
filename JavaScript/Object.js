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
let name = "KimJs";
console.log(name in user) // true


// hasOwnProperty
function Car(name){
  this.name = name;
  this.isOption = false;
}
let myCar = new Car('쏘렌토')

console.log(myCar) // Car { name: '쏘렌토', isOption: false }
Car.prototype.year = 3  // 원형객체에 프로토타입 추가 

console.log('year' in myCar) // true  <- 이 경우, 원형객체의 프로퍼티가 검색된다.
console.log(myCar.hasOwnProperty('year')) // false 즉 해당 객체의 직접작인 속상만을 검사할 수 있다.


