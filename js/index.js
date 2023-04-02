var spacecraft = document.getElementById('spacecraft');
var fire = document.getElementById('fire');
var midbox = document.getElementById('mid-box');
var score = 0;
var hiscore = localStorage.getItem('hiscore') || 0;
let gameRunning = true;

document.getElementById('hiscore').innerText = hiscore;

function restart() {
    fire.classList.remove('slide');
    setTimeout(() => {
        fire.classList.add('slide');
    }, 100);
    midbox.classList.remove('stop');
    gameRunning = true;
}

function setHiScore(sc) {
    hiscore = sc;
    localStorage.setItem('hiscore', sc);
    document.getElementById('hiscore').innerText = sc;
}

let isAlive = setInterval(() => {
    if (gameRunning) {
        score = score + 1;
        let craftTop = parseInt(window.getComputedStyle(spacecraft).getPropertyValue("bottom"));
        let fireLeft = parseInt(window.getComputedStyle(fire).getPropertyValue("left"));
        if ((fireLeft > -20 && fireLeft < 30) && (craftTop < 50)) {
            midbox.classList.add('stop');
            fire.style.animationDuration = '3s'
            if (score > hiscore) {
                setHiScore(score)
            }
            score = 0;
            gameRunning = false;
        } else {
            document.getElementById('cscore').innerText = score;
            if (score == 1000) {
                fire.style.animationDuration = '2.5s'
            }
            if (score == 2000) {
                fire.style.animationDuration = '2s'
            }
            if (score == 3000) {
                fire.style.animationDuration = '1.5s'
            }
            if (score == 4000) {
                fire.style.animationDuration = '1s'
            }
        } 
    }

}, 10);

// var spacecraft = document.getElementById('spacecraft');
// var fire = document.getElementById('fire');
// var midbox = document.getElementById('mid-box');
// var score = 0;
// var hiscore = localStorage.getItem('hiscore') || 0;

// document.getElementById('hiscore').innerText=hiscore;

// function restart(){
//     fire.classList.remove('slide');
//     setTimeout(() => {
//         fire.classList.add('slide');
//     }, 100);
//     midbox.classList.remove('stop');
// }

// function setHiScore(sc){
//     hiscore=sc;
//     localStorage.setItem('hiscore', sc);
//     document.getElementById('hiscore').innerText=sc;
// }

// let isAlive = setInterval(() => {
//     score = score + 1;
//     let craftTop = parseInt(window.getComputedStyle(spacecraft).getPropertyValue("bottom"));
//     let fireLeft = parseInt(window.getComputedStyle(fire).getPropertyValue("left"));
//     if((fireLeft > 0 && fireLeft < 40) && (craftTop < 50)){
//         midbox.classList.add('stop');
//         if(score > hiscore){
//             setHiScore(score)
//         }
//         score = 0;
//     } else{
//         document.getElementById('cscore').innerText=score;
//     }
// }, 10);

// document.onkeydown = function(e) {
//         spacecraft.classList.add('jump')
//         setTimeout(() => {
//                 spacecraft.classList.remove('jump')  
//         },600);
// };

document.onkeydown = function (e) {
    spacecraft.classList.add('jump')
    setTimeout(() => {
        spacecraft.classList.remove('jump')
    }, 600);
};