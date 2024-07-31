function selectionSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Swap arr[i] and arr[minIndex]
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }

    console.log("Sorted array using Selection Sort:", arr);
}

const selectionSortArray = [64, 34, 25, 12, 22, 11, 90];
selectionSort(selectionSortArray);
