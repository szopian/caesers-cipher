function rot13(str) {
  var decodedText = [];
  let letterMap = {A:'N',B:'O',C: 'P', D: 'Q',E: 'R',F: 'S',G: 'T',H: 'U',I: 'V',J: 'W',K: 'X',L: 'Y',M: 'Z',N: 'A',O: 'B',P: 'C',Q: 'D',R: 'E',S: 'F',T: 'G',U: 'H',V: 'I',W: 'J',X: 'K', Y: 'L',Z: 'M', " ":" ", "!":"!","?":"?", ".":"."}
 
  var words = str.split("");
  var letter = '';
  for(let prop in words){
    letter = letterMap[words[prop]];
    decodedText.push(letter);
  }

  return decodedText.join('');
}

rot13("SERR PBQR PNZC");
console.log(rot13("SERR CVMMN!"));