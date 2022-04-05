
// const sampler = new Tone.Sampler({
// 	urls: {
// 		C4: "C.mp3",
// 		D4: "D.mp3",
//         E4: "E.mp3",
//         F4: "F.mp3",
//         G4: "G.mp3",
// 	},
// 	baseUrl: "./sounds"
// }).toDestination();

const player = new Tone.Player("C.mp3").toDestination();
Tone.loaded().then(() => {
	document.querySelectorAll(".cat")[0].addEventListener("click", function(event){
        player.start();
        console.log("clicked");
    })
});