function borrowSlice (){
  var args=[].slice.call(arguments,1,3);
  return args
}
console.log(borrowSlice(1,2,3,4,5,6))

// 빌려쓰기와 바인딩 
// object1이라는 객체가 있고 이 객체는 stuff()라는 메서드를 가진다.
var object1={
  name:"object",
  stuff:function(greet){
    return greet+","+this.name;
  }
}
console.log(object1.stuff( "hi" )); //"hi, object"


// 또 다른 객체 two는 stuff()메서드를 갖고 있지 않지만 one에서 빌려올 수 있다.
var object2={
  name:"another object"
}
console.log(object1.stuff.apply( object2, ['hello'] )); //"hello, another object"

////////////////////

//함수를 변수에 할당하면 함수 안의 this는 전역객체를 가르키게 된다.
var ssay = object1.stuff;
console.log(ssay( 'young-ha' )); //"young-ha, undefined"

//콜백 함수로 전달한 경우
var theAnother={
  name:"Yet another object",
  method: function (callback){
    return callback( 'Hola' );
  }
};
console.log(theAnother.method( ssay )); //"Holla, undefined"

//////////
function bind( o , m ){
  return function(){
    return m.apply(o, [].slice.call( arguments) );
  }
}

var twosay=bind( object2, object1.stuff );
console.log(twosay('young')); // young,another object