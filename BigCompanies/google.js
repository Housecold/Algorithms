function google(array, k) {
    for (i = 0; i < array.length; i++) {
        for (j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] == k) {
                return true;
            }
        }
    }
    return false;
}

//VERIFICATION
console.log(google([10, 15, 3, 7], 17)); //Return true
console.log(google([], 10)); //Return false
console.log(google([5], 5)); //Return false
console.log(google([-5, 2, -8, 6], -3)); //Return true
console.log(google([1.5, 2.5, 3.5], 4)); //Return true
console.log(google([4, 6, 4, 2], 8)); //Return true
console.log(google([1, 2, 3, 4], 10)); //Return false