//Spread to create new array that includes all elements of an existing array plus additional elements and log new array

const originalArray = [1, 2, 3, 4, 5];

const newArray = [...originalArray, 6, 7, 8];

console.log("New Array:", newArray);


//Use rest operator in a function to accept an arbitary number of arguments,sum them and result

function sum(...numbers) {
    const total = numbers.reduce((accumulator, current) => accumulator + current, 0);
    return total;
}

const result1 = sum(1, 2, 3);        
const result2 = sum(10, 20, 30, 40); 
const result3 = sum(5);              
const result4 = sum();                

console.log("Result 1:", result1);
console.log("Result 2:", result2);
console.log("Result 3:", result3);
console.log("Result 4:", result4);
