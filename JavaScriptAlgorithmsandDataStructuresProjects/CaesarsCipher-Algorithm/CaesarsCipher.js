/*
 *One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a *shift cipher the meanings of the letters are shifted by some set amount.
 *A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ *'N', 'B' ↔ 'O' and so on.
 */

function rot13(str) { // LBH QVQ VG!

    let strList = str.split("")
    let finalStrList = []
  
    for(let i = 0; i < strList.length; i++){
      if(isALetter(strList[i])){
        finalStrList.push(rot13Letter(strList[i]))
      }else{
        finalStrList.push(strList[i])
      }
    }
    
    return finalStrList.join("")
  }
  
  function isALetter(char){
    return /[a-z]/i.test(char)
  }
  
  function rot13Letter(char){
    let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  
    if(alphabet.indexOf(char)+14 > alphabet.length){
      let x = 13 -(alphabet.indexOf("Z")+1-alphabet.indexOf(char))
      return alphabet[x]
    }else{
      return alphabet[alphabet.indexOf(char)+13]
    }
  }