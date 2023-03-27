// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

// Input: variables provided
// Output: // Expected output: "L4ck4d41s1c4l"
// // Expected output: "G0bbl3dyg00k"
// // Expected output: "3cc3ntr1c"
// Describe declaration, 'it' message, expect


const secretCodeWord1 = "Lackadaisical"
const secretCodeWord2 = "Gobbledygook"
const secretCodeWord3 = "Eccentric"

describe("spyCode", () => {
    it("takes in a string and returns a string with a coded message", () => {
        expect(spyCode(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(spyCode(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(spyCode(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})
// // Test Suites: 1 failed, 1 total
// // Tests:       1 failed, 1 total
// // Snapshots:   0 total
// // Time:        0.157 s, estimated 1 s
// // b) Create the function that makes the test pass.

// // create function spyCode
const spyCode = (string) => {
    // we split the elements in the string and iterate over each character
    return string.split("").map((value, index, array) => {
        // create conditional that returns altered letters and numbers
        if (value === "a" || value === "A") {
          return (array[index] = "4")
        } else if (value === "e" || value === "E") {
            return (array[index] = "3")
        } else if (value === "i" || value === "I") {
            return (array[index] = "1")
        } else if (value === "o" || value === "O") {
            return (array[index] = "0")
        } else {
            return value
        }
        // rejoin the characters in the string
      }).join("")
  }


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.
// Input: variables provided
// Output: // Expected output: ["Cherry", "Blueberry", "Peach"]
// // Expected output: ["Mango", "Apricot", "Peach"]
// // Describe declaration, 'it' message, expect

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
const letterA = "a"
const letterE = "e"

describe("goodFruit", () => {
    it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter", () => {
        expect(goodFruit(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
        expect(goodFruit(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})
// // Test Suites: 1 failed, 1 total
// // Tests:       1 failed, 1 total
// // Snapshots:   0 total
// // Time:        0.157 s
// // b) Create the function that makes the test pass.

// create goodFruit function
const goodFruit = (array, letter) => {
    // we can return the array with the filtered values
    return array.filter((value) => {
        // we can account for capitalization with .toLowercase
      return value.toLowerCase().includes(letter)
    })
  }

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.
// Input: variables provided
// Output: // Expected hand1 output: true
// // Expected hand2 output: false
// // Expected hand3 output: false
// // Expected hand4 output: true
// // Describe declaration, 'it' message, expect

const hand1 = [5, 5, 5, 3, 3]
const hand2 = [5, 5, 3, 3, 4]
const hand3 = [5, 5, 5, 5, 4]
const hand4 = [7, 2, 7, 2, 7]

describe("theGambler", () => {
    it("takes in an array of 5 numbers and determines whether or not the array is a 'full house'", () => {
        expect(theGambler(hand1)).toEqual(true)
        expect(theGambler(hand2)).toEqual(false)
        expect(theGambler(hand3)).toEqual(false)
        expect(theGambler(hand4)).toEqual(true)
    })
})
// // Test Suites: 1 failed, 1 total
// // Tests:       1 failed, 1 total
// // Snapshots:   0 total
// // Time:        0.164 s, estimated 1 s

// // b) Create the function that makes the test pass.

// // create theGambler function
const theGambler = (array) => {
    // we can use .sort to line up duplicate numbers
    array.sort((a, b) => a - b)
    // if the numbers are duplicates, we can set the return conditions with the addition of two let variables
    let twoAndThree =
    // first three and last two make full house
      array[0] === array[1] && array[2] === array[4]
    let threeAndTwo =
    // first two and last three make full house
      array[0] === array[2] && array[3] === array[4]
    if (twoAndThree === true) {
        return true
    }else if(threeAndTwo === true) {
        return true
    }else {
        return false
    }  
  }
console.log(theGambler(hand3))
//   Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.156 s, estimated 1 s