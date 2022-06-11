/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function longestWord(text) {
    // Code goes here
    //given a string of text
    //return the longest word in the string
    //we split the string 
    //then we loop through it and compare which word has the greatest length
    //return the longest word
    let longest= ''
    let words = text.split(' ')
    for(let i=0; i< words.length; i ++){ 
         if (words[i].length > longest.length){
             longest = words[i]
         }
    }
    return longest 
}


module.exports = longestWord