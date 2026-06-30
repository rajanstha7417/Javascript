
// Hoisting is the js behaviour where functions and variables declarations are moved to top of their containing scope  during compile time.

// deep down into hoisting with var

console.log(name)
var name="rajan"

// with let
// console.log(age)
// let age=23

// with const
// console.log(salary)
// const salary=12300

/* temporal dead zones is the period of time 
and the area of the code where variable exits 
but you cant access them*/

console.log(snack)
let snack="chai"