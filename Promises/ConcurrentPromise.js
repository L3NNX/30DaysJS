const promise1 = new Promise((resolve) => setTimeout(() => resolve('First Promise Resolved'), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve('Second Promise Resolved'), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve('Third Promise Resolved'), 1500));

// Using Promise.all to wait for all promises to resolve
Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log('All promises resolved:', results);
    })
    .catch((error) => {
        console.error('One of the promises failed:', error);
    });



// Using Promise.race to get the first resolved promise
//When using Promise.race, only the result of the first promise that resolves (or rejects) is returned.
Promise.race([promise1, promise2, promise3])
  .then((result) => {
    console.log('First promise:', result);
  })
  .catch((error) => {
    console.error('One of the promises failed:', error);
  });
