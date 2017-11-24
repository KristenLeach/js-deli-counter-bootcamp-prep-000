var katzDeli = [];

function takeANumber(katzDeliLine, newName){
  katzDeliLine.push(newName);
  return`Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
  var firstPerson = katzDeliLine.splice(0,1);
  return `Currently serving ${firstPerson}.`;
  }
  else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length > 0) {
    
  }
  else {
    return "The line is currently empty."
  }
}