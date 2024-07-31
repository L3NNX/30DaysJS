function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n; // Handle cases where k is greater than the array length

    // Rotate the array
    const rotatedArray = arr.slice(n - k).concat(arr.slice(0, n - k));
    
    console.log("Rotated array:", rotatedArray);
    return rotatedArray; // Optional: return the rotated array
}

const arrayToRotate = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
rotateArray(arrayToRotate, k);
