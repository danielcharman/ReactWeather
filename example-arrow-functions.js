let names = ['Dan', 'Chris', 'Dale'];
//
// names.forEach(function(name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });


// var returnMe = (name) => name + '!';
// console.log(returnMe('Dan'));


// var person = {
//   name: 'Dan',
//   greet: function() {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };
//
// person.greet();

//add anonymous
function add (a, b) {
  return a + b;
}

//add expression
let addOne = (a, b) => a + b;

//add statement
let addTwo = (a, b) =>  {
  return a + b;
};

console.log(add(1, 3));
console.log(addOne(9, 0));
console.log(addTwo(5, 5));
