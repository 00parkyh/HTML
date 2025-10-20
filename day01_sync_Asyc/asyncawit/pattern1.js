function myWork(work) {
  return new Promise((resolve, reject) => {
    if (work === 'done') {
      resolve('maplestory~');
    } else {
      reject(new Error('you cant game!'));
    }
  });
}

myWork('done').then(
  function (value) {
    console.log(value);
  },
  function (err) {
    console.log(err);
  }
); //x

myWork('done')
  .then(function (value) {
    console.log(value);
  })
  .catch(function (err) {
    console.log(err);
  }); // o
