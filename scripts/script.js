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
        new Audio(randomTrigger).play();
        //play random number
    });
}

$(".again").click(function () {
    location.reload();
});


perfPitch.evaluate = function (userIndex) {
    // console.log(randomTrigger);

    console.log(perfPitch.switchPractice);
    //     console.log("this has been clicked after");

    if (perfPitch.switchPractice === true) {
        if (perfPitch.randomIndex === userIndex) {
            // alert("correct");
            console.log(userIndex)
            let correctKey = $(".keyboard").find(`[data-index='${userIndex}']`)

            console.log(correctKey)
            correctKey.addClass('correct');
        }
        else {
            // perfPitch.randomIndex.addClass('wrong');
            let wrongKey = $(".keyboard").find(`[data-index='${perfPitch.randomIndex}']`)
            wrongKey.addClass('wrong');
        }
    }
}

perfPitch.init = function () {
    perfPitch.events();
    perfPitch.randomNote();
    perfPitch.replay();
    perfPitch.setTimeout();
}

$(function () {
    perfPitch.init();
});    