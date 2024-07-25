console.log("Welcome to Tic Tac Toe");
let turn = "X";
let audioTurn = new Audio("assets/ting.mp3");
let music = new Audio("assets/music.mp3");
let gameOver = new Audio("assets/gameover.mp3");
let isgameOver = false;

const changeTurn = ()=>{
    return turn==='X' ? "0" : "X";
}
const checkWin = ()=>{
    let boxTexts = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2], 
        [3, 4, 5],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    wins.forEach(e=>{
        if((boxTexts[e[0]].innerText===boxTexts[e[1]].innerText) && (boxTexts[e[2]].innerText===boxTexts[e[1]].innerText) && (boxTexts[e[0]].innerText!=='')){
            document.getElementsByClassName('info')[0].innerText = `${boxTexts[e[2]].innerText} WON`;
            isgameOver=true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '200px';
            music.pause();
            gameOver.play();
        }
    })
}
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element=>{
    music.play();
    let boxText = element.querySelector(".boxtext");
    element.addEventListener('click',()=>{
        if(boxText.innerText===''){
            boxText.innerText=turn;
            audioTurn.play();
            turn = changeTurn();
            checkWin();
            if(!isgameOver){
                document.getElementsByClassName('info')[0].innerText = `Turn for ${turn}`;
            }
        }
    })
})

reset.addEventListener('click',()=>{
    Array.from(document.querySelectorAll('.boxtext')).forEach(e=>{
        e.innerText='';
        turn = "X";
        isgameOver=false;
        document.getElementsByClassName('info')[0].innerText = `Turn for ${turn}`;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0px';
        music.play();
    })
})

volume.addEventListener('click', (e) => {
    // Check if the current volume icon is the "volume" icon
    if (e.currentTarget.src.includes('assets/volume.svg')) {
        music.pause(); // Pause the music
        e.currentTarget.src = 'assets/mute.svg'; // Change the icon to "mute"
        console.log(true); // Log true indicating the music is muted
    } else {
        music.play(); // Play the music
        e.currentTarget.src = 'assets/volume.svg'; // Change the icon back to "volume"
        console.log(false); // Log false indicating the music is playing
    }
});
