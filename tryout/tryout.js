function hash() {
  console.log( new Array(9).join(...arguments) ); // 1,2
}


hash(1, 2, 4);
// String.prototype.repeat = null;

