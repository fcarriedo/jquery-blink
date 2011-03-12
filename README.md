# jquery.blink

I had to do this implementation for an unbelievable legitimate use of the evil blink at my company.

Just thought of sharing as somebody might have the same unbelievable legitimate need. =P.

**(Yes, I know there is one of this already!)**

# Dependencies

Of course it depends on jQuery ;).

# Usage

*Basic:*

    $('selector').blink();

The previous gives you regular blinking with some reasonable defaults:

 * No max blinks
 * blink durations ~1 second

*Advanced:*

    $('selector').blink({maxBlinks: 60, blinkPeriod: 1000, speed: 'slow', onBlink: function(){}, onMaxBlinks: function(){}}); 

You can override any configuration parameters that you like or use any of the callbacks.

The `onMaxBlinks` callback only gets called if `maxBlinks` was specified.

