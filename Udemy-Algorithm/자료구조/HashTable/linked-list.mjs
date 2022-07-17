function Node(data){
    this.data = data; 
    this.next = null;
}
function LinkedList(){
    this.head = null;
    this.length = 0;
}

LinkedList.prototype.size = function(){
    return this.length;
}
LinkedList.prototype.isEmpty = function(){
    return this.length === 0 ;
}
LinkedList.prototype.printNode = function(){
    for(let node = this.head ; node != null ; node = node.next ){
        process.stdout.write(`${node.data} -> `);
    }
    console.log("null");
}
LinkedList.prototype.append = function(value){
    let node = new Node(value), // data = value, next = null 
    current = this.head; // null 
    

    if(this.head === null ){
        this.head = node; // value, null 
    } else {
        while(current.next != null){ //head가 null이 아니므로, current = node가 되어, current.next가 존재하게 됨.
            current = current.next; //
        }
        current.next = node;
    
        
    }
    this.length++;

}

LinkedList.prototype.insert = function(value, position = 0){
    if(position < 0 || position > this.length){
        return false ;
        
    }
    let node = new Node(value),
        current = this.head, // 노드를 순회하면서 노드의 앞 위치를 찾는다.// current = null
        index = 0, // 내가 현재 몇번째 노드만큼 이동했는지 저장
        prev; // 이전 노드 값 저장 

    if(position === 0){
        node.next = current; // next에 자기를 연결 시켜놓고, node.next = null
        this.head = node ; //자기가 그 자리를 대신 
    }else { // 여기 부터는 이미 node가 하나 존재함.
        while(index++ < position){
            prev = current ;
            current = current.next // this.head position이 0이 아닐 경우에만 실행되기 때문에, this.head가 null이 아니라 첫번째 노드를 가리킴.
        }
        node.next = current ; 
        prev.next = node;
    }
    this.length++;
    return true;
};
LinkedList.prototype.remove = function(value){
    let current = this.head,
        prev = current;
    while(current.data != value && current.next != null){
        prev = current ;
        current = current.next; // next를 통해 다음 노드를 가리킴.
    }
    if (current.data != value){
        return null;
    }

    if(current === this.head){
        this.head = current.next;
    } else {
        prev.next = current.next
    }
    this.length--;
    return current.data;


}
LinkedList.prototype.removeAt = function(position = 0){ //아무것도 넘어오지 않았을 때, default = 0
    if(position < 0 || position >= this.length){
        return null;
    }

    let current = this.head,
        prev ,
        index = 0;

    if (position === 0){
        this.head = current.next;

    } else {
        while ( index < position ){
            prev = current;
            current = current.next; 
            index = index + 1
        }

        prev.next = current.next;

    }
    this.length--;
    return current.data;
}

LinkedList.prototype.indexOf = function(value){
    let current = this.head,
        index = 0;
    
    while(current != null){
        if(current.data === value){
            return index;
        }
        index++;
        current = current.next;
    }

    return -1 ;

}

export { LinkedList };
// 생성자 뿐만 아니라 연결되어 있는 메소드들도 넘겨줄 수 있음 
// 다른 js 파일에 

