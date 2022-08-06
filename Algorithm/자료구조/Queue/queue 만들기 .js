// function Queue(array) {
//     if(array.length == 0){
//         this.array = []
//     } else {
//         this.array = array;
//     }
// }
// Queue.prototype.empty = function(){
//     if(this.array.length === 0){
//         return '1'
//     } else {
//         return '0'
//     }
// };
// Queue.prototype.enqueuX = function(x){
//     this.array.push( x );
// };
// Queue.prototype.dequeue = function(){
//     if(this.empty() == '1'){
//         return '-1'
//     } else {
//         return this.array.shift();
//     }
// };

// Queue.prototype.front = function(){
//     return this.array.length != 0 ? array[0] : '-1';
// };

// Queue.prototype.back = function(){
//     return this.array.length != 0 ? this.array[this.array.length -1] : '-1';
// };



// function answer(cmds){
//     let q = new Queue(cmds);
//     let result = []; 

//     for(i = 0 ; i < q.length ; i++){
//         if(q[i][q[i].length - 2] == " " ){
//             result.push(q.enqueuX(q[i]));
//         } else if (q[i] == "dequeue"){
//             result.push(q.dequeue());
//         }
//     }
//     console.log(q, result, q.enqueuX(q[0]));

// return result

// }




/// ====
function Queue(){
    this.array = [];
}

Queue.prototype.enqueue = function(element){
    this.array.push(element);
}
Queue.prototype.dequeue = function(){
    let ret = this.array.shift(); // 값이 없으면 undefined가 되는데, 이 때를
    return ret === undefined ? -1 : ret;
}
Queue.prototype.size = function(){
    return this.array.length;
}
Queue.prototype.empty = function(){
    return this.array.length === 0 ? 1 : 0;
}
Queue.prototype.front = function(){
    return this.array.length === 0 ? -1 : this.array[0];
}
Queue.prototype.back = function(){
    return this.array.length === 0 ? -1 : this.array[this.array.length - 1];
}



function answer(cmds){
    let result = [];
    let q = new Queue()
    for(let i = 0 ; i < cmds.length ; i++){
        let cmd = cmds[i].split(" ")[0];

        //배열 수만큼 돌면서 cmd를 받고, cmds배열에서 split을 통해 " " 있으면 
        

        switch (cmd) {
            case "enqueue":
                q.enqueue(Number(cmds[i].split(" ")[1]));
                break;
            case "dequeue":
                result.push(q.dequeue());
                break;
            case "size":
                result.push(q.size());
                break;
            case "empty":
                result.push(q.empty());
                break;
            case "front":
                result.push(q.front());
                break;
            case "back":
                result.push(q.back());
                break;
        }
    }


    //1. cmds -> 문자열 파싱 -> 명령어에 따라 함수를 호출 
    //2. 호출 후 반환값을 result

    // Number(cmds[i].split(" ")[1]
    //cmds[i]의 값을 " "의 기준으로 나누고, 두번째 인덱스를 숫자로 바꿈.


return result

}

input = ["enqueue 3", "enqueue 4" ,"enqueue 5","enqueue 6","front","back", "dequeue","size","empty" ];

console.log(answer(input));
