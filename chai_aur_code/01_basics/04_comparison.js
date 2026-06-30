// normal comparision
// console.log(2>3);
// console.log(3<3);
// console.log(4>=2);
// console.log(4<=2)
// console.log(4==2)
// console.log(4!=2)


// abnormal behabiour
console.log("2">1)
console.log("2"==2)


console.log(null>0)
console.log(null==0) //
console.log(null>=0)

// reason is comparison convert number to null, treating as 0


console.log(undefined>0)
console.log(undefined==0)
console.log(undefined>=0)


// important
console.log(undefined == null)

// console.log("2"==2) conversion happens 

// when compiler sees boolean and strings it converts boolean into number and then  string is converted into boolean
console.log("2">true ) // converts true to 1 and "2" to 2 and returns true
console.log('2'==true ) // 2 doesnot equal to 1
console.log(""==false) //true empty text is o and false is also 0


// more demo
console.log(null==null)
console.log(undefined==undefined)
console.log(NaN==NaN)