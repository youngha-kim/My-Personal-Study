// 생성자 속성 정의
function Person(name, age) { 
    this.name = name;
    this.age = age; //생성자의 property들정의
}

//prototype를 이용한 Person 메서드 정의
Person.prototype.isAudlt = function(){ //그 이외의 method들은 prototype의 새로운 변수명에 함수 등록
    return this.age > 18 ;  
};

// 객체 생성 
const p1 = new Person("bob", 26);
const p2 = new Person("alice", 16);


console.log(p1);
console.log(p2);
// console.log(Object.getOwnPropertyDescriptors(p1));

console.log(p1.isAudlt());
console.log(p2.isAudlt());
