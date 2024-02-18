// //1. Sum of all digits of a number. For example, 123 -> 1+2+3=6

// let number = 123;
// let numString = number.toString();
// let sum = 0;

// // Loop through each digit in the string
// for (let i = 0; i < numString.length; i++) {
//     // Convert each digit back to a number and add it to the sum
//     sum += parseInt(numString[i]);
// }

// console.log(`Sum of digits of ${number} is ${sum}`);


// //2. Sum of the range of 2 numbers. For example, num1=2, num2=5 -> 2+3+4+5=14

// let num1 = 2;
// let num2 = 5;
// let sum = 0;

// // Loop through the range from num1 to num2 (inclusive)
// for (let i = num1; i <= num2; i++) {
//     // Add each number in the range to the sum
//     sum += i;
// }

// console.log(`Sum of the range from ${num1} to ${num2} is ${sum}`);


// //3. Calculate the average of numbers given in an array.



// let numbers = [3, 6, 9, 12, 15];
// let sum = 0;

// // Loop through each number in the array and add it to the sum
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }

// // Calculate the average by dividing the sum by the number of elements
// let average = sum / numbers.length;

// console.log(`The average of the numbers is: ${average}`);


// 4.// Compare strings by count of characters. For example, car and bat are equal. car and care are not

// let numbers = [3, 6, 9, 12, 15];

// // Use the reduce method to sum up all the numbers in the array
// let sum = numbers.reduce((acc, num) => acc + num, 0);

// // Calculate the average by dividing the sum by the number of elements
// let average = sum / numbers.length;

// console.log(`The average of the numbers is: ${average}`);

// 5.// Swap the string's first and last character. For example, name -> eamn

// let str1 = "car";
// let str2 = "bat";

// // Check if the lengths of the strings are equal
// if (str1.length === str2.length) {
//     console.log(`${str1} and ${str2} are equal.`);
// } else {
//     console.log(`${str1} and ${str2} are not equal.`);
// }


// let str = "name";

// // Check if the string has at least two characters
// if (str.length >= 2) {
//     // Swap the first and last characters
//     let swappedStr = str.charAt(str.length - 1) + str.substring(1, str.length - 1) + str.charAt(0);
    
//     console.log(`Original string: ${str}`);
//     console.log(`String with swapped first and last characters: ${swappedStr}`);
// } else {
//     console.log("String should have at least two characters for swapping.");
// }
