// function Queue(){
//     this.array = [];
// }
// Queue.prototype.enqueue = function(element){
//     this.array.push(element);
// }

// Queue.prototype.dequeue = function(){
//     return this.array.shift();
// }

// Queue.prototype.front =function (){
//     return this.array[0];
// }
// Queue.prototype.max = function(){
//     return Math.max(...this.array);
// }

// function answer(priorites, select){
//     let arr =  priorites[0];
//     let num = arr[priorites[1]];
//     let count = 0;
//     let max = 0 // 가장 큰 값.


//     //0. 찾고자 하는 값이 첫번쨰 올 때까지
//     while(arr[0] == num && num == max){
//         //1. 제일 큰 값 찾기 
//         for(let i = 0 ; i < arr.length ; i++){
//             if(max < arr[i]){
//                 max = arr[i];
//             }
//         }
//         //2. 큰 값이 첫번 째 나올떄까지 돌림
//         while(arr[0] != max){
//             let ret = arr.shift();
//             arr.push(ret);
//             count++;
//             console.log(arr);
//         }
//         //3 제일 큰값 없애고 제일 큰 값 갱신 
//         if(arr[0] == max){
//             arr.shift();
//             count++;
//         }
//         console.log(arr,count);
//     }
    
    


// }
    
//     let input =[
    
    
//    [[3],0],
    
//    [[3, 4, 5, 6], 2],
    
//    [[1, 1, 5, 1, 1, 1], 0],
    
// ];
    
    
//     for (let i = 0 ; i < input.length ; i++){
//         process.stdout.write(`#${i + 1}   `);
//         console.log(answer(input[i]));
//     }
// //////////////==========================


function Queue(){
    this.array = [];
}
Queue.prototype.enqueue = function(element){
    this.array.push(element);
}

Queue.prototype.dequeue = function(){
    return this.array.shift();
}

Queue.prototype.front =function (){
    return this.array[0];
}

Queue.prototype.max = function(){
    return Math.max(...this.array);
}

function answer(priorites, select){
    let vq = new Queue(); //value queue
    let pq = new Queue(); // priorites queue

    for (let i = 0; i < priorites.length; i++){
        vq.enqueue(i);
        pq.enqueue(priorites[i]);
    }
    let count = 0;

    while(true){
        //출ㄹ력부분
        if(pq.front() === pq.max()){

            count++;
            if(vq.front() === select){
                result = count;
                break;
            }

            else{
                vq.dequeue();
                pq.dequeue();
            }
        }
        //순서변경 부분.
        else{
            vq.enqueue(vq.dequeue()); //shift한 값을 enqueue로 하여 바로저장 
            pq.enqueue(pq.dequeue());
        }
    }



    return result;

}
    
    let input =[
    
    
   [[3],0],
    
   [[3, 4, 5, 6], 2],
    
   [[1, 1, 5, 1, 1, 1], 0],
    
];
    
    
    for (let i = 0 ; i < input.length ; i++){
        process.stdout.write(`#${i + 1}   `);
        console.log(answer(input[i][0], input[i][1]));
    }
    