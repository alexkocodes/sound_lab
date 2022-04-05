const player1 = new Tone.Player("C.mp3").toDestination();
const player2 = new Tone.Player("D.mp3").toDestination();
const player3 = new Tone.Player("E.mp3").toDestination();
const player4 = new Tone.Player("F.mp3").toDestination();
const player5 = new Tone.Player("G.mp3").toDestination();

let players = [player1, player2, player3, player4, player5];
Tone.loaded().then(() => {
    for (let i=1; i<=5; i++){
        document.querySelectorAll(".cat")[i-1].addEventListener("click", function(event){
            players[i].start();
        })
    }
});