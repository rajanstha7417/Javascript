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