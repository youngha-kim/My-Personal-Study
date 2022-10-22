// ts로 객체지향 기술 구현하기 
// ts에서는 파라미터를 써주기만 한다면, 알아서 constructor함수를 만들어 준다.
class Player{
  constructor(
    private firstName : string,
    private lastName : string,
    public nickname: string,
  ){}

  public getFullName(){
    return `${this.firstName} ${this.lastName}`
  }
}

const youngha = new Player("김", "영하", "김영하")

//private과 public이 JavaScript에서 반영되진 않았다고 할지라도
// 아래처럼 typescript는 에러를 미리 반환해줌.

// console.log(youngha.fistName)
console.log(youngha.nickname)
console.log(youngha.getFullName())

// TypeScript와 객체지향 프로그램이 가지고 있는 훌륭한 것은 추상클래스이다. 자바스크립트에는 없음.

// 추상클래스는 다른 클래스가 상속받을 수 있는 클래스를 말한다.
// 하지만 이 추상클래스는 직접 새로운 인스턴스를 만들 수 는 없다. 
// 대신 추상 클래스 안에서는 메소드를 구현하면 안되고 call signature만 적어두어야 한다. 

// 추상 메소드는 정의만 있을 뿐 몸체(body)가 구현되어 있지 않는다.
// 몸체는 추상클래스를 상속하는 자식클래스에서 해당 추상 메소드를 통해 필히 구현해야한다.

// 추상 메소드는 추상 클래스를 상속받는 모든것들이 필수로 구현을 해야하는 메소드를 의미함.


// 정리하자면
// private를 사용하면 상속받은 클래스 안에서 마저도 this 사용해 접근 불가능
// 그래서 protected를 사용하면 상속받은 클래스 안에서 this 사용해 접근 가능
// 물론 protected로 지정된 것들은 외부에서 사용이 불가능
// 추상클래스 안에 메소드는 적어서는 안되고 call signature만 적어야 함
// 추상클래스 안의 메소드는 결국 구현이 되지 않는다고 나옴 

// 정리를 다시하자면, 
// 추상클래스는 직접접그올 인스턴스를 만들지는 못하는 클래스이지만, 
// 만약 추상클래스에서 메소드를 구현한다면, 상속받는 클래스는 그 메소드를 호출할 수 있다. 
// 또한 메소드를 보호할 수 있다. 
// private 키워드를 앞에 적는다면 자식클래스에서 만든 인스턴스를 통해 호출한 메소드는 에러를 반환 

// 추상메소드는 구현이 되어 있지 않은 (코드가 없는) 메소드이다.
// call signatrue만 가지고 있는데 함수의 이름가 argument를 안 받을 때도 있지만, 
// argument를 받을 경우 argument의 이름과 타입 그리고 함수의 리턴 타입을 정의하고 있다.
// 추상 메소드가 있는 경우, 추상 클래스를 상속받는 클래스에서 추상 메소드를 구현해야 한다.

// private, public, protected 
// 기본적으로 모든 것은 public이다. 
// 만약 private으로 바꾼다면 자식 클래스는 추상 클래스에서 상속을 받지 못한다.
// 왜냐하면 추상 클래스의 생성자함수에서 생성한 초기값은 private으로 설정한다면, 이때는 추상 클래스 내에서만 접근이 가능하기 때문
// 만약 추상클래스의 생성자함수에서 생성한 초기값을 상속받은 클래스에서 사용하고 싶다면, protected으로 바꿔야한다.
// 만약 내가 외부의 모든 곳에서 사용가능하게 만들고 싶으면, public으로 바꿔주면 된다.




abstract class User {
  // class 냐애 정의된 변수는 property라고 부른다.
  constructor(
    //constructor은 생성자 함수 
    // 인스턴스를 생성할 때의 템플릿..??
    private firstName : string ,
    private lastName : string , 
    public nickName: string 
  ){}

  // class 내에 정의된 함수는 method 라고 부른다. 
  abstract getNickName() :void 
}

class Player2 extends User {
  getNickName(): void {
    console.log(this.nickName)
  }
}

// private는 말그대로 개인적인 것을 말하고, User 클래스의 인스턴스나 메소드에서 접근할 수 있으나, 
// 이 클래스는 추상 클래스여서 인스턴스화 할 수 없다. 
// 만약 필드가 외부로부터는 보호되지지만 , 다른 자식 클래스에서 사용되기를 원한다면 private 대신 protected를 사용