function findMax(arr) {
    if (arr.length === 1) {
        return arr[0];
    }

    // Recursive case: find the maximum of the first element and the maximum of the rest of the array
    const maxOfRest = findMax(arr.slice(1));
    //const maxOfRest = findMax(arr, index + 1);
    return Math.max(arr[0], maxOfRest);
}

const testCases = [
    [1, 2, 3, 4, 5],
    [10, 20, 5, 30, 25],
    [-1, -2, -3, -4],
    [0, 0, 0],
    [5],
    []
];

testCases.forEach((caseArr, index) => {
    const result = caseArr.length > 0 ? findMax(caseArr) : "undefined (empty array)";
    console.log(`Maximum element in array ${index + 1} (${caseArr}) is: ${result}`);
});
