class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  dequeue() {
    // 가장 앞에 있는 요소를 제거하고 그 자리를 가장 뒤에 있는 요소로 대체한다.
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      //bubble down
      this.sinkDown();
    }

    return min;
  }

  sinkDown() {
    // 가라앉혀야 하는 값 idx
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0]; // end

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;

      // 이 인덱스들이 값에 직접 접근하기전 유효한지 먼저 확인해주기 위해 값을 넣지 않음
      let leftChild, rightChild;

      // 루프 안에서 자리 바꾸기를 하는 위치를 추적
      // 자리 바꾸기를 하는 조건인 더 큰 숫자를 찾는 상황,
      // 즉 swap를 null이 아닌 다른 것으로 설정해주는 상황이 발생하지 않는 경우
      // 즉, 왼쪽 자식과 오른쪽 자식, 이 둘다 보다 더 크면 swap는 null로 유지되고 루프는 깨짐
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }

      // swap이 null이면 위치를 바꿀 필요가 없으므로 루프에서 빠져나옴
      if (swap === null) break;

      // 아니면 부모와 자식의 위치를 바꿈
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

let me = new PriorityQueue();
me.enqueue("HI", 5);
me.enqueue("MYNAME", 4);
me.enqueue("IS YOUNGHA", 1);
me.enqueue("he", 0 )
me.enqueue("she", 2 )
me.enqueue("it", 3 )

console.log(me);

me.dequeue();
me.dequeue();
console.log(me);
