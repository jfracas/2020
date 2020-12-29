function rot13(str) {
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var result = []
for (var i = 0; i<str.length; i++){
  if (alphabet.indexOf(str[i])== -1){
    result.push(str[i])
  }
  if(alphabet.indexOf(str[i])<=12 && alphabet.indexOf(str[i])>=0){
    result.push(alphabet[alphabet.indexOf(str[i])+13])
  } {result.push(alphabet[alphabet.indexOf(str[i])-13])
  }
}
  return result.join("")
}

rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
