/**
 * Intention:
 *      $('selector').blink();  // Reasonable defaults. {no max blinks, blinkDuration ~1 sec, no callback}
 *
 *      $('selector').blink({maxBlinks: 60, blinkDuration: 1000}, callbackWhenMaxBlinksReached); 
 */

// IMPORTANT: Not ready yet (at all)! Implementing it tonight.

MAX_BLINKS = 60; // Since every blink represents 1 second ~60 seconds.
BLINK_TIME = 1000; // (milliseconds)

function go() {
    var on = true;
    var blinkCount = 0;
    var intervalId = setInterval(function(){
        if(on) {
            $('div#title').fadeTo('slow', 0.01);
            on = false;
        } else {
            $('div#title').fadeTo('slow', 1);
            if(blinkCount++ == MAX_BLINKS) {
                clearInterval(intervalId);
                callback;
            }
            on = true;
        }
    }, BLINK_TIME/2);
}
