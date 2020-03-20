/* eslint-disable */

let file = 'blah.txt';
let helpers = {
  test: () => { console.log('test something'); },
  parse: () => { console.log('parse something'); }
}

function Person (name) {
  this.name = name;
  this.sayName = function () {
    console.log("my naxme is ", this.name);
  }
}

module.exports = {
  file,
  helpers,
  Person
}
