// constructor 메서드는 해당 클래스의 개체 인스턴스를 만들고 
// 초기화하기 위한 클래스의 특수 메서드이다.

class MyName {
  constructor(){
    this.name = "young-ha"
  }
}

const poly1 = new MyName()
console.log(poly1.name) // polygon


// syntax
// constructor을 사용하면 인스턴스화된 개체에서 다른 베소드를 호출하기전
// 수행해야 하는 사용자 지정 초기화를 제공할 수 있다.

class MyNameIs {
  constructor(name){ 
    this.name = name 
  }

  introduce(){
    return `hello! myname is ${this.name}`
  }
}

const youngha = new MyNameIs("young-ha")
console.log(youngha.name)
console.log(youngha.introduce())


// constructor을 설정하지 않으면 기본 생성자가 제공된다.
// 클래스가 기본 클래스인 경우 기본 생성자는 비어있다. 
// constructor(){}

// 클래스가 파생 클래스인 경우는 부모 생성자를 호출하여 제공된 모든 인수를 전달한다.



// 사용자 정의 초기화를 수행할 필요가 없기 때문에 constructor을 사용하지 않음.
// 대신 제공된 인수에서 상위 초기화를 진행한다. 
class ValidationError extends Error {
  printCustomerMessage(){
    return `validation failed :-< - details : ${this.message}`
  }
}

try {
  throw new ValidationError("not a valid phone number")
} catch ( error ){
  if(error instanceof ValidationError){
    console.log( error.name); // 상위 클래스의 속성 사용 
    console.log(error.printCustomerMessage())
  }
  else {
    console.log("unknown error" , error);
    throw error
  }
}

// 하지만 만약 constructor 을 명시하고, 부모 클래스에서 파생된 클래스를 작성할 경우,
// super()을 통해 부모클래스 생성자를 명시적으로 호출해야한다. 

class ValidationError1 extends Error {
  constructor(message) {
    super(message); // 상위 클래스의 생성자를 호출 
    this.name = "ValidationError";
    this.code = "42";
  }

  printCustomerMessage() {
    return `Validation failed :-( (details: ${this.message}, code: ${this.code})`;
  }
}

try {
  throw new ValidationError1("Not a valid phone number");
} catch (error) {
  if (error instanceof ValidationError1) {
    console.log(error.name); // 내가 생성한 클래스의 속성 
    console.log(error.printCustomerMessage());
  } else {
    console.log("Unknown error", error);
    throw error;
  }
}

// new를 통해 인스턴스를 생성할 때의 동작과정 
// -  
//      1. (파생 클래스를 만들때)super()가 호출되기 전에 constructor의 body가 평가된다.
//      - 아직 초기화가 진행되기 이전 상황이기 때문에 this에 접근하면 안된다.
//      - 이 때 this에 접근하게 된다면 publc 필드에서는 undefined가 반환되고, private필드에서는 typeError가 반환된다.
//      2. (파생 클래스를 만들때)super()이 호출되고 상위 클래스를 초기화한다.
//      3. 현재 클래스의 필드가 초기화된다.
//      4. super() 호출 후, 생성자의 body가 평가된다. 
//      - this를 통해서 생성자 body내에서 생성되는 객체에 접근할 수 있다.
//      - new.target을 통해 new로 호출되는 클래스에 접근할 수 있다.

// new (class c extends class B {
//   constructor(){
//     console.log(this.foo())
//   }
// } {
//   #a = 1;
//   foo(){
//     return this.#a
//     // constructor가 실행되고 있는 상황에서 private member가 아직 초기화가 진행되지 않았기 때문에 
//     // typeError 를 반환함.
//   }
// })(); 

// constructor 메소드는 return 값을 가질 수 잇다. 
// 기본 클래스에에서 consrturctor에 무엇이든 return 할 수있지만,
// 파생클래스는 객체 또는 undefined 를 return 해야하며, 그렇지 않으면 typeError가 발생한다.

class ParentClass {
  constructor(){
    return 1;
  }
}

console.log(new ParentClass()) // 객체 형태가 아니라서 무시된다.

class ChildClass extends ParentClass {
  constructor(){
    return {}
  }
}

console.log(new ChildClass()) // 파생 클래스의 constructor에서는 객체 또는 undefined를 리턴하지 않으면 typeerror가 발생


//==========

// overriding
// 부모클래스의 constructor가 개체를 반환하면, 
// 해당 객체는 파생 클래스에서 정의될 this 값으로 사용된다.