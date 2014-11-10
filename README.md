screen-size-getter
==================

Tie your JS to your actual breakpoints.

In each of your stylesheets add a qualifier to your body:after {content:"small/medium/large"}

Invoke this by calling currentWindowSize

If the functionality changes between small & medium just throw it into a if/else statment.

if (currentWindowSize === "small"){

  //Do stuff
  
  }
  
  else {
  
  //Do some other stuff
  
  }
