function Init(actions, start){
    if(typeof start !== 'string'){
      return false
    } else {
      this.start = start
    }
      this.actions = actions
      this.prev = []
      this.next = []
  }
  Init.prototype.moveToPrev = function(){
      this.next.push(this.start);
      this.start = this.prev.pop();
  }
  Init.prototype.moveToNext = function(){
      this.prev.push(this.start);
      this.start = this.next.pop();
  }
  Init.prototype.insertNew = function(element){
          this.prev.push(this.start)
          this.start = element
          this.next = []
  } 
  
  
  function browserStack(actions, start) {
    // TODO: 여기에 코드를 작성합니다.
    const pagenation = new Init(actions, start);
    if(!pagenation.start){
      return false
    }
  
    for(el of actions){
       if(el === 1){
          pagenation.moveToNext();
      } else if (el === -1){
          pagenation.moveToPrev();
      } else {
        pagenation.insertNew(el);
      }
    }
  
    return [pagenation.prev , pagenation.start, pagenation.next]
  }


const actions = ["B", "C", -1, "D", "A", -1, 1, -1, -1];
const start = "A";
const output = browserStack(actions, start);

console.log(output)

