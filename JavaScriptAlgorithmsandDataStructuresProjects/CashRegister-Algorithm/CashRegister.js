/*
 *Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument       *(price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
 *
 *cid is a 2D array listing available currency.
 *
 *The checkCashRegister() function should always return an object with a status key and a change key.
 *
 *Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot *return the exact change.
 *
 *Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the *change due.
 *
 *Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to *lowest order, as the value of the change key.
 */

function checkCashRegister(price, cash, cid) {

    let denominations = [
                         {name: "ONE HUNDRED", ammount: 100},
                         {name: "TWENTY", ammount: 20},
                         {name: "TEN", ammount: 10},
                         {name: "FIVE", ammount: 5},
                         {name: "ONE", ammount: 1},
                         {name: "QUARTER", ammount: 0.25},
                         {name: "DIME", ammount: 0.1},
                         {name: "NICKEL", ammount: 0.05},
                         {name: "PENNY", ammount: 0.01}
                        ];
  
  let response = {status: null, change: []};
  let optionalCID = generateOpcionalCID(cid)
  
    if(price == cash){
      response.status = "OPEN";
      return response;
    }
  
    if((cash - price) == optionalCID.total){
      response.status = "CLOSED";
      response.change = optionalCID.change;
  
      return response;
    }
  
    if(cash-price > optionalCID.total){
      response.status = "INSUFFICIENT_FUNDS"
      
      return response;
    }
  
    response.change = calculateChange(cid, cash-price, denominations)
    
    if(getTotalOfChangeToGive(response.change) != cash - price){
      response.status = "INSUFFICIENT_FUNDS"
      response.change = []
      return response;
    }else{
      response.status = "OPEN"
      return response;
    }
  }
  
  function getTotalOfChangeToGive(aList){
  
    let total = 0;
    for(let i = 0; i < aList.length; i++){
      total += aList[i][1]
    }
    return Math.round(total * 100) / 100
  }
  
  function calculateChange(aCID, aChangeNeeded, denominationsToUse){
  
    let change = aChangeNeeded
    let changeToGive = []
    let reverseCID = aCID.reverse();

    for(let i = 0; i < reverseCID.length; i++){
  
      let value = getValueOfDenominationWithName(reverseCID[i][0], denominationsToUse)
      let iterNum = 0
      while(change >= value && reverseCID[i][1] != 0){
        
        change -= value
        reverseCID[i][1] -= value
        if(iterNum == 0){
          changeToGive.push([reverseCID[i][0], value]);
        }else{
          let tuple = getTupleDenominationValue(changeToGive, reverseCID[i][0]);
          tuple[1] += value;
        }
        change = Math.round(change * 100) / 100
        iterNum++
      }
    }
    return changeToGive
  }
  
  function getTupleDenominationValue(aListOfLists, aListFirstElement){
  
    for(let i = 0; i < aListOfLists.length; i++){
      if(aListOfLists[i][0] == aListFirstElement){return aListOfLists[i]}
    }
    return null
  }
  
  function getValueOfDenominationWithName(aDenominationName, denominations){
  
    for(let i = 0; i < denominations.length; i++){
   
      if(denominations[i].name == aDenominationName){return denominations[i].ammount}
    }
    return undefined;
  }
  
  function generateOpcionalCID(cid){
  
    let aCID = {change: cid, total: null}
  
    let aTotal = 0;
    for(let i = 0; i < cid.length; i++){
      aTotal += cid[i][1]
    }
    aCID.total = aTotal
    return aCID
  }