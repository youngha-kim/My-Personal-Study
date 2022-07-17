function Dequeue(){
    this.array = [];
};

Dequeue.prototype.enqueue_front = function(element){
    this.array.unshift(element);
}
Dequeue.prototype.enqueue_back = function(element){
    this.array.push(element);
}
Dequeue.prototype.pop_back = function(){
    let ret = this.array.pop();
    return ret === undefined ? -1 : ret;
}
Dequeue.prototype.pop_front = function(){
    let ret = this.array.shift();
    return ret === undefined ? -1 : ret;
}

Dequeue.prototype.size = function(){
    return this.array.length;
}
Dequeue.prototype.empty = function(){
    return this.array.length === 0 ? 1 : 0;
}
Dequeue.prototype.front = function(){
    return this.array.length === 0 ? -1 : this.array[0];
}
Dequeue.prototype.back = function(){
    return this.array.length === 0 ? -1 : this.array[this.array.length - 1];
}



function answer(cmds){
    let result = [];
    let dq = new Dequeue();
    
    for(i = 0 ; i < cmds.length ; i++){

        let cmd = cmds[i].split(" ")[0];

        switch(cmd){
            case "push_back":
               dq.enqueue_back(Number(cmds[i].split(" ")[1]));
            break;
            case "push_front":
                dq.enqueue_front(Number(cmds[i].split(" ")[1]));
            break;
            case "pop_front":
                result.push(dq.pop_front());
            break;
            case "pop_back":
                result.push(dq.pop_back());
            break;
            case "empty":
                result.push(dq.empty());
            break;
            case "size":
                result.push(dq.size());
            break;
            case "front":
                result.push(dq.front());
            break;
            case "back":
                result.push(dq.back());
            break;
    
        } 
    };

    
  
return result

}

input = ["push_back 3", "push_front 4" ,"push_back 5","push_front 6","front","back", "pop_front","size","empty" ];

console.log(answer(input));
