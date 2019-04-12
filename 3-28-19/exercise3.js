// // Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
// // You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// // The array will always contain letters in only one case.
// // Example:
// // ['a','b','c','d','f'] -> 'e'
// // ['O','Q','R','S'] -> 'P'
// function missingAlphabet(letters){
//     const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//     const array = letters;
//     var index = 0;
//     var i = 0;
// //try to locate the index of 1st letter in arraythat passes in in the alphabets array

//     while(alphabets[index] != array[0].toLowerCase()){
//         index++;
//     }
// //compare array array with alphabet array; until it does not equal to each other, then the we found the missing alphabet.
//     if(alphabets[index] == array[i]){
//         while(alphabets[index] == array[i]){
//             index++;
//             i++;
            
//         }
//         console.log(alphabets[index])
//     } else{
//         while(alphabets[index].toUpperCase() == array[i]){
//             index++;
//             i++;
//         }
//         console.log(alphabets[index].toUpperCase());
//     }
// }
// missingAlphabet(['a','b','c','d','f']);
// missingAlphabet(['O','P','R','S']);

// var billAmount = 100;

// function gratutity(){
//     return billAmount * 0.2;
//   }

// function totalWithGrat(amount){
//   return gratuity() + amount;
// }

// console.log("your total, including gratutity is: $" +  totalWithGrat(billAmount).toFixed(2));

// Calculating gratutity is a repetitive task, so let's create a couple of functions that do the work for us.

//     create a variable titled billAmount and store a random number (ie: 100)
//     create a function titled gratuity()
//         gratutity should:
//             multiply the value of billAmount by 20%
//             hint: use 0.2
//             return the value
//     create a function titled totalWithGrat()
//         totalWithGrat should:
//             take in the amount as an argument
//             call the gratutity function
//             add that to the original bill amount
//             return the total bill + gratuity
//     log the total (with gratuity) to the console
//         append new total to the following phrase:
//             "your total including gratuity is:"
//     Limitation: You can only invoke the totalWithGrat function when logging the result


//     Find a way to fix the decimal point to only 2 places, ie: 100.00

var billAmount = 100;
function gratuity(){
    return  billAmount*0.2;
}
function totalWithGrat(amount){
    return gratuity() + amount;
}

console.log("your total including gratuity is: "+totalWithGrat(billAmount).toFixed(2));