// 1 첫번쨰로 리스트 만들기 
// 2. 두번쨰로 첫번째 비교하면서 



// function culsuck(array1 , array2){
//     let newarray = [];
//     for(i = 0 ; i < array1.length ; i++){
//         for(j = 0 ; j < array2.length ; j++ ){
//             if(array2[j] == array1[i]){
//                 newarray.push(array2[j]);
//             };
//         };
//     };
//     return newarray;
// };


// let arr1 = ["r", "o", "k", 'n'];
// let arr2 = ["o", "r", "k", "n", "m"]
// console.log(culsuck(arr1, arr2));

////==============================
/// dictionary 풀이 
function Dictionary(items = {}){
    this.items = items;
};

Dictionary.prototype.has = function(key){
    return this.items.hasOwnProperty(key);
};

Dictionary.prototype.set = function(key, value){
    this.items[key] = value; // 딕셔너리 만들기 
};

function answer(class_1, class_2){
    let result = [];
    // class_2 에 대한 key/value 형태로 저장 -> 학생 있는지 없는지 확인 
    let tmp = new Dictionary();
    for(let i = 0 ; i < class_2.length; i++){
        tmp.set(class_2[i], true);
    };
    // class_1의 키 값과  class_2 dictionary의 key가 같은지를 통해 빠르게 확인할 수 있음

    for(let i = 0 ; i < class_1.length ; i++){
        if(tmp.has(class_1[i])){
            result.push(class_1[i]);
        }
    }

    return result;
}

arr1 = ["r", "o", "k", "n"];
arr2 = ["o", "r", "k", "n", "m"];

console.log(answer(arr1, arr2));