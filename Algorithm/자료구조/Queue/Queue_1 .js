//Queue() :생성자 함수로 초기 데이터 설정

function Queue(array){
    this.array = array ? array : [];
    this.tail = array ? array.length : 0 ;
    this.head = 0;
}

//getBuffer() : 객체 내 데이터 셋 반환 
Queue.prototype.getBuffer = function(){
    return this.array.slice();
};


//isEmpty(): 객체 내 데이터 
Queue.prototype.isEmpty = function(){
    return this.array.length === 0;
}

let queue = new Queue([1,2,4]);
console.log(queue);

let data = queue.getBuffer();
console.log(data);
console.log(data === queue.array);


console.log(queue.isEmpty());

console.log(Object.getOwnPropertyDescriptors(Queue.prototype));
// Queue의 prototype에 묶여있는 메소드들을 볼 수 있음.

///=======================================================================
Queue.prototype.enqueue = function(element){
//     return this.array.push(element);
// }; //stack에 push와 비슷하게, 배열의 맨 뒤에 element를 추가한다.
return(this.array[this.tail++] = element)
};
// 현재 tail index에 element룰 업데이트 시키고 tail을 더 끝으로 갱신. 






Queue.prototype.dequeue = function(){
//     return this.array.shift();
// }; // stack과는 다르게 맨 앞의 element를 추출한다.
    // pop과 같이 반환시킴.
    if(this.tail === this.head ){
        return undefined;
    };

    let element = this.array[this.head];
    delete this.array[this.head++];
    return element;
    //원래 head자리의 element를 따로 빼두고,
    // 그 자리를 삭제 시킨다음 포인터 이동.


};
/////=============================
//front(): 가장 첫 데이터 반환 
Queue.prototype.front = function(){
    if(this.array.length == 0){
        return undefined;
    } else {
        return this.array[0];
    }
}
Queue.prototype.size = function(){
    return this.array.length;
}

Queue.prototype.clear = function(){
    this.array = [];
}

////========================================
let queue2 = new Queue([1,2]);
console.log(queue2);


queue2.enqueue(3);
queue2.enqueue(3);
console.log(queue2);



console.log(queue2.dequeue());
console.log(queue2.dequeue());
console.log(queue2);

console.log(queue2.front());

