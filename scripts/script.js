const perfPitch = {};

perfPitch.audio = ["audiosamples/C.mp3", "audiosamples/CSharp.mp3", "audiosamples/D.mp3", "audiosamples/DSharp.mp3", "audiosamples/E.mp3", "audiosamples/F.mp3", "audiosamples/FSharp.mp3", "audiosamples/G.mp3", "audiosamples/GSharp.mp3", "audiosamples/A.mp3", "audiosamples/ASharp.mp3", "audiosamples/B.mp3", "audiosamples/CTop.mp3"]


perfPitch.events = function () {
    $('.key').on('click', function (note) {
        // grab the note by ID
        // console.log("something is clicked")
        let playedNote = $(this).data('index');
         // console.log(playedNote);
      //   let key = $.Event("keydown", { keyCode: 65 });
      //   console.log(key);
        //if this note is played, play matching note 
        let triggeredNote = perfPitch.audio[Number(playedNote)];

      //   console.log(triggeredNote);
        new Audio(triggeredNote).play();

        if (perfPitch.switchPractice) {
            //trigger a random number out of array
            // console.log(perfPitch.randomTrigger);

            // perfPitch.eval.guess = getIndex;
            perfPitch.evaluate(playedNote)
        }
    });
}



perfPitch.keyboard = function (){
   window.addEventListener('keydown', function (e) {
      let keyNote = $(this).data('index');
      // console.log(keyNote);

      let hitNote = perfPitch.audio[Number(keyNote)];
      console.log(hitNote);
      
      new Audio(hitNote).play();
     
      console.log(e);
   })
}

perfPitch.switchPractice = false;

// click function
perfPitch.randomNote = function () {
    //on random button click
    $('.practice').on('click', function (chosen) {
    
      //   console.log("something is clicked");
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

   //  console.log(perfPitch.switchPractice);
    //     console.log("this has been clicked after");

    if (perfPitch.switchPractice === true) {
        if (perfPitch.randomIndex === userIndex) {
            // alert("correct");
            // console.log(userIndex)
            let correctKey = $(".keyboard").find(`[data-index='${userIndex}']`)

            // console.log(correctKey)
            correctKey.addClass('correct');
             setTimeout(function () {
             correctKey.removeClass('correct');
              //....and whatever else you need to do
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
   // window.addEventListener();
    perfPitch.keyboard();
    perfPitch.randomNote();
   //  perfPitch.replay();
   //  perfPitch.setTimeout();
}

$(function () {
    perfPitch.init();
});    