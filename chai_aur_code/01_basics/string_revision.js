// A string is a sequence of characters used to represent text
let name='rajan'
let city='parramatta'
let birthYear=2003
let message="I am currently learning JS"

//each character of a string has an index, starting from o
/*
 RAJAN-> string itself
 01234->index
*/


//Strings are immutable which means once strings are created its character can't be changed

//Creating String
//1. using single and doube quote
let userName="rajan7417"
let fullName='Rajan Shrestha'

//2. using template literals backticks
let introduction=`Hi. My name is ${fullName} and I live in ${city}` //variable interpolation
console.log(introduction)

let introduction1=`Hi. My name is ${fullName} and I live in ${city} and I am ${2026-birthYear} years old` //expression inside strings
console.log(introduction1)

let text=` Hi everyone!
how you guys doing today?
Hope everyone doing great
have a good daY!`
console.log(text) //multi line text can be done in js using backticks

//types of String: Primitive vs String object
let greet="Namaste"
console.log(typeof greet) //string and this is primitive string

let greetNepali=new String("Namaste")
console.log(typeof greetNepali) //object

console.log(greet==greetNepali)//true doesnot checks the type checks the data/value
console.log(greet===greetNepali)//false checks type 



//Accessing the characters in Strings
//A. using Index
let language='JavaScript'
console.log(language[0])
console.log(language[-1]) // doesn't support negative indexing using[] notation but through string methods yes

//B. using charAt
console.log(language.charAt(1))
console.log(language.charAt(-1))// this gives empty string

let x=language.charAt(-1)//gives empty string
let y=language[-1] //undefined

//C. using at
console.log(language.at(1))
console.log(language.at(-1)) //using at supports negative indexing as well


//determining the length of an string using .length attribute
console.log(language.length)
let e=''
console.log(e.length) //gives 0


//what does it means strings are immutable?
let str="hello"
str[0]="H"
console.log(str)


//common string opeations
//1. toUpperCase()- Converting to UpperCase
let player="Ronaldo"
console.log(player.toUpperCase())

//2. toLowerCase()- Converting to the lowercase
console.log(player.toLowerCase())

//3. trim()-Removing spaces from start and end
let msg="   welcome to the world of programming.        "
console.log(msg.trim())
console.log(msg.trimEnd())
console.log(msg.trimStart())

//4.includes(string)- checking if string includes something
console.log(msg.includes('to')) //returns true or false 

//5. startsWith() and endsWith() 
console.log(player.startsWith('R')) //true as Ronaldo as R in starting index
console.log(player.endsWith("x")) //false as Ronaldo as o in last index

//6. indexOf- finding the index of character
console.log(player.indexOf('o')) // returns the index of first occurence
console.log(name.indexOf('a')) //return  1 as rajan has a in two places index  1 and 3 
console.log(name.lastIndexOf('a')) // returns the index of last occurence of the character

//methods for slicing which is extracting the parts of the strings
//7. slice(start,end)- returns the characters from the starting index to end index not inclusive
console.log(player.slice(1,5))
console.log(player.slice(1,10))
console.log(player.slice(3))// starting from 3 to end inclusive
console.log(player.slice(-4)) //supports negative indexing as well 

//8.subString()- similar to the slice but if end index is smaller then start it swaps
//ronaldo
console.log(player.slice(3,0))
console.log(player.substring(3,0)) //negative indexing doesnot works
console.log(player.substring(-5,-1)) //emptty string
console.log(player.substr(-5,-1))

//9. replace() - form the new string  from the existing string  by replacing certain parts
let speak=" I am in love with JS"
console.log(speak)
let speakCorrect= speak.replace('JS','python')
console.log(speakCorrect) // I am in love with python
let wel='hi welcome to the grounds. the best cafe in sydney'
console.log(wel.replace('the ','a')) // replace first the with a
console.log(wel.replaceAll('the ','a')) // replace all the with a 

//10 . split()ting the strings -> converts string nto the array
console.log(speak) // i am in love with js
console.log(speak.split()) //[' i am in love with JS'] array
console.log(speak.split(" ")) 
\/*
[
  '',     'I',
  'am',   'in',
  'love', 'with',
  'JS'
]*/

//11. joining after the split
console.log(name)
let name1=name.split("")
console.log(name1) //[ 'r', 'a', 'j', 'a', 'n' ]
console.log(name1.join('-')) //r-a-j-a-n

//12. repeating the strings.repeat()
let laugh='Ha'
console.log(laugh.repeat(3)) //HaHaHa

//13. padding is important for formatting
let age="23"
console.log(age.padStart(3,"0")) 
console.log(age.padEnd(3,"0"))



