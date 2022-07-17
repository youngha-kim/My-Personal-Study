function File(number) {
    this.number = number;
    this.next = null;
};

function LinkedList(){
    this.head = null;
}

function answer(ll){
    // let reverse = [];
    // for(i = 0 ; i < ll.length ; i++){
    //     j = ll.length - 1 - i
    //     reverse[i] = ll[j]
    //     // console.log(reverse);
    // }
    // ll = reverse;
    let current = ll.head, //첫번재 노드가 
        prev = null, // 이전값
        next ;  //기존 값의 next
        // 기존에는 prev와 current라는 pointer 변수만 있었는데,
        // 또하나의 next라는 변수를 통해서 객체를 가리키게 되었따.

        //역방향정렬
        while (current != null){
            next = current.next; // current가 가야할 곳을 next에 저장 
            current.next = prev;
            prev = current;
            current = next; 
        }
        // head update 
        ll.head = prev; // while에서 null을 만나는 객체의 바로 이전.




    return ll;
   
}

let input =[

 [4, 7, 1, 10, 6],
 [3, 4, 5, 1, 2, 4, 5],
 [5, 8, 7, 3, 4, 1,3,5,6,2,3],

]

LinkedList.prototype.printNode = function(){
    for (let node = this.head ; node != null ; node = node.next){

        process.stdout.write(`${node.number} -> `);
    }
    console.log("null");
}

LinkedList.prototype.makeFiles = function(files){
    let current = this.head; 
    let node ;
     for(let i = 0; i <  files.length ; i++){
         node = new File(files[i]);
         node.next = current;
         this.head = node;

         current = node;
     }
}


for (let i = 0 ; i < input.length ; i++){
    process.stdout.write(`#${i + 1}   `);

    let ll = new LinkedList();
    ll.makeFiles(input[i]);
    answer(ll).printNode();
}


////===============
// 1. train 객체를 nums 수만큼 만들고, next를 이용해서 열차간 연결
// 연결작업: 이전 train 객체.next = 현재 train 객체
// 2. 가장 첫번째 train 객체는 this.head로 연결