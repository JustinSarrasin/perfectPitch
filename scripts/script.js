const perfPitch = {};
perfPitch.audio = ["../project_3/audiosamples/C.mp3", "../project_3/audiosamples/CSharp.mp3", "../project_3/audiosamples/D.mp3", "../project_3/audiosamples/DSharp.mp3", "../project_3/audiosamples/E.mp3", "../project_3/audiosamples/F.mp3", "../project_3/audiosamples/FSharp.mp3", "../project_3/audiosamples/G.mp3", "../project_3/audiosamples/GSharp.mp3", "../project_3/audiosamples/A.mp3", "../project_3/audiosamples/ASharp.mp3", "../project_3/audiosamples/B.mp3", "../project_3/audiosamples/CTop.mp3"]


perfPitch.events = function () {
    $('.key').on('click', function (note) {
        // grab the note by ID
        // console.log("something is clicked")
        let playedNote = $(this).data('index');

        //if this note is played, play matching note 
        let triggeredNote = perfPitch.audio[Number(playedNote)];

        // console.log(triggeredNote);
        new Audio(triggeredNote).play();

        if (perfPitch.switchPractice) {
            //trigger a random number out of array
            console.log(perfPitch.randomTrigger);

            // perfPitch.eval.guess = getIndex;
            perfPitch.evaluate(playedNote)
        }
    });
}

perfPitch.switchPractice = false;


// click function
perfPitch.randomNote = function () {
    //on random button click
    $('.practice').on('click', function (chosen) {

        console.log("something is clicked");
        perfPitch.switchPractice = true;
        perfPitch.randomIndex = Math.floor(perfPitch.audio.length * Math.random())
        let randomTrigger = perfPitch.audio[perfPitch.randomIndex];
        //play random number
        new Audio(randomTrigger).play();
    });
}


perfPitch.evaluate = function (userIndex) {
    // console.log(randomTrigger);

    console.log(perfPitch.switchPractice);
    //    $('div').on('click', function () {
    //     console.log("this has been clicked after");
    // })

    if (perfPitch.switchPractice === true) {
        if (perfPitch.randomIndex === userIndex) {
            perfPitch.switchPractice = false;
            alert("Goooot it");
        }
        else {
            alert('try again');
        }

    }
}




// perfPitch.random = function(){
//     // let functionLock = false;

//     $('button').on('click', function (){

//         console.log("I have been clicked");

//         // $('div').on('click', function (noteGuess) {
//         //     console.log("note guessed");
//         // });


//         // if(false){
//         //     console.log('unclicked');
//         // } else {
//         //     console.log('clicked');
//         //     $('div').on('click', function (noteGuess){
//         //         console.log("note guessed");
//         //     }
//         // )}
//     });
// }

// perfPitch.chosen = function(){

// }

perfPitch.init = function () {
    perfPitch.events();
    perfPitch.randomNote();
    //    perfPitch.random();
}



$(function () {
    perfPitch.init();
    // perfPitch.events();
});    