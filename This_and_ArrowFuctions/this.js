const user = {
    name: "siddhant",
    price: 1,

    welcomeMsg : function(){
       console.log( `${this.name} , Welcome to our website`); //this keywords reffers to the current context of the block 
        console.log(this); //this gives us the all values in current context
    }
}
user.welcomeMsg()

//-------------------------------this keyword in function

function any() {
    let username = "Siddhant"
    console.log(this.username)  
}
any()  //It means that this keyword cant be accessable in fun ction