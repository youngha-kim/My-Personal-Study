function solution(cacheSize, cities){
  var answer = 0; 
  let cache = [];
  // 캐시 크기가 0인 경우는 따로 처리 
  if(cacheSize === 0) return cities.length * 5;

  while(cities.length){
    const citiy = cities.shift().toLowerCase();
    if(cache.includes(citiy)){
      cache.splice(cache.indexOf(citiy,1));
      cache.push(citiy);
      answer += 1 ;
    } else {
      if(cache.length === cacheSize){
        cache.shift();
      }
      cache.push(citiy);
      answer += 5;
    }
  }
  return answer
}

console.log(solution(3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"] ))