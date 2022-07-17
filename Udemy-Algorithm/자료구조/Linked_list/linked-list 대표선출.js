function Node(data) {
    this.data = data;
    this.next = null;
};

function LinkedList(){
    this.head = null;
}



function answer(n, m, k){
  let result = [];
//   let cl = new LinkedList();
//   let current = cl.head;
//   let prev ;
//   for(let i = 1; i <= n; i++ ){
//     let node = new Node(i);
//     if (i === 1) {
//         cl.head = node; 
//     } else {
//         current.next = node;
//     }
//     current = node;
//   };

  let cl = new LinkedList();
  let current, prev
  for(let i = 1; i <= n; i++ ){
    current = new Node(i);

    if (i === 1) {
        cl.head = current; 
    } else {
        prev.next = current;
    }
    prev = current;
  };
  current.next = cl.head;
  

  //2. start node 위치 설정.
  current = cl.head;
  while(--m){
      prev = current; 
      current = current.next;
  }
 
  //3. 후보자들 중 k만큼 움직이면서 제거
   let count;
   while(current.next != current){ // 자기 자신밖에 안남을 때 까지
       result.push(current.data);
       prev.next = current.next;

       count = k;
       while(count--){
           prev = current;
           current = current.next;
       }
   }
   //4 혼자남은 후보를 result에 추가 
   result.push(current.data);

   return result;
}

let input = [

[8,2,3],

[10,2,3],

[20, 5, 7],

];


for (let i = 0 ; i < input.length ; i++){
    process.stdout.write(`#${i + 1}   `);
    console.log(answer(input[i][0], input[i][1], input[i][2]));
}

//// ===============================
// 1. circular Linked List 만들기 
// 2. start node 설정 (위치 설정)
// 3. 후보자들 중 k만큼 움직이면서 제거 -> 단 혼자 남을 때까찌
// 4. 혼자 남은 후보 번호를 result 에 추가. 