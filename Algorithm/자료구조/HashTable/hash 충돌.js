
const HASH_SIZE = 1013 ;

//Element(): key , value 저장을 위한 생성자 
function Element(key, value){
    this.key = key ; 
    this.value = value;
};


function HashTable(){
    this.table = new Array(HASH_SIZE);
    // hash_size만큼의 길이의 배열을 만든다.
    this.length = 0;
}


//hashCode() : 해시 함수 (djb2)
HashTable.prototype.hashCode = function(key){
    let hash = 5381; // seed
    for(let i = 0; i < key.length; i++){
        hash = hash * 33 + key.charCodeAt(i);
        //문자 하나하나 charactercode(내부 실제 값)로 변환한다음 저장.
    }
    return hash % HASH_SIZE;
};

HashTable.prototype.put = function(key, value){
    let index = this.hashCode(key); //hashcode를 index로 받음
    console.log(`key: ${key} 는 index: ${index} 에 저장됨`);

    if(this.table[index] !== undefined){
        return false;
    }
    this.table[index] = new Element(key, value);
    //새로운 개체를 만들어서 table index 위치에 넘겨주겠다.

    this.length++;

    return true;

 }


HashTable.prototype.size = function(){
    return this.length;
};
HashTable.prototype.print = function(){
    for(let i = 0 ; i < this.table.length; i++){
        if (this.table[i]){
            console.log(i + "-> " + this.table[i].key + ": " + this.table[i].value);
        }
    }
}



let ht = new HashTable();

console.log(ht);
console.log(ht.put("Ana", 172));
console.log(ht.put("Donnie", 183)); // 13 collision
console.log(ht.put("Sue", 163));
console.log(ht.put("Ana", 168)); // 13 collision
console.log(ht.put("paul", 190));

console.log(ht.size());
ht.print();