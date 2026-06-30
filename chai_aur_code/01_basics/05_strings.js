const name="rajan"
const age=23
//old way
console.log("name: "+ name + " age: "+age)

//new way string interpolation
console.log(`My name is ${name} and i am ${age} years old`)

//other way
const userName= new String("Ronaldo")
console.log(name[0])

// prototype
console.log(name.__proto__)
console.log(name.length)
console.log(name.toUpperCase())
console.log(userName.indexOf("R"))
console.log(userName.charAt(3));
console.log(userName.substring(0,4));
console.log(userName.slice(-1,4));


//creation of string
const firstName="Rajan" // from string literals 
const lastName="Shrestha"
const age1=`23`
const fullName=new String("Cristiano Ronaldo Das Santos Aveiro") //from string objects

console.table([typeof firstName, typeof lastName, typeof age1,typeof fullName])

//here firstName,lastName, age1 are string primitives whereas fullName is stringObjects
const x="2+2"
const y=new String('2+2')
console.log(eval(x)) //gives 4 as an output
console.log(eval(y)) //gives "2+2"

//two ways of accessing individual character of tthe string
console.log(firstName.charAt(1))
console.log(firstName[1]);


//string coercion
/*
undefined is "undefined"
null is "null"
NaN is "NaN"
true is "true"
false is "false"
symbols throws type error while converstin
*/

//when String constructor is called
console.log(new String("Mbappe")) // string mbappe object
console.log(String("Ronaldo"))//string primitives

//replace vs replaceall
console.log("rajanajar".replace('ja','ta')) 
// output will be ratanajar only replace first findings
console.log("rajanajar".replace('ja','ta'))


//slice and substring
//slice as it is in python whereas substring treats negative value as 0 and swap is end is smaller than the start

// read in detail
//replace vs replaceall
// at and charat
// slice vs substrin