function checkCashRegister(price, cash, cid) {
  var change = (cash - price).toFixed(2);
  var totalCash = []
//SHORTCUTS
    var hundreds = cid[8][1]
    var twentys = cid[7][1]
    var tens = cid[6][1]
    var fives = cid[5][1]
    var ones = cid[4][1]
    var quarters = cid[3][1]
    var dimes = cid[2][1]
    var nickels = cid[1][1]
    var pennies = cid[0][1]
//INITIALIZE DRAWER  
  var drawer = {status: "INSUFFICIENT_FUNDS", change: []}
//TO GET TOTAL CASH IN DRAWER
  function sum(num,total){
    return num+total
  }
  for(var i = 0; i<cid.length; i++){
    totalCash.push(cid[i][1])
  }
  var total = totalCash.reduce(sum).toFixed(2)

//START CHECKS:
//IF CHANGE IS EXACT
  if (change == total){
    drawer.status = "CLOSED";
    drawer.change = cid
    return drawer
  }
//IF TOTAL CID IS SHORT
  if (Math.round(total)<Math.round(change)){
    return drawer
  } 
//MAKING CHANGE
  else {
//HUNDREDS   
    if(change>=100&&hundreds!==0){
      if(hundreds<Math.floor(change/100)*100){
        drawer.change.push(["ONE HUNDRED", hundreds])
        change-=hundreds
        drawer.status="OPEN"
      } else{
     drawer.change.push(["ONE HUNDRED", Math.floor(change/100)*100])
     change-=(Math.floor(change/100)*100)
     drawer.status = "OPEN"}    
    } 
//TWENTYS    
    if (change>=20&&twentys!==0){
      if(twentys<Math.floor(change/20)*20){
        drawer.change.push(["TWENTY", twentys])
        change-=twentys
        drawer.status = "OPEN"
      } else {
      drawer.change.push(["TWENTY", Math.floor(change/20)*20])
      change-=(Math.floor(change/20)*20)
      drawer.status = "OPEN"}
    } 
//TENS
    if (change>=10&&tens!==0){
      if(tens<Math.floor(change/10)*10){
        drawer.change.push(["TEN", tens])
        change-=tens
        drawer.status="OPEN"
      } else{
      drawer.change.push(["TEN", Math.floor(change/10)*10])
      change-=(Math.floor(change/10)*10)
      drawer.status = "OPEN"}
    } 
//FIVES    
    if (change>=5&&fives!==0){
      if(fives<Math.floor(change/5)*5){
        drawer.change.push("FIVE", fives)
        change-=fives
        drawer.status="OPEN"
      } else{
      drawer.change.push(["FIVE", Math.floor(change/5)*5])
      change-=(Math.floor(change/5)*5)
      drawer.status="OPEN"}
    } 
//ONES    
    if (change>=1&&ones!==0){
      if(ones<Math.floor(change/1)*1){
        drawer.change.push("ONE", ones)
        change-=ones
        drawer.status="OPEN"
      }else{
      drawer.change.push(["ONE", Math.floor(change/1)*1])
      change-=(Math.floor(change/1)*1)
      drawer.status="OPEN"}     
    } 
//QUARTERS 
    if (change>=0.25&&quarters!==0){
      if(quarters<Math.floor(change/0.25)*0.25){
        drawer.change.push("QUARTER", quarters)
        change-=quarters
        drawer.status="OPEN"
      } else{
      drawer.change.push(["QUARTER", Math.floor(change/0.25)*0.25])
      change-=(Math.floor(change/0.25)*0.25)
      drawer.status="OPEN"}
    } 
//DIMES    
    if (change>=0.10&&dimes!==0){
      if(dimes<Math.floor(change/0.1)*0.1){
        drawer.change.push("DIME", dimes)
        change-=dimes
        drawer.status="OPEN"
      } else{
      drawer.change.push(["DIME", Math.floor(change/0.1)*0.1])
      change-=(Math.floor(change/0.1)*0.1)
      drawer.status="OPEN"}
    } 
//NICKELS    
    if (change>=0.05&&nickels!==0){
      if(nickels<Math.floor(change/0.05)*0.05){
        drawer.change.push("NICKEL", nickels)
        change-=nickels
        drawer.status="OPEN"
      } else {
      drawer.change.push(["NICKEL", Math.floor(change/0.05)*0.05])
      change-=(Math.floor(change/0.05)*0.05)
      drawer.status="OPEN"}
    } 
//PENNIES    
    if (change>=0.01&&pennies!==0){
     
      if(pennies<Math.floor(change/0.01)*0.01){
        drawer.change.push("PENNY", pennies)
        change-=pennies
        drawer.status="OPEN"
      } else{
      drawer.change.push(["PENNY", Math.floor(change.toFixed(2)/0.01)*0.01])
      change-=(Math.floor(change/0.01)*0.01)
      drawer.status="OPEN"}
    }  
//END CHECK: RETURN DRAWER 
console.log(change)
  if(change>=0&&change<=0.1){
    return drawer
  }
    }
    return {status: "INSUFFICIENT_FUNDS", change: []
  }
}
