/* 
::::::::::::::::::::::::::::::::::::::::::::::::::::::::

CLONING THE OBJECT INCLUDING ITS PROTOTYPE

This call makes a truly exact copy of obj, 
including all properties: enumerable and non-enumerable, 
data properties and setters/getters – 
everything, and with the right [[Prototype]]. 

::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/


let obj = {};
let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));


/* 

Don’t change [[Prototype]] on existing objects if speed matters
Technically, we can get/set [[Prototype]] at any time. 
But usually we only set it once at the object creation time 
and don’t modify it anymore: rabbit inherits from animal, 
and that is not going to change.

And JavaScript engines are highly optimized for this. 
Changing a prototype “on-the-fly” with Object.setPrototypeOf 
or obj.__proto__= is a very slow operation as it breaks 
internal optimizations for object property access operations. 

So avoid it unless you know what you’re doing, 
or JavaScript speed totally doesn’t matter for you.

*/

