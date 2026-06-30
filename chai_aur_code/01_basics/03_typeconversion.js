let age="23"

console.log(typeof age);
console.log(typeof(age));

let ageInNumber=Number(age)
console.log(typeof ageInNumber);


// another case
let score="50a"
let scoreInNumber=Number(score)

console.log(scoreInNumber)
console.log(typeof scoreInNumber);


let goals=null
const goal=Number(goals)
let x=undefined
console.log(typeof goal)
console.log(goals)
console.log(goal)
console.log(Number(x))

/*
Number("12ab") Nan
Number(null) 0
Number(undefined) Nan
Number(true ) 1
Boolean(1) true
Boolean(0) false
Boolean("") false
Boolean("raj") true
*/
console.log(Number(null))

console.log(1+"2")
console.log("1"+2)


console.log(1+2+"2")
console.log("1"+2+2)

/*
prefix ++num -> add first and use/return
postfix num++-> use first then add 

*/

let num=6
console.log(num++) // it prints the number first and add 1 so now num is 1 after printing
console.log(++num) //as num is 7 it adds 1 now num becomes 8 and print
