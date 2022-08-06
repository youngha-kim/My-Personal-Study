const HASH_SIZE = 21;

function HashTable(){
  this.table = new Array(HASH_SIZE);
}

HashTable.prototype.hashCode = function(key){
  return (key + 10) % HASH_SIZE;
}; // -10 ~ 10 의 범위를 0 ~ 20 으로 배열의 INDEX로써 쓸 수 있게 만듦.


HashTable.prototype.put = function(key){
  let index = this.hashCode(key); 
  //키 값을 해시 값으로 만들고, 그 값 자체를 table의 index로 활용.
  if (this.table[index] === undefined){
    this.table[index] = 0; // 아직한번도 수행된적이 없ㅂ어 0으로 초기화
  }

  this.table[index]++;
  //만약 기존값이 있거나 초기화 돼서 0 이라면 
}

HashTable.prototype.get = function(key){
  let index = this.hashCode(key);
  return this.table[index] === undefined ? 0 : this.table[index];
}

function answer( card, select ){
  let result = [];
  let ht = new HashTable();

  // 1. card 내 있는 숫자 카드가 몇개인지 세기
  for(i = 0 ; i < card.length ; i++){
    //카드 숫자  별 count, 10 -> 2, -10 -> 3
    ht.put(card[i])
  }

  // 2. select 내 있는 숫자 카드가 1번의 count한 배열에서 몇 개 있는지 확인.
  for(i = 0 ; i < select.length ; i++){
    // 1번에서 구한 숫자 카드가 있는 경우 , 그 카드의 개수를 넣어주고 없는 경우는 0.
    result.push(ht.get(select[i]));
  }
  return result;
}


console.log(answer(['1', '2', '3', '4', '5'] , ['1','2']));


// ht = new HashTable(6);
// console.log(ht)
// console.log(ht.length);