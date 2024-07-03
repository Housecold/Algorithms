function insertionSort(array) {
    for (i = 0; i < array.length - 1; i++) {
        for (j = i + 1; j < array.length; j++) {
                if (array[i] > array[j]) {
                    let current = array[j];
                    array[j] = array[i];
                    array[i] = current;
                }
        }
    }
    return array;
}

//VERIFICATION
console.log(insertionSort([100, 95, 10, -10, 32, -55, 44, 10, 33, -564])); //Return an sorted array
console.log(insertionSort([])); //Return an empty array
console.log(insertionSort([1])); //Return an array with just one element
console.log(insertionSort([1, 2, 3, 4, 5])); //Return an sorted array from an already sorted array
console.log(insertionSort([5, 4, 3, 2, 1])); //Return an sorted array from an array sorted in a reverse manner
