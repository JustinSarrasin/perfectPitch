const perfPitch = {};

perfPitch.audio = ["audiosamples/C.mp3", "audiosamples/CSharp.mp3", "audiosamples/D.mp3", "audiosamples/DSharp.mp3", "audiosamples/E.mp3", "audiosamples/F.mp3", "audiosamples/FSharp.mp3", "audiosamples/G.mp3", "audiosamples/GSharp.mp3", "audiosamples/A.mp3", "audiosamples/ASharp.mp3", "audiosamples/B.mp3", "audiosamples/CTop.mp3"]


perfPitch.events = function () {
    $('.key').on('click', function (note) {
        // grab the note by ID
        let playedNote = $(this).data('index');
        //if this note is played, play matching note 
        let triggeredNote = perfPitch.audio[Number(playedNote)];

        new Audio(triggeredNote).play();

        if (perfPitch.switchPractice) {
            //trigger a random number out of array
            perfPitch.evaluate(playedNote)
        }
    });
}

perfPitch.switchPractice = false;

// click function
perfPitch.randomNote = function () {
    //on random button click
    $('.practice').on('click', function (chosen) {
        perfPitch.switchPractice = true;
        perfPitch.randomIndex = Math.floor(perfPitch.audio.length * Math.random())
        let randomTrigger = perfPitch.audio[perfPitch.randomIndex];
        //play random number
        new Audio(randomTrigger).play();
    });
}

$(".again").click(function () {
    location.reload();
});


perfPitch.evaluate = function (userIndex) {

    if (perfPitch.switchPractice === true) {
        if (perfPitch.randomIndex === userIndex) {
            let correctKey = $(".keyboard").find(`[data-index='${userIndex}']`)

            correctKey.addClass('correct');
             setTimeout(function () {
             correctKey.removeClass('correct');
           }, 2000);
        }
        else {
            let wrongKey = $(".keyboard").find(`[data-index='${perfPitch.randomIndex}']`)
            wrongKey.addClass('wrong');
            setTimeout(function () {
              wrongKey.removeClass('wrong');
           }, 2000);
        }
    }
}

perfPitch.init = function () {
    perfPitch.events();
    perfPitch.evaluate();
    perfPitch.randomNote();
}

$(function () {
    perfPitch.init();
});    