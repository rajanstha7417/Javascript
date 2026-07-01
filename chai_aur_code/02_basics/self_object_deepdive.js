// objects is a reference type that has properties as key value pairs
//simply collection of key value pairs
//key -> strings or symbols
//value-> any data type

//object is a reference type what does that means?
const a={
    name:"rajan"
}
const b=a
b.name="pratik"
console.log(a.name) // this results in changes in name so prints pratik as both a and b points to referece of object 


//ways of creating object
//1.object literal {}
const user=
{
    name:"rajan",
    age:22
}
console.log(user)
/* prototype chaining in this
user
|
Object.prototype
|
null
*/

//way 2: new Obhect() using constructor
const user2=new Object()
user2.name="Raja"
user2.age=22
console.log(user2) //old way dont use this way


//way 3 using Object.create() prototype linking manually
const student={
    study:function()
    {
        console.log("student is studying")
    }
}
const rajan=Object.create(student)
rajan.study()
rajan.student=true
rajan.student

/*
rajan
  |
student
  |
Object.protoye
*/

//notes
 const raj=Object.create(null) 
 //creates an object without any prototype link


 //accessing the properties methods
 const userInfo={
    "full name":"rajan sherstha",
    email:"rajan@gmail.com",
    age:22,
    isLoggedIn:true
 }

 //way 1 using . notation
 console.log(userInfo.email)
 console.log(userInfo.age)

 //way2 bracket you cant access key as full name with . notation
 console.log(userInfo['full name'])

 /*
 property name is dynamic
 property name is not a valid identifier
 */
 

Object.hasOwn(userInfo,"name")


//static methods of object
console.log(Object.keys(userInfo)) //returns arrays of all they keys 
console.log(Object.values(userInfo)) //returns an array of all the values
console.log(Object.entries(userInfo)) //returns array of key value pairs inside an array
Object.freeze(userInfo) // makes the object immutable 
Object.seal(userInfo) // doesnot allow object to have new properties but existing properties can be modifiedd
Object.assign(userInfo,student) // allows assigning one object key value to another object
Object.getPrototypeOf(userInfo) // returns the prototype object of the given object


//properties is not just a key value pair it can has its own descriptor
Object.getOwnPropertyDescriptor(userInfo,"name")


//data property vs getter/setter
const name1={
    firstName:"rajan",
    lastName:"Shrestha",
     //getter method
    get fullName()
    {
        return `${this.firstName} ${this.lastName}`
    },
    //setter method
    set fullName(value){
        const chunks=value.split(" ")
        this.firstName=chunks[0]
        this.lastName=chunks[1]
    }
}
console.log(name1.fullName)


//this keyword in object
//this keyword refers to the object before .
const hyattHotel1={
    name:"rajan",
    greet(){
        console.log("Welcome to Hyatt Hotel Mr. ",this.name)
    }
}
console.log(hyattHotel1.greet())
const ronaldo=hyattHotel1
ronaldo.name="cristiano ronaldo"
console.log(ronaldo.greet()) // gives welcome ronlado as this refers to the object context


//object copy
//shallow copy vs deep copy
const person={
    name:"rajan"
}