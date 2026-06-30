"use strict"; //treat all JS Code as newer version

// alert(3+3) we are using this in node not on browser

//data types
let name="rajan"
let age=18
let isLoggedIn= true

//number
//bigint
//string
//boolean
//null -> standalone value
//undefined
//symbol-> used in react to find uniqueness


//objects

console.log(typeof(undefined))
console.log(typeof(null))

//concept of referencing in the js
let name1="rajan"

let name2=name1
console.log(name===name1) // same data type and same value 

/*
when you assign or copy the primitive data types, you are copying the actual value.
when you assign or copy the non primitive data types, you are copying the reference not the actual value 
*/

//learn by doing
let num=5
let num1=num
console.log(num===num1)


let num2=7
let num3=7
console.log(num2===num3)

let num4=7
let num5=7.0
console.log(num4==num5)
console.log(num4===num5) // both gives true as js dont have two distinct data types as int and float everything is number 


console.log(typeof(42.00))

const arr1=Array(1,2,3,4)
console.log(arr1)

const arr2=arr1
console.log(arr1===arr2);

arr2.pop()
console.log(arr2)
console.log(arr1)