/**
 * Returns the first character of a string passed in.
 * @param {string} str - an input string
 * @returns {string} - first char of str
 * 
 * example: firstChar("banana") returns "b"
 * example: firstChar("pinapple") returns "p"
 * example: firstChar("") returns ""
 */
function firstChar(str) {
  //  return str[0] || str
   return str = str.slice(0, 1)
  };
  
  
  /**
   * Returns the length of a string
   * @param {string} str - an input string
   * @returns {number} - length of str
   * 
   * example: stringLength("what") returns 4
   * example: stringLength("sixteen") returns 7
   */
  function stringLength(str) {
  return str = str.length
  };
  
  
  /**
   * Returns the last character of any string
   * @param {string} - an input string
   * @returns {string} - last letter of the input string
   * 
   * example: lastLetter("zappa") returns "a"
   * example: lastLetter("sit on a potato pan otis") returns "s"
   * example: lastLetter("") returns ""
   */
  
  function lastLetter(str) {
  // return str.slice(-1)
  return str[str.length-1] || str
  };
  
  /**
   * Takes a string and returns a copy of the string with the last
   * letter capitalized.
   * @param {string} str - an input string
   * @returns {string} - the input string with the last letter capitalized
   * 
   * example: capitalizeLastLetter("jimmy") returns "jimmY"
   * example: capitalizeLastLetter("what is the meaning of life") returns "what is the meaning of lifE"
   */
  function capitalizeLastLetter(str) {
  return str.slice(0, str.length-1) + str.slice(-1).toUpperCase()
  };
  
  
  /**
   * Create a drEvil function that takes in a number
   * and returns "${number} dollars"
   * if the number is greater than 1 million, add (pinky) at the end
   * 
   * @param {number} num
   * @returns {string}
   * example: drEvil(10) returns "10 dollars"
   * example: drEvil(100000000) returns "100000000 dollars (pinky)"
   */
  function drEvil(num) {
  if(num >= 1000000){
    return `${num} dollars (pinky)`
  }else{
    return `${num} dollars`
  }
  };
  
  /**
   * verbing() should take a string. 
   * If its length is >= 3, it should add 'ing' to its end, unless it already ends in 'ing',
   * in which case it should add 'ly' instead. 
   * If the string length is less than 3, it should leave it unchanged. 
   * @param {string} str
   * @returns {string}
   * verbing('box') returns 'boxing'
   * verbing('swimming') returns  'swimmingly'
   * verbing('go') returns  'go'
   */
  function verbing(str) {
  if(str[str.length-1] === 'g'){
    return `${str}ly`
  }else if(str.length >= 3){
    return `${str}ing`
  }else{
    str < 3
    return str
  }
  };
  
  
  /**
   * Takes a single sentence and returns a copy of the string without the
   * last word.
   * @param {string} str - an input string
   * @returns {string} - the return value missing the last word
   * 
   * example: removeLastWord("Hello!") returns ""
   * example: removeLastWord("I eat cake") returns "I eat"
   */
  function removeLastWord(str) {
  let words = str.split(" ")
  words.pop()
  let string = words.join(" ")

  
    return str = str.substring(0, str.lastIndexOf(' '))
   //return str.split(' ', str.length-1) 
  };
  
  
  /**
   * Takes a string and returns a new string that has only the even
   * indexed characters.
   * Do NOT split the string into an array.
   * @param {string} str - an input string
   * @returns {string} - the return value containing even indexed characters
   * ////
   * example: everyOtherLetter("Corey") returns "Cry"
   * example: everyOtherLetter("Skull candy") returns "Sulcny"
   */
  function everyOtherLetter(str) {
    let newString = ''
    for(i = 0; i <= str.length; i++){
      if(i % 2 === 0){
        newString +=str[i]
      }
    }
    return newString
  }
  
  
  /**
   * Takes in a string and returns a new string that has all the vowels removed.
   * @param {string} str - an input string
   * @returns {string} - return value string with all vowels removed
   * 
   * example: disemvowel("aeiou") returns ""
   * example: disemvowel("Hello world!") returns "Hll wrld!"
   */
  function disemvowel(str) {
    
      var vowels = ['a', 'e', 'i', 'o', 'u'];
      
      return str.split('').filter(function(el) {
        return vowels.indexOf(el.toLowerCase()) == -1;
      }).join('');
  }
  
  
  /**
   * Takes a string sentence and returns a new sentence.
   * Any word that has a length of 5 or more characters should be disemvoweled.
   * @param {string} str - an input string
   * @returns {string} - return value string
   * 
   * example: disemvowelLongWords("hi i am your friend") returns "hi i am your frnd"
   * example: disemvowelLongWords("amber is the color of your energy") returns "mbr is the clr of your nrgy"
   */
   function disemvowelLongWords(str){
     newArr = []
    let arr = str.split(' ')
    for(i = 0; i < arr.length; i++) {
      if(arr[i].length < 5){
        newArr.push(arr[i])
      }
      else {
        newArr.push(disemvowel(arr[i]))
      }
    }
    return newArr.join(' ')
   }
   
  
  /**
   * Takes in a string and returns the middle char.
   * If there is no character in the middle return the middle two characters
   * @param {string} str - an input string
   * @returns {string} - the return value string, either one or two characters
   * 
   * example: middleCharacter("hello") returns "l"
   * example: middleCharacter("ostentatious") returns "ta"
   */
  function middleCharacter(str) {
    // we take in string we split the string at its middle most character 
    var middle = Math.floor(str.length/2); // 6
    if (str.length % 2 == 0) // false true
        return str[middle-1] + str[middle];
    else
        return str[middle]; //l
  }
  
  
  /**
   * Takes in a string and reverses it.
   * Do not use .split()
   * 
   * example: reverseString("hello") returns "olleh"
   * example: reverseString("sit on a potato pan otis") returns "sito nap otatop a no tis"
   * 
   * @param {string} str - an input string
   * @returns {string} - the return value string, reversed str
   */
  function reverseString(str) {
    let newString = ''
    for ( i = str.length - 1; i >=0; i--){
    newString += str[i]
    }
    return newString
  }
  
  /**
   * Takes in a sentence string and reverses each word but not the
   * order of the words.
   * @param {string} str - an input string
   * @returns {string} - the return value string
   * 
   * example: reverseSentenceWords("hello world") returns "olleh dlrow"
   * example: reverseSentenceWords("i am a racecar") returns "i ma a racecar"
   */
  
  
  function reverseSentenceWords(string) {
    let str = string.split(" ")
    for (let i = 0; i < str.length; i++) {
      str[i] = reverseString(str[i]);
    }
    return str.join(" ");
  }
  
  module.exports = {
    firstChar,
    stringLength,
    lastLetter,
    capitalizeLastLetter,
    drEvil,
    verbing,
    removeLastWord,
    everyOtherLetter,
    disemvowel,
    disemvowelLongWords,
    middleCharacter,
    reverseString,
    reverseSentenceWords,
  };
  