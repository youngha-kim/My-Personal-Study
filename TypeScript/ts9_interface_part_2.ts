abstract class User2 {
  constructor( 
    protected firstName : string,
    protected lastName : string 
    ){}

    abstract sayHi(name : string):string
    abstract fullName() : string
}

class Player2 extends User2 {
  fullName(){
    return `${this.firstName} ${this.lastName}`
  }
  sayHi(name:string){
    return `hello ${name}, my name is ${this.fullName()}`
  }
}

// 추상클래스의 문제점은 자바스크립트에서는 abstract의 개념이 없다는 것이다.
// 추상클래스는 자바스크립트에서는 그저 하나의 일반적인 클래스로 만들어진다.
// 우리는 다른 클래스들의 표준 클래스를 만들고 싶은데 js를 거치면 그것이 불가능해짐. 
// 그래서 이때 인터페이스를 사용하는 것임.
// 인터페이스는 가벼워서 컴파일 하면 js로 바뀌지 않고 사라진다.


// 인터페이스느 오브젝트나 클래스의 모양을 묘사하도록 도와주는 것을 응용

interface User3 {
  firstName : string,
  lastName : string,
  sayHi(name : string):string
  fullName() : string
}

interface Human {
  health  : number
}
class Player3 implements User3, Human{
  constructor(
    //인터페이스를 상속할 때에는 property를 private과 protected 으로 만들지 못한다.
    public firstName : string,
    public lastName : string,
    public health : number
  ){}

  fullName(){
    return `${this.firstName} ${this.lastName}`
  }
  sayHi(name:string){
    return `hello ${name}, my name is ${this.fullName()}`
  }
}

// 인터페이스를 만들어두고 팀원이 원하는 각자의 방식으로 클래스를 상속하도록 만드는 것이 
// 팀원 모두 같은 property와 methhod를 사용할 수 있게 유도할 수 있기 때문에 
// 굉장히 유용하다
// 가능하다는 게 가장  큰 장점이다 (마치 swagger같다는 생각이 들었음.)
