class Queue {
    constructor() {
      this.storage = {};
      this.front = 0;
      this.rear = 0;
    }
  
    size() {
      return this.rear
    }
      
      // 큐에 데이터를 추가 할 수 있어야 합니다.
    enqueue(element) {
      this.storage[this.rear] = element;
      this.rear += 1;
    }
      
      // 가장 먼저 추가된 데이터가 가장 먼저 추출되어야 합니다.
    dequeue() {
      // 빈 큐에 dequeue 연산을 적용해도 에러가 발생하지 않아야 합니다
      if (this.rear === 0) {
        return;
      }
  
      const result = this.storage[this.front];
      delete this.storage[this.front];
      this.front += 1;
  
      return result;
    }
  }

  const queue = new Queue();

queue.size(); // 0
for(let i = 1; i < 10; i++) {
  	queue.enqueue(i);
}
console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); // 2
queue.size(); // 7
queue.enqueue(10);
queue.size(); // 8
queue.dequeue(); // 3
queue.dequeue(); // 4
queue.size(); // 6