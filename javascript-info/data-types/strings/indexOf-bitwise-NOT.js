// Chapter Boolean conversion
// https://javascript.info/type-conversions

// Chapter Boolean conversion
// https://javascript.info/ifelse
let str = "Widget";

// if match is at index zero, zero is convertet als bool false
if (~str.indexOf("Widget") == true) {
  console.log( 'Found it!' ); // works
}

// new and sometimes better -> .includes()