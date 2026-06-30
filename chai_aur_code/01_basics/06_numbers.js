const age=23 //type of age is number
const score =new Number(100) //type of score is object 

const num1=new Number(100)
const num2= Number(100)
console.log(num1==num2) //returns true
console.log(num1===num2) //returns false as one is object and another is number

//diff between them
console.log(age)
console.log(score);

//methods
console.log(typeof score.toString()) //converts to the string 

//static methods methods that belongs to class rather than to the objects

console.log(isFinite(num1))
console.log(Number.isFinite(num2)) 
console.log(Number.isInteger(3.3333))
const checkNum=Number('12abc')
console.log(Number.isNaN(checkNum))

//learn parseIntVS parseFlat

//instacance methods
/*
toString()-> converts the number into the string
toFixed()-> Formats the number with exactly n digits after the decimal point
toPrecision()-> Formats the number with exactly n digits after the decimal point
toLocaleString()-> formatts the numbers acording to the regional rules
valueOf-> returns the primitive number types

*/


//note there are two isFinite one function and other method
//differences between them are
//Number.isFinite() does not conver paramters to the number
//isFinite() converts parameter into number and then checks

