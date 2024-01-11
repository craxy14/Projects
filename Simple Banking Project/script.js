        // IMPORT ELEMENTS FROM HTML
let username = document.getElementById("name")
let balOutput = document.getElementById("cash")
let userInput = document.getElementById("amount")      
let deposit = document.getElementById("plus")
let withdraw = document.getElementById("minus")



let balance = 0
let inputName = prompt("Please Enter Your Name:")       //Gets user's Name.
username.textContent = (inputName + "'s Balance:")

deposit.addEventListener("click" , function(){
    balance = Number(balance) + Number(userInput.value);        //Adds money to users balance
    balOutput.textContent = "$" + balance
    userInput.value = ""
})

withdraw.addEventListener("click" , function(){
    if (Number(userInput.value > balance)){
        alert("Insufficient Funds.")                            
    }else{
        balance = Number(balance) - Number(userInput.value) 
        balOutput.textContent = "$" + balance
        userInput.value = ""
    }
})