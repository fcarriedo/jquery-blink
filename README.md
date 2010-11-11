# jquery.blink

I had to do this implementation for an unbelievable legitimate use of the evil blink at my company.

Just thought of sharing as somebody might have the same unveliebable legitimate need. =P.

**(Yes, I know there is one of this already!)**

# Dependencies

Of course it depends on jQuery ;).

# Usage

The following gives you regular blinking with some reasonable defaults:

 * No max blinks
 * blink durations ~1 second


    $('selector').blink();

For some more advanced uses you can use:

    $('selector').blink({maxBlinks: 60, blinkDuration: 1000}, callbackWhenMaxBlinksReached); 

You can specify the maximum number of blinks as well as the blink duration.

The callback will only be executed if maxBlinks was specified and reached.
