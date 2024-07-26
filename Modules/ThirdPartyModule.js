// Importing the chunk function from lodash
import _ from 'lodash';

const array = [1, 2, 3, 4, 5, 6];
const chunkedArray = _.chunk(array, 2);

console.log(chunkedArray); 


// Importing axios
import axios from 'axios';

// Function to make a GET request
async function fetchData() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log(response.data); 
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
