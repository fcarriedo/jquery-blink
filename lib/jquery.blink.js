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
                  
        var settings = {
            maxBlinks    : null,
            blinkPeriod  : 1000,
            onMaxBlinks  : function() {},
            onBlink      : function() {},
            speed        : null
        };

        if(options) {
            $.extend(settings, options);
        }                

        var blinkElem = this;
        var on = true;
        var blinkCount = 0;          
        settings.speed = settings.speed ? settings.speed : settings.blinkPeriod/2;

        toggleFade(); // Toggle first fade, then leave it to the interval.

        var intervalId = setInterval(toggleFade, settings.blinkPeriod/2);                

        function toggleFade() {
            if(on){
                blinkElem.fadeTo(settings.speed, 0.01);
            } else {
                var maxBlinksReached = (settings.maxBlinks && (++blinkCount) >= settings.maxBlinks);
                blinkElem.fadeTo(settings.speed, 1, function() {
                    settings.onBlink.call();
                    if(maxBlinksReached) settings.onMaxBlinks.call();
                });
                if(maxBlinksReached) clearInterval(intervalId);
            }
            on = !on;            
        }

        return this; // Returning 'this' to maintain chainability.
    };             
})(jQuery);
