function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            console.log(`Target value ${target} found at index: ${i}`);
            return i; // Return the index of the target value
        }
    }
    console.log(`Target value ${target} not found in the array.`);
    return -1; // Return -1 if the target value is not found
}

const linearSearchArray = [64, 34, 25, 12, 22, 11, 90];
const targetValueLinear = 22;
linearSearch(linearSearchArray, targetValueLinear);
