let max = new Map();

const keyString = "this is a string";
const keyObj = {};
const keyFunc = () => {};

// set으로 맵 객체에 삽입
max.set("id", 0);
max.set("이름", "kim-young-ha");
// 이차원 배열로 넘겨주는 것도 가능
max.set([
  ["전공", "무역학"],
  ["나이", 29],
]);
max.set(keyString, "value made of a string");
max.set(keyObj, "value made of a obj");
max.set(keyFunc, "value made of a function");
max.set(NaN, "Not a number");

// get으로 맵 객체 조회
// 맵은 키의 타입을 변환시키지 않고 그대로 유지한다. 따라서 아래의 코드는 출력되는 값이 다르다.
let myName = max.get("이름");
let myFunc = max.get(keyFunc);
let myNan = max.get(NaN);

max.delete(NaN);
max.clear();
// console.log(max);
// ==================

const minMap = new Map([
  ["apart", 100],
  ["villa", 80],
  ["house", 50],
]);

// console.log(minMap); //Map(3) { 'apart' => 100, 'villa' => 80, 'house' => 50 }
const arr = [];

// 키들을 대상으로 순회한다.
for (let home of minMap.keys()) {
  arr.push(home);
}
// console.log(arr); //[ 'apart', 'villa', 'house' ]

let num = 0;
for (let amount of minMap.values()) {
  num += amount;
}
// console.log(num); // 230

let entries ;
for(let entry of minMap.entries()){
  // console.log(entry)
}
//[ 'apart', 100 ]
//[ 'villa', 80 ]
//[ 'house', 50 ]


let newMap = new Map();
let keyFunction = function(){}
newMap.set(keyFunc, 2);

let obj = Object.fromEntries(newMap.entries())
// console.log(obj) //{ '() => {}': 2 }

// =======================================

let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// 어떤 고객(john, mary)은 여러 번 방문할 수 있습니다.
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// 셋에는 유일무이한 값만 저장됩니다.
console.log( set.size ); // 3
console.log(set)
for (let user of set) {
  console.log(user.name); // John, Pete, Mary 순으로 출력됩니다.
} 
