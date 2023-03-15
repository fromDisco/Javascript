// Modifiying native prototypes

// it is possible to add or change native prototype-methods
String.prototype.show = function() {
  console.log(this);
};

"BOOM!".show(); // BOOM!


/* 
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

IMPORTANT:
Prototypes are global, so it’s easy to get a conflict. 
If two libraries add a method String.prototype.show, 
then one of them will be overwriting the method of the other.

So, generally, modifying a native prototype is considered a bad idea.

::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/


/* 
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

BUT THERE IS ONE CASE IN WHICH MODIFIYING NATIVE PROTOTYPES IS APPOVED

POLYFILLS: if a feature is not supported in all JS-engines it is possible
to make it available.

::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/


if (!String.prototype.repeat) { // if there's no such method
  // add it to the prototype

  String.prototype.repeat = function(n) {
    // repeat the string n times

    // actually, the code should be a little bit more complex than that
    // (the full algorithm is in the specification)
    // but even an imperfect polyfill is often considered good enough
    return new Array(n + 1).join(this);
  };
}

console.log( "La".repeat(3) ); // LaLaLa