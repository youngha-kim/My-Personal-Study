function Node(data){
    this.data = data ;
    this.next = null;
    this.prev - null;
}

function DoubleLinkedList(){
    this.head = null;
    this.tail = null;
    this.length = 0;
}

DoubleLinkedList.prototype.size = function(){
    return this.length;
}

DoubleLinkedList.prototype.isEmpty = function(){
    return this.length === 0 ;
}

DoubleLinkedList.prototype.printNode = function(){
    process.stdout.write("head ->");
    for ( let node = this.head ; node != null ; node = node.next){
        process.stdout.write(`${node.data} -> `);
    }
    console.log("null")
}


DoubleLinkedList.prototype.printNodeInverse = function(){
    let temp = []; //임시 array에 내용들을 push
    process.stdout.write("null <- ");
    for ( let node = this.tail ; node != null ; node = node.prev){
        temp.push(node.data) ; //만들어둔 배열에 node값추출
        console.log(temp);
    }


    for(let i = temp.length - 1 ; i >= 0; i-- ){
        process.stdout.write(`${temp[i]} <- `);
    }
    console.log("tail");
}

DoubleLinkedList.prototype.append = function(value){
    let node =new Node(value);
    
    if(this.head === null) {
        this.head = node ;
        this.tail = node ;
    } else {
        this.tail.next = node ;
        node.prev = this.tail;
        this.tail = node ;
    }

    this.length++;
}


DoubleLinkedList.prototype.insert = function(value, position = 0){
    if(position < 0 || position > this.length){ 
        return false;
    }

    let node = new Node(value), //들어온 값으로 노드만듬.
        current = this.head,
        index = 0,
        prev ; 
 
    if(position === 0){  //첫번쨰에 새 node가 들어온다면
        if(this.head === null){  // 아무것도 없는 상태일 때.
            this.head = node;
            this.tail = node;
        } else {  // 뒤에 current가 있을 때,
            node.next = current;
            current.prev = node; // 앞 뒤 연결
            this.head = node; // head가 가리키는 곳을 신규 노드로 설정.
        }
    } else if (position === this.length){ //제일 끝에 insert 하고 싶을 때,
        current = this.tail; //제일 마지막 노드로 할당한 후, 
        current.next = node; 
        node.prev = current ; 
        this.tail = node ; 
    } else {
        while(index++ < position){
            prev = current;
            current = current.next;
        }
        node.next = current;
        prev.next = node ;

        current.prev = node;
        node.prev = prev;
        }
    
        this.length++;
    return true;
    
}

DoubleLinkedList.prototype.remove = function(value){
    let current = this.head,
    prev = current;
    
    while(current.data != value && current.next != null){
        prev = current;
        current = current.next;
    }
    if(current.data != value){
        return null;
    };

    if (current === this.head) { //삭제할 값이 head가 가리키는 node 즉 current가 첫번째라면,
        this.head = current.next; // current 뒤에 있는 노드에 current.next를 통해서 연결하기.(지워야하기 때문)
        if (this.length === 1) { // current 뒤에 뭐가없으면 
            this.tail = null //
        } else {
            this.head.prev =  null
        }; 
    }else if (current === this.tail){  //마지막 노드 일때 고려
        this.tail = current.prev; 
        this.tail.next = null;

    }else {
        prev.next = current.next;
        current.next.prev = prev; //삭제할 노드(CURRENT 다음)의 PREV

    }
    this.length -- ;
    return current.data;
    
    
}
DoubleLinkedList.prototype.removeAt = function(position = 0){
    if(position < 0 || position >= this.length){
        return null;
    }
    let current = this.head,
        index = 0 ,
        prev ;

    if(position == 0 ){
        this.head = current.next;
        if(this.length == 1 ){
            this.head = null;
            this.tail = null;
        } else {
            this.head.prev = null; 
        }
    } else if (position == this.length - 1){ 
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = null;
    } else {
        while(index < position){
            prev = current;
            current = current.next;
            index = index + 1;
        }
        prev.next = current.next;
        current.next.pev = prev;
    }

    this.length--;
    return current.data;

};

DoubleLinkedList.prototype.indexOf = function(value){
    let index = 0,
        current = this.head;

    while(current != null){
        if(current.data === value ){ // 구하고자 하는 것을 먼저쓰고,
            return index;
        }
        else { // 그것이 나오지 않을 시 상황에 대한 처리.
            current = current.next;
            index ++;
        }
    }
    return -1 ;
}








//================================================
//출력 

let dll = new DoubleLinkedList();
let node 
dll.append(1);


// node = new Node(123);
// dll.head = node;
// dll.tail = node;
// dll.length++ ;
// // console.log(dll);

// node = new Node(456);
// dll.tail.next = node ;
// node.prev = dll.tail;
// dll.tail = node;
// dll.length++;
// // console.log(dll);
dll.insert(12);
dll.insert(190);
dll.insert(11);
dll.insert(3, 4);
dll.printNode();
dll.removeAt(3)
console.log(dll.indexOf(11));
console.log(dll.indexOf(1000));

dll.printNode();




