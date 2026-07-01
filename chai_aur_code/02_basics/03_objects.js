//singleton

//creating object literal
const personalInfo={
    name:"rajan",
    age:18,
    height:5.8,
    city:"parramatta",
    favPlayer:["ronaldo",'kroos',"valverde"],
    "fullName":"rajan shrestha",
    greet: function()
    {
        console.log("hello rajan")
    }
}

//accessing the elements of the object
console.log(personalInfo.name) //way 1
console.log(personalInfo["name"])//way2
console.log(personalInfo["greet"])


console.log(personalInfo.fullName)

//interview add a symbol as a key
const mySym1=Symbol("123")
const personalInfo2={
    name:"rajan",
    age:18,
    [mySym1]:"mykey1",
    mySym:"mykey2",
    height:5.8,
    city:"parramatta",
    favPlayer:["ronaldo",'kroos',"valverde"],
    "fullName":"rajan shrestha"
}

/*
symbol as key
function inside
changing the value of properties
freeeze object

*/

//singleton object
const sportoUser=new Object()
sportoUser.name="rajan"
sportoUser.age=22


//why js is called prototype based language?
/* 
class greet:
    def welcome():
        print("hello rajan")
raj=greet()
raj.welcome() 
In python we create object from the class and then that object can access
all the properties and methods of the object.*/

// in js
//creating t
const greetPrototype={
    welcome:function(){
        console.log("hello rajan")
    }
}
const raj=Object.create(greetPrototype)
raj.welcome()

//In JavaScript, objects can reuse properties and methods from another object through a hidden prototype link.

//prototype is simply an another object that js checks when it cannot find a property o rmthod on the current object


const studentPrototyp={
    study:function(){
        console.log(`studying ${this.name}`)
    }
}

const student= Object.create(studentPrototyp)
student.name="rajan";
student.study()

//what is __proto__
const arr=[]
console.log(arr.__proto__)