// Fetch data from a public API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Response data:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });


// Async function to fetch data from a public API
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        console.log('Posts:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchData();

