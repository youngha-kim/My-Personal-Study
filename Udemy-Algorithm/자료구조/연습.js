function listPrimes(num) {
  // TODO: 여기에 코드를 작성합니다.
  let sosu = '2';


  for(let i = 3 ; i < num ; i++ ){
		let yesOrNo = true;
		for(let j = 2 ; j < i ; j++){
			if(i % j === 0 ){
				yesOrNo = false; 
				break;
			}
		}
		
		if(yesOrNo === true){
			console.log(i);
			sosu = sosu + '-'+ i;
		}
	}

	return sosu;
}
console.log(listPrimes(18));

// function listPrimes(num) {
//   let result = '2';
//   for (let candi = 3; candi <= num; candi += 2) {
//     let isPrime = true;
//     let sqrt = parseInt(Math.sqrt(candi));
//     for (let divider = 3; divider <= sqrt; divider += 2) {
//       if (candi % divider === 0) {
//         isPrime = false;
//         break;
//       }
//     }

//     if (isPrime) {
//       result = `${result}-${candi}`;
//     }
//   }

//   return result;
// }

