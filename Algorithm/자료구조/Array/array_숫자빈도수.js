function frq(s, e){
    // 1. 자리수 에 맞는 map만들기.
    let map = [];
    for(let i = 0 ; i < 10 ; i++){
        map[i] = 0;
    }
    console.log(map);


    // 2. 입력값 뽑아내기
    let ori = 0;

    for(let i = s ; i <= e ; i++ ){
        ori = i;
        while(ori != 0){ // 129 9 2 1
           map[ori % 10]++; //map의 자릿수 에 1을 증가시킴.
           ori /= 10;
           ori = parseInt(ori); //소수점 버리고 정수화 시킴. parseInt(12.9) - output 12
                                // parseInt(0.1) - output 0
           
        }

    }
    // 3. 입력값의 자리수 구하기 
    // 4. 배열과 자리수를 비교하여 개수 추가하기 


    return map
}

console.log(frq(10 , 137));