let btn = document.getElementById("roll")
let images=["images/1.png", "images/2.png", "images/3.png", "images/4.png", "images/5.png", "images/6.png"]
btn.addEventListener('click', function(){
    let dice1=document.getElementById("dice1")
    let dice2=document.getElementById("dice2")
    let random1 = Math.floor(Math.random()*6)
    let random2 = Math.floor(Math.random()*6)
    while(true){
        if(random1!=random2){
            break;
        }
        else{
            random2 = Math.floor(Math.random()*6)
        }
    }
    dice1.setAttribute("src", images[random1])
    dice2.setAttribute("src", images[random2])
    let winner = document.getElementById("winner")
    if(random1>random2){
        winner.innerText = "Winner is Player 1"
    }
    else if(random1<random2){
        winner.innerText = "Winner is Player 2"
    }
})