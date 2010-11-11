/**
 * Basic usage (Most common settings. {no max blinks = blink indefinitely, blinkDuration ~1 sec, no callback}):
 *
 *      $('selector').blink();
 *
 * Advanced usage:
 * 
 *      $('selector').blink({maxBlinks: 60, blinkPeriod: 1000, speed: 'slow', onMaxBlinks: function(){}, onBlink: function(){}}); 
 */

(function( $ ) {
    $.fn.blink = function( options ) {
        var on = true;
        var blinkCount = 0;                    

        var settings = {
            maxBlinks    : 0,
            blinkPeriod  : 1000,
            onMaxBlinks  : function() {},
            onBlink      : function() {},
            speed        : 'slow'
        };

        if(options) {
            $.extend(settings, options);
        }

        var blinkElem = this;

        var intervalId = setInterval(function(){
            if(on){
                blinkElem.fadeTo(settings.speed, 0.01);
            } else {
                blinkElem.fadeTo(settings.speed, 1, settings.onBlink);
                if(settings.maxBlinks && ++blinkCount >= settings.maxBlinks) {
                    clearInterval(intervalId);
                    settings.onMaxBlinks.call();                    
                }
            }
            on = !on;
        }, settings.blinkPeriod/2);                

        return this; // Returning 'this' to maintain chainability.
    };             
})(jQuery);
