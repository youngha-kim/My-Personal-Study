const HASH_SIZE = 5 ; // 충돌 빈도를 증가시키기 위해 5로 변경 

//Element(): key , value 저장을 위한 생성자 
function Element(key, value){
    this.key = key ; 
    this.value = value;
};


function LinearHashTable(){
    this.table = new Array(HASH_SIZE);
    // hash_size만큼의 길이의 배열을 만든다.
    this.length = 0;
}


//hashCode() : 해시 함수
LinearHashTable.prototype.hashCode = function(key){
    let hash = 0; //hash된 값을 담음.
    for(let i = 0; i < key.length; i++){
        hash += key.charCodeAt(i);
        //문자 하나하나 charactercode(내부 실제 값)로 변환한다음 저장.
    }
    return hash % HASH_SIZE;
};

// put(): 데이터 추가 
LinearHashTable.prototype.put = function(key, value){
    let index = this.hashCode(key); //key값을 넣었을 때, 반환되는 index
    let start_index = index; // 한 바퀴 돌았는지에 대한 여부 출력 
    console.log(`key: ${key} -> index: ${index}`);

    do{
        if(this.table[index] === undefined){
            this.table[index] = new Element(key, value);
            return true;
        }

        index = (index + 1) % HASH_SIZE;
    } while(index !== start_index){
        return false;
    };
    
}


LinearHashTable.prototype.get = function(key){
    let index = this.hashCode(key);
    let start_index = index;

    do{ // while 뒤가 참이면 if 실행 
        if(this.table[index] !== undefined && 
            this.table[index].key === key){ // key까지 같아야 충돌값을 피할 수 있음.
                return this.table[index].value;
        } 
        
        index = (index + 1) % HASH_SIZE;
    } while (index !== start_index); //startindex가 같을 때까지 순회한다.
    
    return undefined; // 위에 return이 안나오면, 값이 없는 것이기 때문에 오류처리 

};


LinearHashTable.prototype.remove = function(key){
    let index = this.hashCode(key);
    let start_index = index ; 

    do{ // 첫째 뺴고 실행 
        if(this.table[index] !== undefined && this.table[index].key == key){
           let element = this.table[index];
           delete this.table[index];
            this.length--;

           return element ;
        }
        index = (index + 1) % HASH_SIZE;

    } while(index !== start_index); // 같으면 한 바퀴 돌아서 만난것이기 때문에 결국 비교할 값이 없다는 뜻임.
    return undefined ;
}   




LinearHashTable.prototype.clear = function(){
    this.table = new Array(HASH_SIZE);
    this.length = 0 ;
};

LinearHashTable.prototype.size = function(){
    return this.length;
};

LinearHashTable.prototype.getBuffer = function(){
    let arr = [];
    for(let i = 0 ; i < this.table.length ; i++){
        if(this.table[i]){ // 이렇게만 쓰면 값이 있을 때 true, 없으면 false 
            arr.push(this.table[i]);
        }
    }
    return arr ;
}; //산발적으로 흩어져있는데이터 찾아야하기 때문에 for loop 


LinearHashTable.prototype.print = function(){
    for(let i = 0 ; i < this.table.length; i++){
        if (this.table[i]){
            console.log(i + "-> " + this.table[i].key + ": " + this.table[i].value);
        }
    }
}









////==================================


let lht = new LinearHashTable();
lht.put("Ana" , 172);
lht.put("John" , 179);
lht.put("Donnie" , 183);
lht.put("Mindy" , 190);
console.log(lht.put("Paul", 168));
console.log(lht.put("Sue", 163));
console.log("");

console.log(lht.get("Ana"));
console.log(lht.get("Paul"));
console.log(lht.get("Kim"));

console.log(lht.remove("Ana"));
lht.print();
console.log("");
console.log(lht.get("Paul"));
console.log(lht.remove("Paul"));
console.log("");
console.log(lht.get("Paul"));
console.log("");
lht.print()
console.log(lht);





















