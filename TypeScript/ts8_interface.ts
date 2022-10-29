type Words1 = {
  [key: string]: string;
};

class Word1 {
  constructor(
    public readonly term: string, 
    public readonly def: string
    ) {}
}

class Dict1 {
  private words: Words1;
  constructor() {
    this.words = {};
  }

  add(word: Word1) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  static hello(){
    return "hello"
  }
}
const num = new Word1("1", "2");
const a = new Dict1();
a.add(num);

console.log(num.def)
// num.def = "254" readonly속성을 사용하였기 때문에 읽기 전용 처리가 되었다.
console.log(a);


////////////////////============

// // 타입을 사용자가 지정한 특정 옵션으로만 제한할 수도 있다.
// // 지금까지는 string 과 같은 concrete 타입을 썼어야 했지만
// // concrete 타입의 특정값을 지정할 수 있다.

// //"red" 또는 "blue" 또는 "yellow"만 입력 가능한 타입 
// type Team = "red" | "blue" | "yellow"

// // 1 또는 5 또는 10만 생성가능한 타입 
// type Health = 1 | 5 | 10

// type Player = {
//   nickname:string,
//   team: Team
//   health: Health
// }

// const youngha : Player = {
//   nickname: "young-ha",
//   team : "red",
//   health : 10
// }

//========= 

// interface 오직 object의 모양을 특정해주기 위해서만 사용가능하다. 
type Team = "red" | "blue" | "yellow"

// 1 또는 5 또는 10만 생성가능한 타입 
type Health = 1 | 5 | 10

interface Player  {
  nickname:string,
  team: Team
  health: Health
}

const youngha : Player = {
  nickname: "young-ha",
  team : "red",
  health : 10
}



// ==== 
// interface는 class 처럼 사용도 가능하다.

interface User {
  name : string 
  alive  : Boolean
}

// 인터페이스는 클래스처럼 상속이 가능하다. 
interface DeadPlayer extends User {

} 

const player123 : DeadPlayer = {
  name : "ben",
  alive : false
}

// 위 interface 를 type형식으로 이용하려면 다음과 같이 써야함.
type User1 = {
  name : string 
  alive  : Boolean
}

type DeadPlayer2 = User1 & {

}

const player124 : DeadPlayer2  = {
  name : "tom",
  alive : false
}


// 같은 interface를 여러번 사용하면 typeSrcipt는 interface들을 병합해준다. 
// 이것은 type으로는 사용하지 못한다. 
interface Coffee {
  name : string
}
interface Coffee {
  color : string
}
interface Coffee {
  taste : string
}

const iceAmericano: Coffee = {
  name : "ice-americano",
  color : "brown",
  taste : "bit"
}







