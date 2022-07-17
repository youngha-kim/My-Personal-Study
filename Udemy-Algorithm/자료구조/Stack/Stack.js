function Stack(array){
    this.array = array ? array : [];
    //삼항연산자를 이용함.
    //만약 array가 input으로 들어왔다 하면 array , 아니면 [] 반환
}

//getbuffer(); 객체 내 데이터 셋 반환 
Stack.prototype.getBuffer = function(){
    return this.array.slice();
    // slice는 매개변수가 없을 시, 복사.
};

//isEmpty: 객체 내 데이터 o/x
Stack.prototype.isEmpty = function(){
    return this.array.length === 0;
};

// 데이터 추가 
Stack.prototype.push = function(element){
    return this.array.push(element);
};

//데이터 삭제 후 그 값 저장 
Stack.prototype.pop = function(){
    return this.array.pop();
};

//preak(): 단순히 가장 끝 데이터를 반환 
Stack.prototype.peak = function(){
    return this.array[this.array.length - 1];
};

//size() : 스택 내 데이터 개수 확인
Stack.prototype.size = function(){
    return this.array.length ;
};

//indexOf 매개 변수로 넘어온 element 위치 확인
Stack.prototype.indexOf = function(element, position = 0) {
    for(let i = position ; i < this.array.length ; i++){
        if (element === this.array[i]){
            return -1;
        }
    }

};

//includes(): 데이터 존재 여부 확인 
Stack.prototype.includes = function(element){
    for(let i = 0 ; i < this.array.length ; i++){
        if (element === this.array[i]){
            return true;
        } 
        return false;
}
}




////===========================
let stack = new Stack([1, 2, 3]);

console.log(stack);

// let data = stack.getBuffer();
// console.log(data);
// console.log(data == stack.array);

// console.log(stack.isEmpty());
// console.log(Object.getOwnPropertyDescriptors(Stack.prototype));
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
console.log(stack);
console.log(stack.indexOf(1));
console.log(stack.includes(1));