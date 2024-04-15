"use strict";

// let firstName: string;
// let lastName: string;
// let age : number;
// let isActive : boolean;
// firstName = "Mr."
// lastName = "Micke"
// age = 24
// isActive = true
// const sum = (a: number, b: number): void => {
//   console.log(a + b);
// };
// sum(10, 12);
// console.log(firstName)
// console.log(lastName)
// console.log(age)
// console.log(isActive)
//! union
//--------
// let id: number | string;
// id = "12";
// id = 12;
// console.log(id);
//  function
// const userInf = (id: string | number): void => {
//   console.log(id)
// };
// userInf(12)
// userInf("16")
//!array type
// let fruits: (string | number)[];
//  let fruits: Array<string | number>;     //eivabeo declare kora jay
// fruits = ["apple", "orange",21];
// console.log(fruits);
//! tupple
// let user:[number,string] = [11, 'micky']
// user.push("mike",6)
// console.log(user)
//! enum
// enumer modde constant store kore rakha jay ,and enum a duplicate data rakha jay na
//enum types: numeric, string, hatergenous
// // numeric
// enum userReq {
//   deleteData = 1,
//   getData,
//   putData
// }
// console.log(userReq)
// console.log(userReq[2])
// console.log(userReq.getData)
// // string
// enum userReq2 {
//   deleteData = "DELETE_DATA",
//   getData = "GET_DATA",
//   putData = "PUT_DATA"
// }
// console.log(userReq2)
// console.log(userReq2.deleteData)
// // hatergenous
// enum userReq3 {
//   deleteData = "DELETE_DATA",
//   getData = "GET_DATA",
//   getUserId = 202
// }
// console.log(userReq3)
// console.log(userReq3.deleteData)
// console.log(userReq3[202])
//! object data type
// // let user1: object;
// let user1: {name: string, roll: number}
// user1 = { name: "micky", roll: 12 };
// //object array
// // let user2: object[];
// // let user2: Array<object>;
// let user2: Array<{name:string,roll:number}>;
// user2 = [
//   { name: "micky", roll: 12 },
//   { name: "mike", roll: 13 },
// ];
// console.log(user2)
// optional (not required)
// ----------------
// let user: {name: string, roll?: number}
// user = {
//   name:"micky"
// }
// console.log(user)
//! Custom type
// type User = { name: string; id: number }; // custom type
// // let users: object[];
// let users: User[];
// users = [];
// let user1: User = { name: "Mike", id: 456 };
// users.push(user1);
// let user2: User = { name: "Rocky", id: 234 };
// users.push(user2);
// console.log(users);
// type RequestType = "GET" | "POST"; // custom Type
// let getRequest: RequestType = "GET";
//! Funtion Signature
// ekti functioner body structure kirokom hobe tai function Signature
var userInf1;
var userInf2;
userInf1 = function () {
    console.log("User name is Micky");
};
userInf2 = function (name) {
    return "user name is ".concat(name);
};
userInf1();
userInf2("kiti");
