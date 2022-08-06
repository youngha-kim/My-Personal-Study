const HASH_SIZE = 37 ;

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


//hashCode() : 해시 함수
HashTable.prototype.hashCode = function(key){
    let hash = 0; //hash된 값을 담음.
    for(let i = 0; i < key.length; i++){
        hash += key.charCodeAt(i);
        //문자 하나하나 charactercode(내부 실제 값)로 변환한다음 저장.
    }
    return hash % HASH_SIZE;
};

//put() : 데이터 추가 
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


 //get() : 데이터 조회 
 HashTable.prototype.get = function(key){
     return this.table[this.hashCode(key)];
 }
 
//remove(): 데이터 삭제 
HashTable.prototype.remove = function(key){
    let element = this.table[this.hashCode(key)];
    
    if(element !== undefined){
        delete this.table[this.hashCode(key)];
        this.length--;
    }
    return element;

};

HashTable.prototype.clear = function(){
    this.table = new Array(HASH_SIZE);
    this.length = 0 ;
}

HashTable.prototype.size = function(){
    return this.length;
};

HashTable.prototype.getBuffer = function(){
    let arr = [];
    for(let i = 0 ; i < this.table.length ; i++){
        if(this.table[i]){ // 이렇게만 쓰면 값이 있을 때 true, 없으면 false 
            arr.push(this.table[i]);
        }
    }
    return arr ;
}; //산발적으로 흩어져있는데이터 찾아야하기 때문에 for loop 


HashTable.prototype.print = function(){
    for(let i = 0 ; i < this.table.length; i++){
        if (this.table[i]){
            console.log(i + "-> " + this.table[i].key + ": " + this.table[i].value);
        }
    }
}









////==================================


let ht = new HashTable();

console.log(ht);
console.log(ht.put("Ana", 172));
console.log(ht.put("Sue", 245));
console.log(ht.put("paul", 34));

console.log(""); // 개행을 위함.
ht.print();





















