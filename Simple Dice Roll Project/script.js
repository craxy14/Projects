
const min = 1   //MINIMUM NUMBER TO ROLL
const max = 6   //MAXIMUM NUMBER TO ROLL

let num1 = 0       //PLAYERS NUMBER
let num2 = 0        //COMPUTERS NUMBER      

let myScore = 0
let aiScore = 0

let playerName = prompt("Enter Your Name:")
document.getElementById("rollDice").addEventListener("click" , function(){
    
    num1 = Math.floor((Math.random() * 6) + 1);
    num2 = Math.floor((Math.random() * 6) + 1); 
    
    if(num1 > num2){
        myScore += 1
    }
    
    else if(num1 < num2){
        aiScore += 1
    }

    else{
        console.log("Tie")
    }


    document.getElementById("playerNum").innerHTML = (playerName + "'s Number Is:")

    document.getElementById("num1").innerHTML = (num1)      //OUTPUTING THE GENERATED NUMBERS
    document.getElementById("num2").innerHTML = (num2)
    

    document.getElementById("score1").textContent = (playerName + "s Score Is: " + myScore)
    document.getElementById("score2").textContent = ("AI's Score Is: " + aiScore)
}) 

