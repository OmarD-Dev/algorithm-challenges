/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/


function vowelsCounter(text) {
        // Code goes here
        let vowelsCount = 0;
        let v = ["a","e","i","o","u","A","E","I","O","U"];
        
        for(let i = 0;i < text.length;i++){
          
          for(let s=0;s<v.length;s++){
            
            if(text[i] === v[s]){
              vowelsCount++;
            }
          }
        }
        
        return vowelsCount;
    }




module.exports = vowelsCounter;
