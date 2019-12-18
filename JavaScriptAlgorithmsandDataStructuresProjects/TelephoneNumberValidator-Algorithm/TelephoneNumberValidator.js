/*
 *Return true if the passed string looks like a valid US phone number.
 *The user may fill out the form field any way they choose as long as it has the format of a valid US number. *The following are examples of valid formats for US numbers (refer to the tests below for other variants):
 *
 *555-555-5555
 *(555)555-5555
 *(555) 555-5555
 *555 555 5555
 *5555555555
 *1 555 555 5555
 */


function telephoneCheck(str) {
  
    if(!hasKNums(10,str) && !hasKNums(11,str)){
      return false;
    }else if(!hasPermittedChars(str) || !hasCorrectParentheses(str)){ 
      return false;
    }else if(hasKNums(11,str) && !startsWithOne(str)){
      return false;
    }else{
      return true;
    }
  }
   
  function hasKNums(num,str){
    let list = str.split("")
    let list2 = []
    for (let i = 0; i < list.length;  i++){
      if(/^[0-9]$/.test(list[i])){list2.push(list[i])}  
    }
    return list2.length ==  num
  }
  
  function startsWithOne(str){
    return str[0]==1
  }
  
  function hasPermittedChars(str){
    return /^[0-9-()\s]+$/.test(str)
  }
  
  function hasCorrectParentheses(str){
    if(hasParentheses(str)){
      return /\(\d{3}\)/.test(str)
    }else{
      return true;
    }
  }
  
  function hasParentheses(str){
    let list = str.split("")
    for(let i = 0; i < list.length; i++){
      if(list[i] == "(" || list[i] == ")"){return true};
    }
    return false;
  }