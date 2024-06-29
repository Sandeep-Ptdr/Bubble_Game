let timer = 60;
let score = 0;
randomNumber = 0;
function bubbleMaker() {
    clutter = ""
    for (let i = 1; i <= 100; i++) {
        let rn = Math.floor(Math.random() * 10)
        clutter = clutter + `<div class="bubble">${rn}</div>`


    }
    document.querySelector(".pbtm").innerHTML = clutter
}
function getHits(){
    randomNumber = Math.floor(Math.random()*10)
    document.querySelector("#hit").textContent = randomNumber
}


function runTimer(){
      let time = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timer").textContent = timer;
            
        }
        else{
            clearInterval(time)
            document.querySelector(".pbtm").innerHTML = `<h1>Game Over!</h1>`
            
        }
       
        

    }, 1000);

}

function addScore(){
    score += 10;
    document.querySelector("#score").textContent = score;

}


document.querySelector(".pbtm").addEventListener("click",function(dets){
     let clickedNumber = Number(dets.target.textContent)
     if (randomNumber === clickedNumber) {
        addScore()
        getHits()
        bubbleMaker()
        
     }
     

})



getHits()
bubbleMaker()
runTimer()