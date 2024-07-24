const myPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("This is your message after 2 seconds!");
    }, 2000);

    setTimeout(() => {
        reject("Error: Something went wrong!");
    }, 2500);
});

myPromise.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.error(error);
});


