let keyPressStartTime;
let keyPressTimer;
let _presslonger = false;
let now = Tone.now()

document.addEventListener('keydown', function (event) {
    if (event.repeat) { return; }
    if (event.key === '1') {

        piano.triggerAttack("D4");

      //  keyPressStartTime = new Date().getTime();
    }
});

document.addEventListener('keyup', function (event) {
    //if (event.repeat) { return; }

    if (event.key === '1') {

        piano.triggerRelease("D4");

        //let keyrelease = new Date().getTime();
        
        //if ((keyrelease - keyPressStartTime) >= 100) {
           

        //    piano.triggerRelease(now+0.5);
           
        //    console.log("longer");
        //} else if (((keyrelease - keyPressStartTime) <= 100) && ((keyrelease - keyPressStartTime) > 0)) {

            
        //    piano.triggerRelease(now);

        //    console.log("shorter");
        //}
       

        //console.log(_release);
        //keyPressTimer = 0; // Clear the timer
      


    }
});