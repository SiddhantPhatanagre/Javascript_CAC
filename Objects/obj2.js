const user = new Object(); //-------->This is the object constructor approach

const instaUser ={
    name: "siddahnt",
    ID : "abc34",
    info:{
        detailedInfo:{
            rName : "siddhu",
            age : 20,
            passion : "sports"

        }
    }
}

// In Above object we nested the two object in main object and can access the objects using following syntax
//console.log(instaUser.info.detailedInfo);


//To combine one or more objects

obj1 ={1:"a" , 2:"b"}
obj2 = {4:5 , 6:7}

const obj3 = Object.assign({},obj1,obj2)  

 //we can use above syntax to add or assing the obj1 and obj2 in {} empty object
//console.log(obj3);

//-------------------------------------------
//2nd way to concat two objects is with the help of spread operator
const obj4 = {...obj1 , ...obj2}

console.log(obj4);

//-------------------------------------------
//we can contruct the array of objects as constructed below 

let USers =[
    {
        name: "sp",
        age: 21
    },
    {
        name: "sp",
        age: 21
    }, {
        name: "sp",
        age: 21
    }, {
        name: "sp",
        age: 21
    }
]
console.log(USers[1]);

//---------------------------------------------
let Gamer = {
    name:'siddhant',
    age : 20,
    Gameplay :"moderate"
}
console.log(Object.keys(Gamer));  // It returns the array of keys of the given object
console.log(Object.values(Gamer)); // It returns the array of values of the given object

console.log(Gamer.hasOwnProperty('skills')); //it checks the given key in object is present or not