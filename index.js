// <------- Multi Dimentional Array --->
// let FDB = ['id01', 'id02', 'id04']
// let BDB = ['id01', 'id02', 'id04']
// let CDB = ['id01', 'id02', 'id04']
// let TDB = ['id01', 'id02', 'id04']
// let allstudent = [FDB, BDB, CDB, TDB]; 
// console.log(allstudent)

// <-------Array Literal ------>
// let arr = ['afridi', 'kayes', 'sunny'];
// arr[3] = 'rifat';
// arr[4] = 'niloy';
// we can do this in different way 
// arr[arr.length] = 'rifat';
// console.log(arr)

// <-----Constructor Pattern----->
// const a1 = new Array(5) //[] age theke length declear kora jay
// console.log(a1, a1.length)
// const a2 = new Array(1,2,3,4,5);
// console.log(a2, a2.length);

// <----Factory Pattern---->
// const v1 = Array(5) // new keyword lagbena
// console.log(v1, v1.length)
// const v2 = new Array(1,2,3,4,5);
// console.log(v2, v2.length);
// console.log(a1.__proto__.constructor)
// console.log(v1.__proto__.constructor)

//<----Traverse Array Elements ----->
// একটা অ্যাারের মধ্যে নাম্বার,বুলিয়ান,স্ট্রিং, নাল যাই থাকুক না কেন তার ইন্ডেক্স নাম্বার শুরু হবে 0,1,2,3... এইভাবে
// const arr = [1,2,3,4,5];
// const a = arr[3];
// const b = arr[2];
// const x = 1 , y = 0;
// console.log(a, b , arr[x], arr[y], arr[x] + arr[y], arr[x + y + 2]);

// <----Simple Traverse ---->
// for(let i =0; i < arr.length; i++){
// console.log(arr[i]);
// }

// <----Array sum and avg
// sum = 0
// sum = 0 + 1
// sum = 1 + 2
// sum = 3 + 3
// sum = 6 + 4
// sum = 10 + 5
// let sum = 0;
// for(let i =0; i < arr.length; i++){
//     sum += arr[i]
//     }
//     console.log(sum)
//     console.log(sum / arr.length)

// <---Find large Number ---->
// let arr = [47, 5, 78, 63, 99, 14, 55, 39]
// let largestNumber = arr[0];
// for(let i = 1; i < arr.length; i++){
//     if( arr[i] > largestNumber){
//       largestNumber = arr[i];
//     }
// }
// console.log(largestNumber)

// <------Array fill manual way ---->
const arr1 = new Array(10);
for(let i =0; i < arr1.length; i++){
  arr1[i] = false;
}
console.log(arr1)

const arr2 = new Array(10);
arr2.fill(0);
console.log(arr2)

const names = ['AFRIDI', 'hasan', 'mahir'];
names[0] = 'Samiha'
console.log(names)

// <----fill array and update ---->
const response = new Array(9);
// response.fill(false);
for(let i = 0; i < response.length; i++){
  const rand = Math.floor(Math.random() *10 + 1)
  response[i] = rand > 5 ? 'x' : '0';
}
console.log(response)

// <==== Array is Mutable ===>
function update(arr) {
  
}