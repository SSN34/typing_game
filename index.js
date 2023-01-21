const HEIGHT = window.innerHeight;
const WIDTH = window.innerWidth;

let wordBox = document.getElementById("type-area");
let score = document.getElementById("score");

let canvas = document.getElementById("game-canvas");
canvas.height = HEIGHT;
canvas.width = WIDTH;

let ctx = canvas.getContext('2d');

let typedWord = "";

window.addEventListener('keydown', (event) => {
    if(event.key == "Escape"){
        typedWord = "";
    }else{
        typedWord += event.key;
    }
});

let allWords = wordsList.split(',')

let wordsInGame = [];

let SCORE = 0;

let wordSpeed = 0.5;

function draw(){
    ctx.fillStyle = "#AD8E70";
    ctx.fillRect(0,0,WIDTH, HEIGHT);

    for(let i = wordsInGame.length - 1; i >= 0 ; i--){
        let currentWord = wordsInGame[i];

        currentWord.position.y += wordSpeed;    

        if(currentWord.word.indexOf(typedWord) == 0){
            currentWord.sliceIndex = typedWord.length == 0 ? 0 : typedWord.length;
        }

        currentWord.drawWord();

        if(currentWord.sliceIndex === currentWord.word.length){
            SCORE += currentWord.word.length + 10;
            typedWord = "";
            wordsInGame.splice(i, 1);
        }else if(currentWord.position.y > (HEIGHT - 80)){
            typedWord = "";
            SCORE -= currentWord.word.length;
            wordsInGame.splice(i, 1);
        }
    }

    wordBox.innerText = typedWord;
    score.innerText = SCORE;

    requestAnimationFrame(draw);
}

draw();

setInterval(() => wordsInGame.push(new Word(allWords[Math.floor(Math.random() * 3000)].toLowerCase())), 2000);