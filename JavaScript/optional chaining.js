
// obj?.prop

let users = {}
// console.log(users.user.name)

// TypeError: Cannot read properties of undefined (reading 'name')

// let youngha = {}
// console.log(youngha.user?.name)

const obj = {}
const nestedObj = obj.first && obj.first.inside
console.log(nestedObj)

const nestedObj2 = obj.first?.inside
console.log(nestedObj2)

// 사용가능 문법 


// func?.(args)

let user1 = {
  admain(){
     console.log("관리자 계정")
  }
}

let user2 = {};

// console.log(user1.admain?.()) // "관리자 계정"
// console.log(user2.admain?.())

// ============

// obj?.[expr]
// arr?.[index]
let user3 = {
  name : "youngHa"
}
let user4 = null;
// console.log(user3?.["name"]) //youngHa
// console.log(user4?.["name"]) //undefined

delete user3?.name
// console.log(user3) // {}