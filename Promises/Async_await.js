//Write an async function that waits for a promise to resolve and then logs the resolved value.
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("This is the resolved value!");
        }, 2000); 
    });
}

async function logResolvedValue() {
    try {
        const result = await fetchData(); 
        console.log(result); 
    } catch (error) {
        console.error("Error:", error); 
    }
}

logResolvedValue();



//Write an async function that handles a rejected promise using try-catch and logs the error message.
function fetchData(shouldReject) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldReject) {
                reject("Error: Data could not be fetched!");
            } else {
                resolve("Fetched data successfully!");
            }
        }, 2000); 
    });
}

async function handleDataFetch(shouldReject) {
    try {
        const result = await fetchData(shouldReject); 
        console.log(result); 
    } catch (error) {
        console.error("Caught an error:", error); 
    }
}
handleDataFetch(true);

