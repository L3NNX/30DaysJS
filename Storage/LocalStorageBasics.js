import { LocalStorage } from 'node-localstorage';
const localStorage = new LocalStorage('./Storage');


// Save a string value to localStorage
const stringValue = "Hello, World!";
localStorage.setItem("myString", stringValue);

const retrievedString = localStorage.getItem("myString");

console.log("Retrieved String:", retrievedString);


// CSaving and Retrieving an Object
const myObject = {
    name: "Alice",
    age: 30,
    city: "Wonderland"
};

// Save the object to localStorage by converting it to a JSON string
localStorage.setItem("myObject", JSON.stringify(myObject));

const retrievedObjectString = localStorage.getItem("myObject");

// Parse the JSON string back into an object
const retrievedObject = JSON.parse(retrievedObjectString);


console.log("Retrieved Object:", retrievedObject);








// Use localStorage.setItem(key, value) to store a string.
// Use localStorage.getItem(key) to retrieve the string.
