// Author: Mathias Rechtzigel

// Global Helpers 
currentWindowSize = "large"; //Default is large because getComputedStyle is kinda wonky in IE8

var whatIsTheCurrentSize = { 
    fn: {
        // Gets the current body:after content and updates currentWindowSize
        windowSize: function() {
            // IE8 Fallback
            if (document.documentElement.contains('ie8')) {
                currentWindowSize = "large";
            }
            else {
                currentWindowSize = window.getComputedStyle(document.querySelector('body'),':after').getPropertyValue('content');
            }
        },

        // fires windowSize on a resize event.
        windowResizeEvent: function() {
            window.onresize = function(event) {
                whatIsTheCurrentSize.fn.windowSize();
            };
        },

        attachEvents: function() {
            whatIsTheCurrentSize.fn.windowSize();
            whatIsTheCurrentSize.fn.windowResizeEvent();
        }
    },
    
    init: function() {
        whatIsTheCurrentSize.fn.attachEvents();
    }        
}

whatIsTheCurrentSize.init();