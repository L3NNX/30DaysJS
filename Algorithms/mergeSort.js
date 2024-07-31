function mergeSortedArrays(arr1, arr2) {
    const mergedArray = [];
    let i = 0, j = 0;

    // Merge the two arrays
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    // If there are remaining elements in arr1
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    // If there are remaining elements in arr2
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    console.log("Merged array:", mergedArray);
    return mergedArray; // Optional: return the merged array
}

const sortedArray1 = [1, 3, 5, 7];
const sortedArray2 = [2, 4, 6, 8];
mergeSortedArrays(sortedArray1, sortedArray2);
