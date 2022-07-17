// NODE(): VALUE와 LEFT, RIGHT NODE저장을 위한 생성자 
function Node(value){
  this.value = value;
  this.left = null;
  this.right = null;
}

//BinsryTree(): 시작 노드인 root를 저장하기 위한 생성자.
function BinaryTree(){
  this.root = null;
}

//_insertNode(): 재귀로 트리를 순회하며 노드 추가 (내부 사용).
BinaryTree.prototype._insertNode = function(node, value){
  //현재값 비교 
  //작으면 욎쪽, 크면 오른쪽
  //왼쪽, 오른쪽에 LEFT , RIGHT POINTER 비어있다면 추가할 노드를 연결
  //비어있지 않다면 하위 노드에서 다시 비교하도록 넘겨준다.

  if(node === null){
    node = new Node(value);
    //비어있으면 현재의 value값을 node로 세팅해줌 
  } else if(value < node.value){
    node.left = this._insertNode(node.left, value);
  } else if(value > node.value){
    node.right = this._insertNode(node.right, value);
  }

  return node; 
  // 새로 업데이트된 node를 root에 새로 업데이트를 해주겠다
  // 이렇게 하지 않으면, call-by-value 값에 의한 호출방식은 함수 호출시 전달되는 변수의 값을 복사하여 함수의 인자로 전달하므로
  // local value의 특성을 가지기 때문에 함수안에서 인자의 값이 변경되어도, 외부의 변수의 값은 변경되지 않으므로, return을 통해 
  // 외부로 보냄.
};

//public method insert(): 노드 추가 
BinaryTree.prototype.insert = function(value){
  this.root = this._insertNode(this.root, value);
  //private method에 재귀를 통해 노드를 만들어감.
};



// 재귀로 트리를 순회하며 전위 순회 (내부사용)
BinaryTree.prototype._preOrderTraverseNode = function(node, callback){
  if(node === null){
    return;
  }
  // 재귀함수에서는 end조건을 만들고 그 다음 반복 수행할 로직을 구현
  
  callback(node);
  this._preOrderTraverseNode(node.left, callback);
  this._preOrderTraverseNode(node.right, callback);
};

//전위 순회하며 노드 출력 
BinaryTree.prototype.preOrderTraverse = function(callback){
  this._preOrderTraverseNode(this.root, callback);
};





// 재귀로 트리를 순회하며 중위 순회 (내부사용)
BinaryTree.prototype._inOrderTraverseNode = function(node, callback){
  if(node === null){
    return;
  }
  // 재귀함수에서는 end조건을 만들고 그 다음 반복 수행할 로직을 구현

  this._inOrderTraverseNode(node.left, callback);
  callback(node);
  this._inOrderTraverseNode(node.right, callback);
};
//중위 순회하며 노드 출력 
BinaryTree.prototype.inOrderTraverse = function(callback){
  this._inOrderTraverseNode(this.root, callback);
};





// 재귀로 트리를 순회하며 후위 순회 (내부사용)
BinaryTree.prototype._postOrderTraverseNode = function(node, callback){
  if(node === null){
    return;
  }
  // 재귀함수에서는 end조건을 만들고 그 다음 반복 수행할 로직을 구현

  this._postOrderTraverseNode(node.left, callback);
  this._postOrderTraverseNode(node.right, callback);
  callback(node);
};

//후위 순회하며 노드 출력 
BinaryTree.prototype.postOrderTraverse = function(callback){
  this._postOrderTraverseNode(this.root, callback);
};



//====================================================

let tree = new BinaryTree();
tree.insert("F");
/*
this.root = null -> F
*/
tree.insert("B");
/*
this.root =  F 
insertNode(F, B)
  F.left = B
  return node(B)
  this.root에 반영
*/
tree.insert("A");
/*
this.root = F
  F.left = B
  B.left = A
*/ 
tree.insert("D");
/*
this.root = F
  F.left = B
  B.left = A
  B.right = D
*/ 
tree.insert("C");
tree.insert("E");
tree.insert("G");
tree.insert("I");
tree.insert("H");

console.log(tree);


function printNode(node){
  process.stdout.write(`${node.value} -> `);
}

console.log("********* pre-order **********");
tree.preOrderTraverse(printNode);
console.log("end");

console.log("********* in-order **********");
tree.inOrderTraverse(printNode);
console.log("end");

console.log("********* post-order **********");
tree.postOrderTraverse(printNode);
console.log("end");