function sumArray(arr) {
    // Base case: if the array is empty, return 0
    if (arr.length === 0) {
        return 0;
    }
    // Recursive case: sum the first element and the sum of the rest of the array
    return arr[0] + sumArray(arr.slice(1));
}

// Test cases
const testCases = [
    [1, 2, 3, 4, 5],      
    [10, 20, 30],         
    [-1, -2, -3, -4],     
    [0, 0, 0],           
    [5],                  
    []                    
];


testCases.forEach((caseArr, index) => {
    const result = sumArray(caseArr);
    console.log(`Sum of elements in array [${caseArr}] is: ${result}`);
});
