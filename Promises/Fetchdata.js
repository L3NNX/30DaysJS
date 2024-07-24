// Function to simulate fetching data from a server
function fetchDataFromServer(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data) {
                resolve(`Fetched data: ${data}`);
            } else {
                reject("Error: No data found!");
            }
        }, 1000); 
    });
}

// Chaining promises to simulate fetching data in sequence
fetchDataFromServer("User Info")
    .then((message) => {
        console.log(message);
        return fetchDataFromServer("Posts"); 
    })
    .then((message) => {
        console.log(message);
        return fetchDataFromServer("Comments"); 
    })
    .then((message) => {
        console.log(message); 
    })
    .catch((error) => {
        console.error(error); 
    });
