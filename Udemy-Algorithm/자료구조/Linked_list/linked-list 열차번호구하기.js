function Train(number) {
    this.number = number;
    this.next = null;
};

function LinkedList(){
    this.head = null;
}

LinkedList.prototype.append = function(value){
    let train = new Train(value);
    let current = this.head;
    if(this.head === null){
        this.head = train;

    } else {
        while( current.next != null){
            current = current.next;
        }
        current.next = train;
    };
}

function answer(nums){
    let ll = new LinkedList()
    let current , prev ;
    for(i = 0 ; i < nums.length ; i++){
        // ll.append(nums[i]);
        current = new Train(nums[i]);

        if (i === 0){
            ll.head = current ;
        } else {
            prev.next = current;
        }
        prev = current;
    }

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

for (let i = 0 ; i < input.length ; i++){
    process.stdout.write(`#${i + 1}   `);
    answer(input[i]).printNode();
}


////===============
// 1. train 객체를 nums 수만큼 만들고, next를 이용해서 열차간 연결
// 연결작업: 이전 train 객체.next = 현재 train 객체
// 2. 가장 첫번째 train 객체는 this.head로 연결