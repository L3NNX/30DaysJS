function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            console.log(`Target value ${target} found at index: ${mid}`);
            return mid; // Return the index of the target value
        } else if (arr[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }

    console.log(`Target value ${target} not found in the array.`);
    return -1; // Return -1 if the target value is not found
}

const binarySearchArray = [11, 12, 22, 25, 34, 64, 90]; // Must be sorted for binary search
const targetValueBinary = 25;
binarySearch(binarySearchArray, targetValueBinary);
