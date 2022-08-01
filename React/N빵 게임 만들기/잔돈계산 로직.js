
// 잔돈 로직 만들기 : 하드모드 : 잔돈 최대화
let 천원단위 = 1000;
let 백원단위 = 100;
let 만원단위 = 10000
const Calrest = (origin , pop, deg) => {
  let result = 0;
  let returnNum ;
  if(deg === 100){
    let lowCase= parseInt(origin / pop) * 0.01 ;
    console.log(lowCase);
    returnNum = Math.floor(lowCase) * 100;
    result = origin - (returnNum * pop)
    if( returnNum <= result ){
      returnNum = returnNum + 50
      result =  origin - returnNum * pop  
    }

  } else if (deg === 1000){

    let lowCase= parseInt(origin / pop) * 0.001 ;

    console.log(lowCase);
    // returnNum = Math.floor(lowCase) * 1000;
    returnNum = Math.floor(lowCase) * 1000;
    result = origin - ((returnNum) * pop);

    // if( returnNum <= result ){
    //   returnNum = returnNum + 500
    //   result =  origin - returnNum * pop  
    // }
    if(  returnNum <= result ){
      returnNum = returnNum + 500
      result =  origin - returnNum * pop  
    }

  } else if (deg === 10000){

    let lowCase= parseInt(origin / pop) * 0.0001 ;

    console.log(lowCase);
    returnNum = Math.floor(lowCase) * 10000;
    result = origin - (returnNum * pop)

    if( (returnNum + 5000)*pop <= origin ){
      returnNum = returnNum + 5000
      result =  origin - returnNum * pop  
    }
  }
  console.log("===========")
  console.log("게임 전")
  console.log("원금:", origin, ", 인당:",origin/pop )
  console.log("===========")
  console.log("게임 후")
  console.log("이긴사람:",returnNum, "/ 잔돈: ",result , "/ 진 사람:", returnNum + result ) 
  
  return result
}


console.log(Calrest(88000,5, 백원단위))

console.log(4500 * 5)




