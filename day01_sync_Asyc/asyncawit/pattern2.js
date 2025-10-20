function myWork(work) {
  return new Promise((resolve, reject) => {
    resolve(work.toUpperCase);
  });
}

function playGame(work) {
  return new Promise((resolve, reject) => {
    if (work === 'DONE') {
      resolve('Go Play Game');
    } else {
      reject(new Error("Don't"));
    }
  });
}

myWork('done').then(function (result) {
  playGame(result).then(function (val) {
    console.log(val);
  });
});

myWork.apply('done').then(playGame).then(console.log);

// myWork('done')
//   .then(function (value) {
//     console.log(value);
//   })
//   .catch(function (err) {
//     console.log(err);
//   }); // o
