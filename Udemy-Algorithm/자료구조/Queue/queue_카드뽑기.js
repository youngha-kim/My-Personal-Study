// function Queue(){
//     this.array = [] ;
// }
// Queue.prototype.dequeue = function(){
//     return this.array.shift() ; 
// }
// Queue.prototype.move = function(){
//         if(this.array == 0){
//             return  "1";
//         }
//         let ret = this.array.shift()
//         return this.array.push(ret);
// }
// // queue.prototype.enqueue = function(){
// //     this.array.push(element);
// // }


// function answer(n){
//     let arr = [];
//     for(i = 0 ; i < n ; i++ ){
//         arr[i] = i + 1 ;
//     }
//     let queue = new Queue(arr);
//     let result = [];

//     for(let i = 0 ; i < n ; i++ ){
      
//         result.push(queue.dequeue());
//         queue.move();
//     }

//     return result;
// }


// console.log(answer(7));

///==============================================
//// 풀이 


function Queue(){
    this.array = [] ;
}
Queue.prototype.dequeue = function(){
    return this.array.shift() ; 
};


Queue.prototype.enqueue = function(element){
    this.array.push(element);
}

function answer(n){
    let result = [];
    let queue = new Queue();

    for(i = 1 ; i <= n ; i++ ){
        queue.enqueue(i)
    }
    
    while(queue.array.length != 0){ 

        result.push(queue.dequeue()); //undefined도 길이의 1로 인식이 되기 때문에, 무한루프돌게됨 
        
        if (queue.array.length != 0){   // 따라서 result에 값을 넣고 0이 되는지를 판변하는  예외 처리 필요.
            
            queue.enqueue(queue.dequeue()); // length가 0인 상태에서 dequeue를 하면 undefined 출력.
        }
        //dequeue 할 것 바로 enqueue에 넣어준다.
    }

    return result;
}


console.log(answer(7));
