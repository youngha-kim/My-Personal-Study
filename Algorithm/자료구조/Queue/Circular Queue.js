// circularQueu(): 초기 속성값 설정을 위한 생성자 함수

let DEFALT_SIZE = 5;


function CircularQueue(array = [], size = DEFALT_SIZE){
    this.array = array;

    if (array.length > size ) {
        this.size = array.length; 
    } else { 
        this.size = size;
    } 
    // array.length > size ? array.length : size ;

    this.length = array.length;
    this.head = 0;
    //읽어야할 위치 
    this.tail = array.length;
};


// getBuffer():객체 내 데이터셋 반환 
CircularQueue.prototype.getBuffer = function(){
    return this.array.slice();
};


//isEmpty():데이터 비어 있는지 확인 
CircularQueue.prototype.isEmpty = function (){
    return this.length == 0;
};


//isFull() 데이터 꽉 차있는지 확인 
CircularQueue.prototype.isFull = function(){
    return this.length == this.size ; 
}


// enqueue() : 데이터 추가 
CircularQueue.prototype.enqueue = function (element){
    if (this.isFull()) return false ;


    this.array[this.tail % this.size] = element;
    // 1. tail을 size로 나눈 자리에 element를 넣는다 .

    this.tail = (this.tail + 1) % this.size ;
    // 2. tail 포인터를 1증가시킨 값을 size로 나누어 저장.
    //tail이 무한으로 증가하는 것을 막기 위해서.
    // tail값은 size를 넘지 못하는 인덱스로 만들음 .

    this.length++ ;

    return true;
    //% = 모듈러 함수.
    // 현재 tail 이 5이면, 

    
}




CircularQueue.prototype.dequeue = function(){
    if (this.isEmpty()) return undefined;

    let element = this.array[this.head % this.size];
    // array를 삭제하면 기존값이 날아가기 때문에 임시값에 저장
    delete this.array[this.head % this.size];
    // 삭제할 때에도 모듈러를 통해.
    this.head = (this.head + 1) % this.size; 
    this.length --;

    return element;
}

//front() 가장 첫 데이터 반환 
CircularQueue.prototype.front = function(){
    return this.length == 0 ? undefined : this.array[this.head];
};

// dataSize : 큐 내 데이터 개수 확인 
CircularQueue.prototype.datasize = function(){
    return this.length;
};

//clear(): 큐 포기화 
CircularQueue.prototype.clear = function(size =  DEFALT_SIZE){
    this.array = [];
    this.size = size;
    this.length = 0;
    this.head = 0;
    this.tail = 0;
}

//=========================================

let cq = new CircularQueue([1,2,3,4]);
console.log(cq);

// console.log(Object.getOwnPropertyDescriptors(CircularQueue.prototype));


cq.enqueue(5);
cq.enqueue(6);
console.log(cq);


console.log(cq.dequeue());
console.log(cq.dequeue());
console.log(cq);


cq.enqueue(6);
console.log(cq);

console.log(cq.front());
console.log(cq.datasize());