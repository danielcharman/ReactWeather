// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Horsley', function(error, temp) {
//   if(error) {
//     console.log('error', error);
//   }else{
//     console.log('success', temp);
//   }
// });

function getTempPromise(location) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if(location != '') {
              resolve(79);
      }else{
              reject('City not found');
      }
    }, 1000);
  });
}

getTempPromise('').then(function(temp) {
  console.log('promise success', temp);
}, function(error) {
  console.log('promise error', error);
});
