// 일반적인 함수호출
function outSide() {
  console.log("At outside :", this); //  window

  // 내부함수 호출
  function inside() {
    console.log("At inside :", this); // window
  }
  inside();
}
outSide();
// ============================================
//// 메소드 호출

// 객체 또는 클래스 안에서 메소드를 실행한다면 this는 Object 자기 자신
const human = {
  name: "young-ha",
  sayHello: function () {
    // 객체이므로 this는 human을 가리킴
    console.log(this.name, "said hello");
  },
  // 객체의 메소드 
  straightForward: function () {
    // 객체의 메소드 안에서 내부함수 선언 
    function getStep() {
      return this.name + " move"  
    }
    console.log(getStep(), 'straightForward to', this.name, '`s home')
  },
};

human.sayHello(); // young-ha said hello

function welcome() {
  console.log("welcome", this.name);
}
// 현재의 this는 일반 함수 범위의 this이므로 window객체
welcome(); // welcome undefined

// 이 때의 this는 객체 안에서 메소드가 실행되었으므로 human객체를 참조
human.greet = welcome;
human.greet(); // welcome young-ha

human.jump = function () {
  console.log(this.name, "jump!");
};

const youngHa_jump = human.jump;
youngHa_jump(); // undefined jump !

// 객체에서 호출시킨 this를 변수화하여 할당
const youngHa_jump2 = human.jump();
youngHa_jump2; // young-ha jump!

human.straightForward()

//3.생성자 함수 호출
function Human(){
  this.name = 'young-ha'
}

const me = new Human()

console.log(me.name)

function Person(name) {
  // new없이 호출하는 경우, 전역객체에 name 프로퍼티를 추가
  this.name = name;
};

// 일반 함수로서 호출되었기 때문에 객체를 암묵적으로 생성하여 반환하지 않는다.
// 일반 함수의 this는 전역객체를 가리킨다.
var man = Person('Lee');

console.log(man); // undefined
console.log(Window.name); // Lee