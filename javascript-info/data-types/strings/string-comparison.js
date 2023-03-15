// COMPARING STRINGS
// because a > A and Österreich > Zealand in the utf-16 order of chars
// the correct way to to compare strings is localeComare()

console.log( 'Österreich'.localeCompare('Zealand') ); // -1

