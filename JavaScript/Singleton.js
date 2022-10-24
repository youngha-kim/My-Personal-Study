/// 자바스크립트 싱글턴 구현하기
// - 생성자가 여러 차례 호출 되더라도 실제로 생성되는 객체는 하나이다. 

// - 최초 생성 이후에 호출된 생성자는 최초의 생성자가 생성한 객체를 리턴한다.
// 즉 하나의 객체를 여러번 호출 하지만 메모리에 올라가는건 결국 하나

// 함수형 Singleton
const singleton = (function () {
  let instance = null;

  function Singleton() {
    let count = 0;

    return {
      increasment() {
        count++;
        console.log(count);
      }
    };  
  }

  return {
    getInstance() {
      // 만약 instance에 값이 없다면 if 조건에 맞음
      // 값이 있는 경우 pass
      if (!instance) {
        console.log("최초 생성");
        instance = new Singleton();
      }

      return instance;
    }
  };
})();


const s1 = singleton.getInstance();
const s2 = singleton.getInstance();

console.log(s1); 
console.log(s2); 
console.log(s1 === s2);

s1.increasment()  // 1
s1.increasment()  // 2
const s3 = singleton.getInstance();
console.log(s3)
s3.increasment()  // 3 같은 메모리를 사용한다.
s2.increasment()  // 4 같은 메모리를 사용한다.