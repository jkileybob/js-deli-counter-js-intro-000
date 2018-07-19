var katzDeli = []

function takeANumber(number){
  var line = []
  if (number.length === 0){
    return "The line is currently empty."
  }
  for (var i = 0; i < number.length; i++){
    line =+ (i + 1) + ". " + number[i] + ", "
  }
  line = line.slice(0, line.length-2)
  return "The line is currently: " + line
}
}
