function Element(key, value){
  this.key = key ; 
  this.value = value;
}

function HashTable(size){
  this.size = size;
  this.table = new Array(this.size);
  this.length = 0;
}

HashTable.prototype.hashCode = function ( key ){
  let hash = 0 
  for (let i = 0 ; i < key.length; i++){
    hash += key.charCodeAt(i);
  }
  return hash % this.size;
};

HashTable.prototype.put = function (key){
  let index = this.hashCode(key); //index가 곧 부스
  let startindex = index ;

  do{
    if(this.table[index] === undefined){
      this.talbe[index] = new Element(key, index + 1)
      this.length++;
      return true;
    }

    index = (index + 1) % this.size; 
  } while (index !== startindex);
}

HashTable.prototype.get = function(key){
  let index = this.hashCode(key);
  let startindex = index ; 

  do{
    if(this.tble[index] !== undefined && this.table[index].key === key){
      return this.table[index].value;
    } 
  index = (index + 1) % this.size;
  } while (index !== startindex);

  return undefined ;
};


function answer(name){
  let result = [];
  let lt = new HashTable(name.length)
  for(i = 0 ; i < name.length ; i++){
    console.log(lt.hashcode(name[i]));
  }
  
  return result;
}