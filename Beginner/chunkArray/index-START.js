/* 
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g  mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

// function chunkArray(array, size) {
//     // Code goes here
//     let array3 = array.concat(size)
//     array3 = [...new Set([...array,...size])]
//     return array3
// }
function chunkArray(array, size) {
    let newArray = []
    //let newSize = size
    for(i = 0; i < array.length; i+= size) { 
        newArray.push(array.slice(i, i+size))
    }
    console.log(newArray)
    return newArray
}


module.exports = chunkArray

module.exports = chunkArray