// Deque() : 초기 속성값 설정을 위한 생성자 함수.
function Deque(array = []){
    this.array = array;
};

//getBuffer() : 객체 내 데이터 셋 반환 
Deque.prototype.getBuffer = function(){
    return this.array.slice();
}


//isEmpty() : 데이터 비어 있는지 확인 
Deque.prototype.isEmpty = function(){
    return this.array.length === 0 ;
}


Deque.prototype.pushFront = function(element){
    return this.array.unshift(element);
}

Deque.prototype.popFront = function(){
    return this.array.shift();
}

Deque.prototype.pushBack = function(element){
    return this.array.push(element);
}

Deque.prototype.popBack = function(){
    return this.array.pop();
}

Deque.prototype.front = function(){
    // if (this.array.length === 0){
    //     return undefined;
    // } else {
    //     return this.array[0];
    // }

    return this.array.length === 0 ? undefined : this.array[0];

    
}

Deque.prototype.back = function(){
    return this.array.length === 0 ? undefined : this.array[this.array.length - 1];
    
}

Deque.prototype.size = function(){
    return this.array.length;
}


Deque.prototype.clear = function(){
    return this.array = [];
}



////=====구현부분==========================

let dq = new Deque([1, 2, 3]);
console.log(dq);



// let data = dq.getBuffer();
// console.log(data === dq.array);
// console.log(data);

// console.log(dq.isEmpty());
// console.log(Object.getOwnPropertyDescriptors(Deque.prototype))
//---
// dq.pushFront(12);
// console.log(dq);

// dq.popFront(12);
// console.log(dq);

// dq.pushBack(12);
// console.log(dq);

// dq.popBack(12);
// console.log(dq);
