//Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.
function randomPromise() {
    return new Promise((resolve, reject) => {
        // Generate a random number between 0 and 1
        const randomNumber = Math.random();
        
        if (randomNumber > 0.5) {
            resolve("Promise resolved successfully!");
        } else {
            reject("Promise rejected. Something went wrong.");
        }
    });
}

randomPromise()
    .then(result => {
        console.log(result); 
    })
    .catch(error => {
        console.error(error); 
    });
