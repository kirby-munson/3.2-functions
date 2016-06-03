

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(number1, number2){
    "use strict";

if(number1 > number2){
  return number1;
} else {
  return number2;
}
}

  console.assert(max(1,3)==3);


// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(number1, number2, number3){
    "use strict";

    if(number1 > number2 > number3){
      return number1;
    }
    else if(number2 > number3 > number1){
      return number2;
    } else {
      return number3;
    }
}

console.assert(maxOfThree(2,3,4)==4);


// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    "use strict";

    if (char == "a" || char == "e" || char == "i" || char == "o"  || char == "u"){
      return true;
    }else{
      return false;
    }
}

console.assert(isVowel("a")==true);

// 'aeiuo'.indexOf(char); ! === -1 means that there is a vowel // another way to do this//


// ---------------------
// Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------


function rovarspraket(phrase){
    "use strict";

    var translation;

 for (var i=0; i<phrase.lenth; i++){
   var char = phrase[i];
   if(isVowel(char || === '')){
     translation += char;
   }else {
     translation += char + 'o' + char;
   }
 }

    return translation;
  }


 console.assert(rovarspraket('this is fun')=='tothohisos isos fofunon')

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

// var myArray = [];
// var myNumbers = myArray;
// var num = 0;
// var num2 = 1;
//
// function sum(myNumbers){
//     "use strict";
//
//   for (var i = 0; i < myNumbers.length; i++) {
//       num = num + myNumbers[i];
//     }
//     console.log(sum(1,2,3,4));
//   }
//
//
// function multiply(myNumbers){
//     "use strict";
//
//       for (var i = 0; i < myNumbers.length; i++) {
//           num2 = num2 * myNumbers[i];
//         }
//         console.log(multiply(1,2,3,4));
//       }


function sum(numbersToAdd){
  var total = 0;

  for(var i=0; i<numbersToAdd.length; i++){
    total += numbersToAdd[i];
  }
  return total;
}

console.assert(sum(1,2,3,4)==10)


function multiply(numbersToMulitply){
  var product = numbersToMulitply[0];

  for(var i=1; i<numbersToMulitply.length; i++){
    product = product * numbersToMulitply[i];
  }
  return product;
}

console.assert(multiply(1,2,3,4)==24)


// // ---------------------
// // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// // ---------------------



function reverse(str) {
    "use strict";
    return str.split('').reverse().join('');
}
console.assert(reverse('kirby')== 'ybrik');


// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
  var longestLength = 0;

  for (var i=0; i<words.length; i++){
    var word = words[i];

    if (word.length > longestLength){
      longestLength = word.length;
    }
  }

}

console.assert(findLongestWord('it', 'this', 'a')==4);

// //
//
// // ---------------------
// // Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// // ---------------------
//

function filterLongWords(words, size){
    "use strict";
    var newWordList = [];

    for (var i=0; i<words.length; i++){
      var word = words[i];
      if(word.length < size){
        newWordList.push(word);
      }
    }
    return newWordList;
}


console.log(filterLongWords(['it', 'the', 'long'], 4);

// // ---------------------
// // Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// // ---------------------
//
function charFreq(string){
  var frequency = {};


for (var i=0; i<string.length; i++){
  var char = string[i];
  if(frequency.hasOwnProperty(char)){
    frequency[char] += 1;
  }else{
    frequency[char] = 1;
  }
}

  return frequency;

}

console.log(charFreq("abbabcbdbabdbdbabababcbcbab"));
