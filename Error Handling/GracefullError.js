//Use the fetch API to request data from an invalid URL and handle the error using .catch() . Log an appropriate error message to the console.
function fetchData() {
    const invalidUrl = "https://invalid-url.example.com/data"; // Invalid URL

    fetch(invalidUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); 
        })
        .then(data => {
            console.log(data); 
        })
        .catch(error => {
            console.error("Error fetching data:", error.message); 
        });
}

fetchData();


//Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error

// Async function to fetch data
async function fetchData() {
    const invalidUrl = "https://invalid-url.example.com/data"; 

    try {
        const response = await fetch(invalidUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json(); 
        console.log(data); 
    } catch (error) {
        console.error("Error fetching data:", error.message); 
    }
}

fetchData();

