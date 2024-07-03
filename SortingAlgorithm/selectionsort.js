function selectionSort(array) {
    for (i = 0; i < array.length - 1; i++) {
        let smallest = i;

        for (j = i + 1; j < array.length; j++) {
            if (array[j] < array[smallest]) {
                smallest = j;
            }
        }
        let current = array[smallest];
        array[smallest] = array[i];
        array[i] = current;
    }
    return array;
}

//VERIFICATION
console.log(selectionSort([100, 95, 10, -10, 32, -55, 44, 10, 33, -564])); //Return an sorted array
console.log(selectionSort([])); //Return an empty array
console.log(selectionSort([1])); //Return an array with just one element
console.log(selectionSort([1, 2, 3, 4, 5])); //Return an sorted array from an already sorted array
console.log(selectionSort([5, 4, 3, 2, 1])); //Return an sorted array from an array sorted in a reverse manner