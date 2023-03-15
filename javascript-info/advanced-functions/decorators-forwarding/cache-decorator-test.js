function log(fn) {
  return function () {
    console.log('Logged at: ' + new Date().toLocaleString());
    console.log(this);
    return fn();
  };
}


const admin = {
  name: 'Michel',
  age: 43,
  job: 'Dev',

  getBio() {
    return `${this.name} is a ${this.age} years old ${this.job}`;
  },
};


// to pass "this" to getBio() it is possible to 
// use .bind() or pass "this" from log(fn)() to fn(this)
// but mention that argument "this" (getBio(this)) does not work
// use another word like getBio(that)
// admin.getBio = log(admin.getBio.bind(admin));
// let resultBind = admin.getBio(); // returns
// console.log(resultBind);

// decorates the getBio method
let decoratedGetBio = log(admin.getBio.bind(admin));
let output = decoratedGetBio(); // TypeError: Cannot read property 'name' of undefined at GETBIO
console.log(output);