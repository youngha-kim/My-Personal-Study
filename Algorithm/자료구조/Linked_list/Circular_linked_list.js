function Node(data) {
    this.data = data;
    this.next = null;
};

function CircularLinkedList() {
    this.head = null;
    this.length = 0;
};

CircularLinkedList.prototype.size = function(){
    return this.length;
};

CircularLinkedList.prototype.isEmpty = function(){
    return this.length === 0;
};

CircularLinkedList.prototype.append = function(value){
    let node = new Node (value),
        current = this.head; 
    if (this.head === null) {
        this.head = node; 
    } else {
        while(current.next != this.head){
            current = current.next;
        }
        current.next = node;
    }
    node.next = this.head;
    this.length++ ;
};
CircularLinkedList.prototype.printNode = function(){
    process.stdout.write("head -> ");
    if (this.length != 0){ 
        process.stdout.write(`${this.head.data} -> `);
        for(let node = this.head.next ; node != this.head ; node = node.next){
            process.stdout.write(`${node.data } -> `);
        }

    }
    console.log("head")
;
};
CircularLinkedList.prototype.insert = function (value, position = 0){
    let node = new Node(value);
    let current = this.head,
        prev ,
        index = 0;

    if(position < 0 || position > this.length ){
        return false;
    }

    if(position === 0){
        node.next = current;
        if(this.isEmpty()){ //비어있으면 새 노드를 current로 연결
            current = node;
            
        } else {
            while(current.next != this.head){ // 만약에 node가 많으면 , current를 끝으로 지정한다음, head와 연결.
                current = current.next;
            }
        };
        this.head = node; 
        current.next = this.head;

    } else {
        while(index++ < position){
            prev = current;
            current = current.next
        }
        prev.next = node;
        node.next = current;
    }

    if(node.next == null){
        node.next = this.head;
    }
    return true; 
}


CircularLinkedList.prototype.remove = function(value){
    let current = this.head,
        prev = current,
        data; //현재 current에 대한, remove 가 삭제할 node의 data정보

    while(current.data != value && current.next != this.head){
         prev = current ;
         current = current.next;
         console.log(current);
    }

    if(current.data != value){
        return null;
    }

    data = current.data; 
    if(current === this.head){

        while(current.next != this.head){
            current = current.next;
            console.log(current.data);
        }

        this.head = this.head.next;
        current.next = this.head; 
    } else {
        prev.next = current.next;
    }

    this.length--;
    return data;



}















///===================================================================
let cll = new CircularLinkedList();
let node = new Node(123);
cll.append(1);
cll.append(100);
cll.append(1000);
cll.insert(192, 0);
cll.insert(2,1);
// cll.head = node;
// node.next = cll.head;
// cll.length++;
// console.log(cll);

// node = new Node(456);
// node.next = cll.head.next;
// cll.head.next = node;
// cll.length++;
// console.log(cll);


// node = new Node(454);
// node.next = cll.head.next.next;
// cll.head.next.next = node;
// cll.length++;
// console.log(cll);
console.log(cll.remove(192));
cll.printNode();

console.log(cll.remove(1));
cll.printNode();









