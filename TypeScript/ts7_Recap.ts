// Words 타입이 string만을 property로 가지는 오브덱트
// 제한된 양의 property 혹은 key를 가지는 타입을 정의해 주는 방법.
// property 에 대해서 미리 알지는 못하지만 타입만 알고 있을 때 쓰면된다.

type Words = {
  [key: string]: string;
};
type numbers = {
  [key: number]: string;
};

let dict: Words = {
  potato: "dfd",
};

let numdict: numbers = {
  1: "number",
};
console.log(numdict[1]);

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }

  // private words!: Words;


  // 위에 constructor를 쓰지 않으면, Property 'words' has no initializer and is not definitely assigned in the constructor. 에러 반환 .
  // constructor을 사용한 이유는 초기화 작업을 하지 않았기 때문에 constructor에서 수동으로 초기화 해준 것.
  // constructor를 사용하지 않는 다른 방법을 쓰고 싶다면 !연산자를 앞에 붙혀서 가능하게 만들 수 있음.
  // ex) name!: string;

  // 이렇게하는 이유는 41번째줄의 클래스를 31번째 줄처럼 파라미터의 타입을 클래스로 사용할 수 있기 때문이다.
  // 파라미터가 41번째 줄 클래스의 인스턴스이기를 원할 때 사용할 수 있게 된다.
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    return this.words[term];
  }
}
class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word("kimchi", "한국꺼");

const dict1 = new Dict();

dict1.add(kimchi);

let a = new Dict();
console.log(dict1);
console.log(dict1.def("kimchi"));
