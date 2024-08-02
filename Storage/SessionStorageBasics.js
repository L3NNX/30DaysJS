
// Write a script to save a string value to sessionStorage and retrieve it. Log the retrieved value.

const stringValue = "Hello, World!";

sessionStorage.setItem("myString", stringValue);

const retrievedString = sessionStorage.getItem("myString");

console.log("Retrieved String:", retrievedString);


// Write a script to save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object, then log it.

const myObject = {
    name: "Alice",
    age: 30,
    city: "Wonderland"
};

sessionStorage.setItem("myObject", JSON.stringify(myObject));

const retrievedObjectString = sessionStorage.getItem("myObject");

const retrievedObject = JSON.parse(retrievedObjectString);

console.log("Retrieved Object:", retrievedObject);
