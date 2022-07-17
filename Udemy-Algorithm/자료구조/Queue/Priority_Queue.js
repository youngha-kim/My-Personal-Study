// element(): 데이터와 우선순위를 저장하기 위한 생성자 함수.
function Element(data, priority){
    this.data = data; 
    this.priority = priority;
}

//우선순위 큐 구현 
function priorityQueue(){
    this.array = [];
}

//getBuffer() : 객체 내 데이터 셋 반환 
priorityQueue.prototype.getbuffer = function(){
    return this.array.map((element) => element.data)
}// element라는 이름으로 실제 element의 data가, 배열형태로 반환도도록 method를 만듦,

//isEmpty: 객체 내 데이터 존재 여부 파악 
priorityQueue.prototype.isEmpty = function(){
    return this.array.length === 0;
};

////enqueue
priorityQueue.prototype.enqueue = function(data, priority){
    let element = new Element(data, priority);
    let added = false;

    for (let i = 0 ; i < this.array.length ; i++){
        if (element.priority < this.array[i].priority){
            this.array.splice(i, 0, element);
            added = true;
            break;
        }
    }

    if(!added) {
        this.array.push(element);
    }

    return this.array.length;

}

///dequeue() : 데이터 삭제 
priorityQueue.prototype.dequeue = function(){
    return this.array.shift();
}


priorityQueue.prototype.front = function(){
    return this.array.length == 0 ? undefined : this.array[0].data;
} // 데이터가 없을 때, undefined처리 하지 않으면 에러가 남.
    
priorityQueue.prototype.size = function(){
    return this.array.length;
}
priorityQueue.prototype.clear = function(){
    this.array = [];
};



// console.log(Object.getOwnPropertyDescriptors(Element.prototype));
// console.log(Object.getOwnPropertyDescriptors(priorityQueue.prototype));


let pq = new priorityQueue();

pq.enqueue("Alice" , 1 );
pq.enqueue("Bob", 2);
pq.enqueue("Robort", 1);
pq.enqueue("Roy", 3);
console.log(pq);

pq.dequeue();
pq.dequeue();
console.log(pq);

console.log(pq.getbuffer());

console.log(pq.front());
console.log(pq.size());