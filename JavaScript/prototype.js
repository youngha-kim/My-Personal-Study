
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  intro(){
    console.log(`${this.model}은 ${this.year}년에 만들어진 ${this.make}제품입니다.`)
  }
}
const auto = new Car('어우디', 't8', 2020);
const fix = "er";

console.log(auto instanceof Car) // true
console.log(fix instanceof Car) // false
console.log(auto.intro()) // t8은 2020년에 만들어진 어우디제품입니다.
console.log(Car.prototype.constructor === Car) // true 
console.log(Car.prototype === auto.__proto__) // true
console.log(Car.prototype.intro === auto.intro); // true
console.log(Car.prototype)


console.log(Error)

// =========================================
class C {
  constructor(make, model, year){
    this.make = 4;
    this.model = 5;
    this.year = 6;
  }
}
class D {}

const c = new C();

console.log(c instanceof C) //true 
console.log(c instanceof Object) // true 
// c.prototype.make = 12
const cC = new C()
console.log(c.make) // 4
console.log(cC.make ) // 4 
console.log(C.valueOf()) // [class C]

// ========================================
class Person{}

Person.prototype.eyes = 2 
Person.prototype.nose = 1 

let kim = new Person()

console.log("my eyes :" ,kim.eyes) //my eyes : 2
console.log("my nose :", kim.nose) // my nose : 1



// ==================================

function Coffee(){}; // 함수 
let iceAmericano = new Coffee() // 함수로 생성한 객체
let object = {}; // 이러한 형식은 let object = new Object로 만들어진 것.

console.log(Coffee.prototype)