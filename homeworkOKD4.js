/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/
const area = function (l1, l2) {
    let rectangle = l1 * l2
    return rectangle
}
console.log(area(2, 4))

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
const crazySum = function (int1, int2) {
    if (int1 !== int2) {
        let sum = int1 + int2
        return sum
    } else {
        let multiply = int1 * int2
        return multiply
    }
}
console.log(crazySum(4, 4))
    
/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

const crazyDiff = function (number) {
    if (number < 19) {
        let diffFun = number - 19
       return diffFun
    } else {
        let diffFun = (number - 19) * 3
        return diffFun
    }
}
console.log(crazyDiff(20))
    
/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

const boundary = function (n) {
    if (n > 20 && n < 100 || n === 400) {
        return true
    } else {
        return false
    }
}
console.log(boundary(400))

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

const strivify = function (text) {
    if (typeof (text) === typeof ("String")) {
        let newTex = text.split() 
        striveString = "Strive"
        let stringToCompare = striveString.split()
        
           

        
       
    }
}
console.log(strivify("Strive Random Text"))
    
/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/
function reverseString(str) {
    return str.split("").reverse().join("")
}
console.log(reverseString("Googled it"))
/* WRITE YOUR CODE HERE */

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/