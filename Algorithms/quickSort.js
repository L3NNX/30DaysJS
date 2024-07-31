function quicksort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1]; // Choose the last element as pivot
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    const sortedArray = [...quicksort(left), pivot, ...quicksort(right)];
    console.log("Sorted array using Quicksort:", sortedArray);
    return sortedArray;
}

const quicksortArray = [64, 34, 25, 12, 22, 11, 90];
quicksort(quicksortArray);
