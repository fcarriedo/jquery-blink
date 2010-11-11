/**
 * Basic usage (Most common defaults. {no max blinks = blink indefinitely, blinkDuration ~1 sec, no callback}):
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

        var defaults = {
            maxBlinks    : 0,
            blinkPeriod  : 1000,
            onMaxBlinks  : function() {},
            onBlink      : function() {},
            speed        : 'slow'
        };

        if(options) {
            $.extend(defaults, options);
        }

        var blinkElem = this;

        var intervalId = setInterval(function(){
            if(on){
                blinkElem.fadeTo(defaults.speed, 0.01);
            } else {
                blinkElem.fadeTo(defaults.speed, 1, defaults.onBlink);
                if(defaults.maxBlinks && ++blinkCount >= defaults.maxBlinks) {
                    clearInterval(intervalId);
                    defaults.onMaxBlinks.call();                    
                }
            }
            on = !on;
        }, defaults.blinkPeriod/2);                

        return this; // Returning 'this' to maintain chainability.
    };             
})(jQuery);
