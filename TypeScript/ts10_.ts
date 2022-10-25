// 타입스크립트에 의해 이미 선언된 자바스크립트의 웹 스토리지 API를 위한 인터페이스
// interface Storage {
// }
interface SStorage<T> {
  [key:string] : T
}

//generic <T>를 interface에 물려줌으로써 내가 원하는 타입의 클래스가 생성가능하다.
class LocalStorage<T>{
  private storage : SStorage<T> = {}

  set(key:string , value:T){
    this.storage[key] = value;
  }

  remove(key:string){
    delete this.storage[key]
  }

  get(key:string) : T{
    return this.storage[key]
  }
  clear(){
    this.storage = {}
  }
}


const stringsStorage = new LocalStorage<string>

stringsStorage.get("key")

const booleansStorage = new LocalStorage<Boolean>

booleansStorage.get("keys")