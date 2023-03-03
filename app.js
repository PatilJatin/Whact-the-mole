const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
let timeLeft = document.getElementById('timeLeft');
let score = document.getElementById('score');

let result = 0;
let hitPositionID = null;
let speed = null ;
let currTime = 60;

function randomSquare() {
    squares.forEach(function(square){
        square.classList.remove('mole');
        square.addEventListener('mousedown',function(){
            if(hitPositionID == square.id){
                result++;
                score.textContent = result;
                hitPositionID = null; 
                randomPosition.classList.remove('mole');  
                // let promise = new Promise(function(resolve , reject){
                    square.classList.add('gotcha');
                // })
            //    promise.then(
                    setTimeout(function (){
                        square.classList.remove('gotcha');
                    },400) 
            //    ) 
            }
        } )
    });

    let randomPosition = squares[Math.floor(Math.random() * squares.length)];
    randomPosition.classList.add('mole');
     hitPositionID =  randomPosition.id;
     
}

function moveMole() {
    speed = setInterval(randomSquare,4000);
}

function countDown() {
    currTime--;
    timeLeft.textContent = currTime;
    if(currTime === 0){
        clearInterval(countTimeID); 
        clearInterval(speed);
    }
}
let countTimeID = setInterval(countDown, 1000);
moveMole();