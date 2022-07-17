function CircularQueue(size){
    this.array = new Array(size); // size만큼 array를 만든다
    this.size = size; // queue에 대한 사이즈를 설정하기 위해 
    this.length = 0;
    this.head = 0; // 읽어야 할 부분의 현재 위치 
    this.tail = 0; //앞으로 쓰여야할 위치 
}


CircularQueue.prototype.enqueue = function (element){
    this.length++;
    this.array[this.tail++ % this.size] = element; 
    // this.tail = (this.tail + 1) % this.size ;
}

CircularQueue.prototype.dequeue = function(){
    // this.length-- ;
    // let ret = this.array[this.head];
    // this.array[this.head] = null;
    // this.head = this.head + 1 % this.size;

    // return ret ;
    this.length--;
    
    return this.array[this.head++ % this.size];
    


    //앞에 것을 삭제한 후에, head룰 한 칸 옮긴다.
}


function answer(n, m, k){
    let result = [];
    
    //make circular
    let cq = new CircularQueue(n);
    for(let i = 1; i <= n; i++){
        cq.enqueue(i);
    }
    


    // 2. 첫번쨰 후보 제거 노드 위치를 설정 
    // cq.tail  = m - 1; // 
    // cq.head  = (n + m - 1 ) % n; 
    cq.tail = cq.head = m - 1;
    // 위처럼 index에 대한 기초처리는 (n + m - 1 ) % n; 경우를 많이 씀.
        //ex) 5 + 0 -1 % 5 ===> 4
    // 이유는, m - 1로 처리를 할 경우, m = 0이면 인덱스 불가이기 때문.

    let count ; 

    result.push(cq.dequeue());

    while (cq.length != 0){
        count = k - 1; // dequeue할 때 head가 한 칸 이동하므로. 정확한 이동거리를 가지려면 -1 해야함.
        while(count--){ // count가 0이될떄까지 ,
            cq.enqueue(cq.dequeue()); // skip값들을 뒤로 삽입.
            console.log(cq, result);
        }
        result.push(cq.dequeue());
         //skip하고 난 맨 앞의 값을 result로 삽입.
         
    }

    return result;
}



console.log(answer(10, 2, 3))