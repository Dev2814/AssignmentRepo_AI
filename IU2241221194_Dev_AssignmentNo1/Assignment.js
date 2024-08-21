// 1: Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
function isAnagram(str1, str2) {
    str1 = str1.toLowerCase().split('').sort().join('');
    str2 = str2.toLowerCase().split('').sort().join('');
    return str1 === str2;
}

// 2: Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
// and returns a list of objects where each object is unique category-wise and has total price spent as its value.
function calculateTotalSpentByCategory(transactions) {
    const categoryTotals = {};
    transactions.forEach(({ category, price }) => {
        categoryTotals[category] = (categoryTotals[category] || 0) + price;
    });
    return Object.keys(categoryTotals).map(category => ({
        category,
        totalSpent: categoryTotals[category]
    }));
}

// 3: Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
function findLargestElement(numbers) {
    return Math.max(...numbers);
}

// 4: Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

// 5: Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
function calculateTime(n) {
    const startTime = performance.now();
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    const endTime = performance.now();
    return (endTime - startTime) / 1000;
}

// 6: Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
function countVowels(str) {
    const vowels = 'aeiou';
    let count = 0;
    for (const char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// 7: Write a function `sumArray` that takes an array of numbers as input and returns the sum of all the numbers.
function sumArray(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

// 8: Implement a function `filterEvenNumbers` that takes an array of numbers and returns a new array containing only the even numbers.
function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}

// 9: Write a function `findSmallestElement` that takes an array of numbers and returns the smallest element.
function findSmallestElement(numbers) {
    return Math.min(...numbers);
}

// 10: Create a function `reverseString` that takes a string and returns the string reversed.
function reverseString(str) {
    return str.split('').reverse().join('');
}

// 11: Write a function `fibonacci` that takes a number `n` and returns the `n`th number in the Fibonacci sequence.
function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// 12: Implement a function `removeDuplicates` that takes an array and returns a new array with duplicate values removed.
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// 13: Write a function `countOccurrences` that takes a string and a character and returns the number of times the character appears in the string.
function countOccurrences(str, char) {
    let count = 0;
    for (const ch of str) {
        if (ch === char) {
            count++;
        }
    }
    return count;
}

// 14: Create a function `findCommonElements` that takes two arrays and returns a new array containing the elements that are present in both arrays.
function findCommonElements(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
}

// 15: Implement a function `sortStrings` that takes an array of strings and returns the array sorted in alphabetical order.
function sortStrings(arr) {
    return arr.sort();
}
