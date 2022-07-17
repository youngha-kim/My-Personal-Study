import { LinkedList } from "./linked-list.mjs";

const HASH_SIZE = 37;

// Element(key, value)
function Element(key, value){
    this.key = key;
    this.value = value;
}

//ChainingHashTable()
function ChainingHashTable(){
    this.table = new Array(HASH_SIZE);
    this.length = 0;
}

//hashCode(): 해시함수 
ChainingHashTable.prototype.hashCode = function(key){
    let hash = 0;
    for( let  i = 0; i < key.length ; i++){
        hash += key.charCodeAt(i);
    }

    return hash % HASH_SIZE;
};

//// clear():초기화 
ChainingHashTable.prototype.clear = function(){
    this.table = new Array(HASH_SIZE);
    //아예 새거 만들고 거기에 연결시켜버림;
    this.length = 0;
};


ChainingHashTable.prototype.size = function(){
    return this.length;
}

ChainingHashTable.prototype.getBuffer = function(){
    let array = []; // 누적해서 ELEMENT 저장할 임시 배열 
    for(let i = 0 ; i < this.table.length; i++){
        if(this.table[i]){
            let current = this.table[i].head;
            // table에 element가 있으니, 그 값 빼고 연산.
            do{
                array.push(current.data);
                current = current.next
            } while ( current ); //element있으면 true 반환 

        }
    }

}

ChainingHashTable.prototype.print = function(){
    for(let i = 0 ; i < this.table.length ; i++){
        if(this.table[i]){
            let current = this.table[i].head; //element가있으면 당연히 linkedlist가 있다는 가정 떄문에 head를 찍음.
            process.stdout.write(`#${i}`);
            do{
                process.stdout.write(` -> ${current.data.key}: ${current.data.value}`);
                current = current.next;
            }
            while(current);
            console.log("");
        }
    }
    
}

//put데이터 추가 
ChainingHashTable.prototype.put = function(key, value){
    
    let index = this.hashCode(key);

    console.log(`key: ${key} -> index: ${index}`);

    if(this.table[index] === undefined){
        this.table[index] = new LinkedList();
    } // 없으면 linkedlist 만들어라 

    //있으면 element를 Node 형태로  추가해라. append메소드는 linked-list.mjs 에 있음.
    this.table[index].append(new Element(key, value));
    this.length++;

    return true;
};

ChainingHashTable.prototype.get = function(key){
 let index = this.hashCode(key);

 if(this.table[index] !== undefined && !this.table[index].isEmpty()){
     let current = this.table[index].head;

    do{
        if(current.data.key === key){
            return current.data.value;
        }

        current = current.next 
    } while (current);
 }

 return undefined;
    
}   ;

ChainingHashTable.prototype.remove = function(key){
    let index = this.hashCode(key);
    let element = undefined; //지울 요소를 return할 시, 저장하는 변수 없으면 undefined
    if(this.table[index]){
        let current = this.table[index].head;
        do{
            if(current.data.key === key){
                element = current.data;
                this.table[index].remove(current.data);
                this.length -- ;
                if(this.table[index].isEmpty()){
                    delete this.table[index]
                } // 있을 필요가 없으니 삭제한다.
            }
            current = current.next;
        }while (current/*null을 만날 때까지 순회 한다.*/);

        return element;
        //다 순회를 하거나 / 못찾거나 / 아무것도 없으면 element 리턴.
        //
    }

}


////=============================================================================




let cht = new ChainingHashTable();



cht.put("Ana", 172);
cht.put("Donnie", 172);
cht.put("Sue", 172);
cht.put("Jamie", 168);
cht.put("Paul", 190);

// console.log(cht);


console.log(cht.remove("Sue"));
console.log("");
cht.print();

console.log(cht.remove("Jamie"));
console.log("");

cht.print();